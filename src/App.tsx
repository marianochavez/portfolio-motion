import {Box} from "@chakra-ui/react";
import {Element as ScrollSection} from "react-scroll";

import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeaderSection from "./components/sections/HeaderSection";
import ProjectSection from "./components/sections/ProjectSection";
import ChevronNav from "./components/ui/ChevronNav";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <Box>
      <Navbar />

      <ScrollSection name="intro">
        <HeaderSection />
      </ScrollSection>

      <ScrollSection name="about">
        <AboutSection />
        <ChevronNav toElement="projects" />
      </ScrollSection>

      <ScrollSection name="projects">
        <ProjectSection />
        <ChevronNav toElement="contact" />
      </ScrollSection>

      <ScrollSection name="contact">
        <ContactSection />
      </ScrollSection>

      <Footer />
    </Box>
  );
}

export default App;
