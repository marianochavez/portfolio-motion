import {useContext} from "react";
import {Box, Flex, Divider, Heading, Center} from "@chakra-ui/react";
import {motion} from "framer-motion";

import {DataContext} from "../../../context";

import ContactForm from "./ContactForm";
import SocialBox from "./SocialBox";

const ContactSection = () => {
  const {language} = useContext(DataContext);

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
        <SocialBox />
        <Divider
          borderColor="text-contrast-lg"
          display={{base: "none", md: "flex"}}
          h="200px"
          order={2}
          orientation="vertical"
        />
        <Box
          as={motion.div}
          flex={1}
          initial={{opacity: 0}}
          order={[1, 3]}
          transition="ease-in 0.3s"
          w="full"
          whileInView={{opacity: 1}}
        >
          <ContactForm language={language} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSection;
