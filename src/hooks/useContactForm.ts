import {useToast} from "@chakra-ui/react";
import {send} from "@emailjs/browser";
import {useState} from "react";
import {useForm} from "react-hook-form";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type UseContactFormProps = {
  language: string;
};

export const useContactForm = ({language}: UseContactFormProps) => {
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

  return {register, handleSubmitForm: handleSubmit(onSubmit), isLoading, setIsLoading, errors};
};
