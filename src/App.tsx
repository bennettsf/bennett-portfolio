import { Box } from '@chakra-ui/react';
import Header from './components/Header/Header';
import LandingSection from './components/Landing/LandingSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import ContactSection from './components/WordGame/WordGameSection';
import { WordGuessesProvider } from './context/WordGuessesContext';
import { SelectedTilesProvider } from './context/SelectedTilesContext';
import { SelectedTagsProvider } from './context/SelectedTagsContext';

function App() {
  return (
    <WordGuessesProvider>
      <SelectedTilesProvider>
        <Box>
          <Header />
          <LandingSection />
          <SelectedTagsProvider>
            <ProjectsSection />
          </SelectedTagsProvider>
          <ContactSection />
        </Box>
      </SelectedTilesProvider>
    </WordGuessesProvider>
  );
}

export default App;
