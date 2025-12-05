import { Image, Box, Text } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';
import { useTypewriter } from '@/hooks/useTypewriter';
import './LandingSection.css';
import { GuessesSection } from '../WordGame/GuessSection';
import WordGame from '../WordGame/WordGame';
import profile_pic from '@/assets/bennettProfilePic.png';
import { useColorModeValue } from '../ui/color-mode';
import RulesSection from '../WordGame/RulesSection';

const welcomeText = 'Welcome to My Portfolio !';
const secondLineText = "I'm Bennett, a Full-Stack Developer";

const LandingSection = () => {
  const colorMode = useColorModeValue('light', 'dark');
  const firstLine = useTypewriter({ text: welcomeText, speed: 70 });
  const secondLine = useTypewriter({
    text: secondLineText,
    speed: 50,
    startDelay: firstLine.isComplete ? 0 : 999999,
  });

  const slideInDelayedClass = secondLine.isComplete ? 'slide-in-left' : 'slide-in-hidden';
  const slideInClass = secondLine.isComplete ? 'slide-in-left-delayed' : 'slide-in-hidden';
  const slideInRightClass = secondLine.isComplete ? 'slide-in-right' : 'slide-in-right-hidden';

  return (
    <FullScreenSection id="home-section" alignItems="stretch">
      <Box
        pt="72px"
        w="100%"
        minH="100vh"
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignContent="center"
        overflow="hidden"
      >
        <Box
          className="introduction"
          alignSelf="flex-start"
          m="20px"
          display="flex"
          flexDirection="column"
          gap={9}
        >
          <Text fontSize="2xl" className="typewriter ">
            {firstLine.displayedText}
          </Text>
          <Text fontSize="5xl" fontWeight="bold">
            {secondLine.displayedText}
            {secondLine.isComplete && <span className="char-blink">.</span>}
          </Text>
          <Text className={slideInDelayedClass} fontSize="xl" maxWidth="600px">
            I specialize in building web applications using modern technologies like{' '}
            <strong>React</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>.{' '}
            <u>Try out the word game I created on the page!</u>
          </Text>
          <Text className={slideInDelayedClass} fontSize="xl" maxWidth="600px">
            I live in <strong>Seattle</strong> and some of my interests include{' '}
            <strong>hiking in the PNW</strong>, <strong>gaming</strong>, and{' '}
            <strong>baseball</strong>.
          </Text>
          <Box className={slideInClass} display="flex" alignItems="center">
            <Image
              src={profile_pic}
              alt="Bennett's Profile Picture"
              borderRadius="50px"
              boxSize="400px"
              border="2px solid #14b8a6"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          p={5}
          gap={5}
          className={slideInRightClass}
        >
          <RulesSection />
          <Box
            className="word-game"
            display="flex"
            flexDirection={{ md: 'row', sm: 'column' }}
            justifyContent="space-evenly"
            gap={4}
            p={6}
            border="2px solid #14b8a6"
            borderRadius="md"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
          >
            <GuessesSection />
            <WordGame />
          </Box>
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;
