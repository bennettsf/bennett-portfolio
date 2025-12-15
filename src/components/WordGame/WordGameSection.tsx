import { Box, Heading } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';
import RulesSection from './RulesSection';
import { GuessesSection } from './GuessSection';
import WordGame from './WordGame';

import { useColorModeValue } from '../ui/color-mode';

const WordGameSection = () => {
  const colorMode = useColorModeValue('black', 'white');
  return (
    <FullScreenSection
      textAlign="center"
      alignItems="center"
      display="flex"
      justifyContent="center"
      py={4}
      id="word-game-section"
      width="100%"
    >
      <Box display="flex" flexDirection="column" justifyContent="space-evenly" p={5} gap={5}>
        <Heading size={{ md: '4xl', sm: '3xl' }}>Word Game</Heading>
        <RulesSection />
        <Box
          className="word-game"
          display="flex"
          flexDirection={{ md: 'row', sm: 'column' }}
          justifyContent="space-evenly"
          gap={4}
          p={6}
          border={`2px solid ${colorMode}`}
          borderRadius="md"
        >
          <GuessesSection />
          <WordGame />
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default WordGameSection;
