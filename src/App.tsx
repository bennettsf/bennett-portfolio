import { Box } from '@chakra-ui/react';
import Header from './components/Header/Header';
import LandingSection from './components/sections/LandingSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <Box>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}

export default App;
