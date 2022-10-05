import {useContext} from "react";
import {Box, Center, Heading, SimpleGrid} from "@chakra-ui/react";

import {DataContext} from "../../../context";

import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  const {language, portfolio} = useContext(DataContext);

  return (
    <Box>
      <Center p={10}>
        <Heading fontSize="4xl">{language === "es" ? "Proyectos" : "Projects"}</Heading>
      </Center>

      <SimpleGrid columns={[1, 2, 2, 3]} gap={6} px={{base: "3xl", md: "2xl", lg: "5xl"}}>
        {portfolio.projects.map((project) => (
          <ProjectItem key={project.name} language={language} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectSection;
