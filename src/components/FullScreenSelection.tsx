import { VStack } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';
import React, { type ReactNode } from 'react';
import { useColorModeValue } from './ui/color-mode';

interface FullScreenSectionProps extends StackProps {
  children: ReactNode;
}

/**
 * FullScreenSection
 * - Wraps content in a full viewport height section
 * - Sets background/text color according to color mode
 * - Passes additional Chakra props via spread operator
 */
const FullScreenSection: React.FC<FullScreenSectionProps> = ({ children, ...boxProps }) => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('black', 'white');

  return (
    <VStack
      bg={bg}
      color={color}
      {...boxProps} // still passes any extra props from parent
    >
      <VStack px={4} maxWidth="1280px" minHeight="100vh" gap={8}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
