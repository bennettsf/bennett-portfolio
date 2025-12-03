import { Box, Text } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';
import { useTypewriter } from '@/hooks/useTypewriter';
import './LandingSection.css';

const LandingSection = () => {
  const firstLine = useTypewriter({ text: 'Welcome to My Portfolio !', speed: 50 });
  const secondLine = useTypewriter({
    text: "I'm Bennett, a Full-Stack Developer",
    speed: 75,
    startDelay: firstLine.isComplete ? 0 : 999999,
  });

  return (
    <FullScreenSection id="home-section" alignItems="flex-start" justifyContent="flex-start">
      <Box mt="72px" alignSelf="flex-start">
        <Text fontSize="2xl" m="20px" className="typewriter ">
          {firstLine.displayedText}
        </Text>
        <Text fontSize="5xl" fontWeight="bold" m="20px">
          {secondLine.displayedText}
          {secondLine.isComplete && <span className="char-blink">.</span>}
        </Text>
        <Text className="description" fontSize="xl" m="20px" maxWidth="600px">
          {secondLine.isComplete &&
            'I specialize in building web applications using modern technologies like React, Node.js, and TypeScript.'}
        </Text>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;
