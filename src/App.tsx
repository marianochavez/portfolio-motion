import {Box} from "@chakra-ui/react";
import {Element} from "react-scroll";

import AboutSection from "./components/sections/AboutSection";
import HeaderSection from "./components/sections/HeaderSection";
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
      <Box h="200vh" />
    </Box>
  );
}

export default App;
