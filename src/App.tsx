import {Box} from "@chakra-ui/react";
import {Element} from "react-scroll";

import AboutSection from "./components/sections/AboutSection";
import HeaderSection from "./components/sections/HeaderSection";
import ProjectSection from "./components/sections/ProjectsSection";
import {Navbar} from "./components/ui/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Element name="intro">
        <HeaderSection />
      </Element>
      <Element name="about">
        <AboutSection />
      </Element>
      <Element name="projects">
        <ProjectSection />
      </Element>
      <Box h="200vh" />
    </Box>
  );
}

export default App;
