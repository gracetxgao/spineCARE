import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex direction="column" minH="100vh" p={5}>
      <Flex w="100%" justify="flex-end" p={5}>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </Flex>

      <Flex flex="1" align="center" justify="center">
        <Box flex="1" p={5}>
          <Text as="h1" fontSize="4xl" mb={4} textAlign="center">
            SpineCARE
          </Text>
          <Text as="h3" fontSize="2xl" mb={4} textAlign="center">
            A tool designed to support individuals on their journey with adolescent idiopathic scoliosis, utilizing artificial intelligence to monitor spinal curvature.
          </Text>
          <Text>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          </Text>
        </Box>
        <Box flex="1" p={5} display="flex" justifyContent="center">
          <Image src='/logo.png' alt='logo' width={500} height={500} />
        </Box>
      </Flex>
    </Flex>
  );
}
