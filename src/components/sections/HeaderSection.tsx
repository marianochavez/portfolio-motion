import {Box, Flex, Heading, HStack, Image, Stack} from "@chakra-ui/react";
import {motion, useTransform} from "framer-motion";
import {useContext} from "react";

import {DataContext} from "../../context";
import {useScrollClock} from "../../hooks/useScrollClock";
import TextReveal from "../ui/TextReveal";

const MotionHStack = motion(HStack);
const MotionBox = motion(Box);

const HeaderSection = () => {
  const {portfolio} = useContext(DataContext);

  return (
    <Box h="100vh">
      <Flex alignItems="center" h="100%" justifyContent="center">
        <Stack transform={{base: "scale(0.75)", md: "none"}}>
          <Box h="24rem" pos="relative" w="24rem">
            <GradientImg />
            <Box left="50%" pos="absolute" top="50%" transform="translate(-50%, -50%)" w="44rem">
              <Heading size="3xl">
                <TextReveal delay={0.25} text={portfolio.about.firstName} />
              </Heading>
              <Heading size="3xl" textAlign="end">
                <TextReveal delay={0.45} text={portfolio.about.lastName} />
              </Heading>
            </Box>

            <MotionHStack
              animate={{opacity: 1}}
              initial={{opacity: 0}}
              transition={{delay: 0.8, duration: 0.8}}
            >
              <Heading size="md">Frontend</Heading>
              <Box alignSelf="center" bg="border-contrast-xl" flex={1} h="1px" />
              <Heading size="md">Developer</Heading>
            </MotionHStack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

const GradientImg = () => {
  const clock = useScrollClock({scrollAccelerationFactor: 50});
  const rotate = useTransform(clock, (time) => time / 100);

  return (
    <Box
      borderBottomLeftRadius="12rem"
      borderTopRightRadius="12rem"
      h="100%"
      overflow="hidden"
      pos="relative"
      transform="translateZ(0)"
      w="100%"
    >
      <MotionBox
        h="100%"
        style={{
          rotate: rotate,
          scale: 1.45,
        }}
        w="100%"
      >
        <Image
          alt="Mariano Chavez"
          h="auto"
          src="https://res.cloudinary.com/chavedo/image/upload/c_fill,h_540,w_540/v1661138977/portfolio/20353670.webp"
          w="512px"
        />
      </MotionBox>
    </Box>
  );
};

export default HeaderSection;
