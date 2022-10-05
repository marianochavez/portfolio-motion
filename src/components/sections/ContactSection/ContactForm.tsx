import {Button, Flex, FormControl, FormErrorMessage, Input, Textarea} from "@chakra-ui/react";

import {useContactForm} from "../../../hooks/useContactForm";
import {isEmail} from "../../../utils/validation";

type ContactFormProps = {
  language: string;
};

const ContactForm = ({language}: ContactFormProps) => {
  const {register, handleSubmitForm, isLoading, errors} = useContactForm({language});

  return (
    <form
      noValidate
      style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}
      onSubmit={handleSubmitForm}
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
              required: language === "es" ? "Este campo es requerido" : "This field is required",
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
              required: language === "es" ? "Este campo es requerido" : "This field is required",
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
              required: language === "es" ? "Este campo es requerido" : "This field is required",
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
  );
};

export default ContactForm;
