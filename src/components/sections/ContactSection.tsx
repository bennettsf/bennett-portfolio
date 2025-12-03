import { Heading } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';

const ContactSection = () => {
  return (
    <FullScreenSection gap={8}>
      <Heading size={{ md: '5xl', sm: '3xl' }} py={6} id="contact-section">
        Contact me
      </Heading>
    </FullScreenSection>
  );
};

export default ContactSection;
