import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useToast,
  Button,
  Divider,
  IconButton,
  useBreakpointValue,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import {send} from "@emailjs/browser";
import {motion} from "framer-motion";
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import {FaFileDownload} from "react-icons/fa";

import {DataContext} from "../../context";
import {isEmail} from "../../utils/validation";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const {language} = useContext(DataContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    } as ContactForm,
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async (form: ContactForm) => {
    setIsLoading(true);

    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
    } catch (error) {
      setIsLoading(false);

      return toast({
        title: "",
        description:
          language === "es"
            ? "Error al enviar el mensaje. Intente nuevamente."
            : "Error sending the message. Try again.",
        status: "error",
        duration: 8000,
        isClosable: true,
        position: "top-right",
      });
    }

    setIsLoading(false);
    reset();

    return toast({
      title: language === "es" ? "Mensaje enviado" : "Message sent",
      description: language === "es" ? "Gracias por contactarme!" : "Thanks for contacting me!",
      status: "success",
      duration: 8000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box>
      <Center p={10}>
        <Heading fontSize="4xl">{language === "es" ? "Contacto" : "Contact"}</Heading>
      </Center>
      <Flex
        alignItems="center"
        flexDir={{base: "column", md: "row"}}
        gap={10}
        justifyContent="center"
        p={{base: 5, md: 20}}
      >
        <Flex
          alignItems="center"
          flex={1}
          justifyContent="center"
          minH="150px"
          mt={{base: 10, md: 0}}
          order={[3, 1]}
          position="relative"
        >
          <CrossSocialButton />
          <SocialButton
            ariaLabel="GitHub"
            icon={<BsGithub />}
            order={1}
            url="https://github.com/marianochavez"
          />
          <SocialButton
            ariaLabel="Linkedin"
            icon={<BsLinkedin />}
            order={2}
            url="https://www.linkedin.com/in/mariano-chavez"
          />
          <SocialButton
            ariaLabel="Twitter"
            icon={<BsTwitter />}
            order={3}
            url="https://twitter.com/chavedoo"
          />
          <SocialButton
            ariaLabel="Curriculum vitae"
            icon={<FaFileDownload />}
            order={4}
            url="/cv-Mariano-Chavez.pdf"
          />
        </Flex>
        <Divider
          borderColor="text-contrast-lg"
          display={{base: "none", md: "flex"}}
          h="200px"
          order={2}
          orientation="vertical"
        />
        <Box flex={1} order={[1, 3]} w="full">
          <form
            noValidate
            style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Flex flexDir="column" gap={3} w="70%">
              <FormControl isInvalid={!!errors.name}>
                <Input
                  bg="bg-contrast-sm"
                  focusBorderColor="whiteAlpha.800"
                  id="name"
                  placeholder={language === "es" ? "Nombre" : "Name"}
                  size={{base: "lg", md: "md"}}
                  type="text"
                  {...register("name", {
                    required:
                      language === "es" ? "Este campo es requerido" : "This field is required",
                    minLength: {
                      value: 2,
                      message:
                        language === "es"
                          ? "El nombre debe ser del al menos 2 caracteres"
                          : "Name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        language === "es"
                          ? "El nombre puede ser de como máximo 50 caracteres"
                          : "The name can be a maximum of 50 characters",
                    },
                  })}
                />
                {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <Input
                  bg="bg-contrast-sm"
                  focusBorderColor="whiteAlpha.800"
                  id="email"
                  placeholder={language === "es" ? "Correo" : "Email"}
                  size={{base: "lg", md: "md"}}
                  type="email"
                  {...register("email", {
                    required:
                      language === "es" ? "Este campo es requerido" : "This field is required",
                    validate: isEmail,
                  })}
                />
                {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={!!errors.message}>
                <Textarea
                  bg="bg-contrast-sm"
                  focusBorderColor="whiteAlpha.800"
                  id="message"
                  placeholder={language === "es" ? "Mensaje" : "Message"}
                  size={{base: "lg", md: "md"}}
                  {...register("message", {
                    required:
                      language === "es" ? "Este campo es requerido" : "This field is required",
                    maxLength: {
                      value: 1000,
                      message:
                        language === "es"
                          ? "El mensaje no puede superar los 1000 caracteres"
                          : "Message cannot exceed 1000 characters",
                    },
                  })}
                />
                {errors.message && <FormErrorMessage>{errors.message.message}</FormErrorMessage>}
              </FormControl>

              <Button
                alignSelf="end"
                colorScheme="purple"
                disabled={isLoading}
                isLoading={isLoading}
                size={{base: "lg", md: "md"}}
                type="submit"
                variant="outline"
                w="full"
              >
                {language === "es" ? "Enviar" : "Send"}
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

type SocialButtonProps = {
  icon: React.ReactElement;
  order: number;
  url: string;
  displacement?: number;
  ariaLabel: string;
};

const socialButtonVariants = {
  1: (dispValue: number) => ({y: -dispValue, opacity: 1}),
  2: (dispValue: number) => ({x: dispValue, opacity: 1}),
  3: (dispValue: number) => ({y: dispValue, opacity: 1}),
  4: (dispValue: number) => ({x: -dispValue, opacity: 1}),
};

const SocialButton = ({icon, order, url, displacement, ariaLabel}: SocialButtonProps) => {
  const dispValue = useBreakpointValue({base: 70, md: 100});

  return (
    <Link
      isExternal
      alignItems="center"
      as={motion.a}
      display="flex"
      href={url}
      justifyContent="center"
      transitionDuration="0.3s"
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
    >
      <IconButton
        _hover={{color: "purple.300"}}
        aria-label={ariaLabel}
        as={motion.button}
        custom={(displacement ??= dispValue)}
        fontSize="5xl"
        icon={icon}
        initial={{opacity: 0}}
        position="absolute"
        rounded="full"
        size="lg"
        transition="linear 1s"
        variant="link"
        variants={socialButtonVariants}
        whileInView={`${order}`}
      />
    </Link>
  );
};

type CrossSocialButton = {
  size?: number;
};

const CrossSocialButton = ({size}: CrossSocialButton) => {
  const dispValue = useBreakpointValue({base: 70, md: 100}, {ssr: false});

  return (
    <Box
      as={motion.div}
      h="full"
      position="absolute"
      transition="ease-in-out 1s 1s"
      w="full"
      whileInView={{rotate: 720}}
    >
      <Flex alignItems="center" h="full" justifyContent="center" position="relative">
        <Box
          as={motion.div}
          borderTop="2px"
          color="purple.500"
          initial={{scaleX: 0}}
          position="absolute"
          rounded="full"
          transition="ease-in 1s"
          w={(size ??= dispValue)}
          whileInView={{scaleX: 1}}
        />
        <Box
          as={motion.div}
          borderLeft="2px"
          color="purple.500"
          h={(size ??= dispValue)}
          initial={{scaleY: 0}}
          position="absolute"
          rounded="full"
          transition="ease-in 1s"
          whileInView={{scaleY: 1}}
        />
        {[...Array(4)].map((e, i) => {
          const x = i === 1 ? dispValue! / 2 : i === 3 ? -dispValue! / 2 : 0;
          const y = i === 2 ? dispValue! / 2 : i === 0 ? -dispValue! / 2 : 0;

          return (
            <Box
              key={i}
              as={motion.div}
              bg="purple.500"
              h="10px"
              initial={{opacity: 0, x: 0, y: 0}}
              position="absolute"
              rounded="full"
              transition="ease-in 1s 1s"
              variants={socialButtonVariants}
              w="10px"
              whileInView={{opacity: 1, x, y}}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default ContactSection;
