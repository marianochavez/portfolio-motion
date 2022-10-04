import {Box} from "@chakra-ui/react";
import {Element} from "react-scroll";

import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeaderSection from "./components/sections/HeaderSection";
import ProjectSection from "./components/sections/ProjectsSection";
import ChevronNav from "./components/ui/ChevronNav";
import Footer from "./components/ui/Footer";
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
        <ChevronNav toElement="projects" />
      </Element>
      <Element name="projects">
        <ProjectSection />
        <ChevronNav toElement="contact" />
      </Element>
      <Element name="contact">
        <ContactSection />
      </Element>
      <Footer />
    </Box>
  );
}

export default App;
