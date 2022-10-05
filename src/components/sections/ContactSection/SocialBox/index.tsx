import {Flex} from "@chakra-ui/react";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import {FaFileDownload} from "react-icons/fa";

import SocialButton from "./SocialButton";
import SocialCross from "./SocialCross";

const SocialBox = () => {
  return (
    <Flex
      alignItems="center"
      flex={1}
      justifyContent="center"
      minH="150px"
      mt={{base: 10, md: 0}}
      order={[3, 1]}
      position="relative"
    >
      <SocialCross />
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
  );
};

export default SocialBox;
