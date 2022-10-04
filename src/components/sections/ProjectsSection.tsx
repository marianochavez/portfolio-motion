import {useContext, useState} from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  Img,
  Link,
  SimpleGrid,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {motion} from "framer-motion";

import {DataContext} from "../../context";

const ProjectSection = () => {
  const {language, portfolio} = useContext(DataContext);

  return (
    <Box>
      <Center p={10}>
        <Heading fontSize="4xl">{language === "es" ? "Proyectos" : "Projects"}</Heading>
      </Center>

      <SimpleGrid columns={[1, 2, 2, 3]} gap={6} px={{base: "3xl", md: "2xl", lg: "5xl"}}>
        {portfolio.projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

type ProjectItemProps = {
  project: {
    name: string;
    img: string;
    tools: string[];
    url?: string | undefined;
    github: string;
    description: string;
  };
};

const boxVariants = {
  initial: {x: 0, y: 0},
  hovered: {x: 6, y: 6},
};

const imageVariants = {
  hovered: {scale: 1, opacity: 0.5},
};

const buttonVariants = {
  hovered: {opacity: 1},
};

const ProjectItem = ({project}: ProjectItemProps) => {
  const {language} = useContext(DataContext);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useBreakpointValue({base: true, sm: false});

  return (
    <GridItem backgroundColor="purple.600" borderRadius="lg">
      <Box
        animate={isMobile && isHovered ? "hovered" : "initial"}
        as={motion.div}
        backgroundColor="bg-card"
        borderRadius="lg"
        borderWidth="1px"
        h="100%"
        initial="initial"
        overflow="hidden"
        variants={boxVariants}
        whileHover="hovered"
        onHoverEnd={() => setIsHovered(false)}
        onHoverStart={() => setIsHovered(true)}
      >
        <Flex alignItems="center" justifyContent="center" overflow="hidden">
          <Img
            alt={project.name}
            as={motion.img}
            h="190px"
            initial={{scale: 1.05}}
            objectFit="cover"
            src={project.img}
            variants={imageVariants}
            w="100%"
            onTap={() => isMobile && setIsHovered((isHover) => !isHover)}
          />
          <HStack position="absolute" zIndex={100}>
            <Link isExternal href={project.github} variant="unstyled">
              <Button
                as={motion.button}
                colorScheme="purple"
                display={isHovered ? "block" : "none"}
                initial={{opacity: 0}}
                size="sm"
                variants={buttonVariants}
              >
                {language === "es" ? "Repositorio" : "Repository"}
              </Button>
            </Link>
            {project.url && (
              <Link isExternal href={project.url} variant="unstyled">
                <Button
                  as={motion.button}
                  colorScheme="purple"
                  display={isHovered ? "block" : "none"}
                  initial={{opacity: 0}}
                  size="sm"
                  variants={buttonVariants}
                >
                  {language === "es" ? "Página" : "Visit page"}
                </Button>
              </Link>
            )}
          </HStack>
        </Flex>

        <Box
          as={motion.div}
          h="100%"
          p={3}
          onTap={() => isMobile && setIsHovered((isHover) => !isHover)}
        >
          <Text fontSize="2xl" fontWeight="bold">
            {project.name}
          </Text>
          <Box fontSize="sm" pt={2}>
            {project.description}
          </Box>
          <Box pt={2}>
            {project.tools.map((tool) => (
              <Tag key={tool} fontSize="sm" fontWeight="bold" mr={1} mt={1} variant="subtle">
                {tool}
              </Tag>
            ))}
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
};

export default ProjectSection;
