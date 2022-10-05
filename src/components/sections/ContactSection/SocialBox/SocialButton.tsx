import {IconButton, Link, useBreakpointValue} from "@chakra-ui/react";
import {motion} from "framer-motion";

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

export default SocialButton;
