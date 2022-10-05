import {Box, Flex, useBreakpointValue} from "@chakra-ui/react";
import {motion} from "framer-motion";

type SocialCrossProps = {
  size?: number;
};

const socialButtonVariants = {
  1: (dispValue: number) => ({y: -dispValue, opacity: 1}),
  2: (dispValue: number) => ({x: dispValue, opacity: 1}),
  3: (dispValue: number) => ({y: dispValue, opacity: 1}),
  4: (dispValue: number) => ({x: -dispValue, opacity: 1}),
};

const SocialCross = ({size}: SocialCrossProps) => {
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

export default SocialCross;
