import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex direction="column" align="center" minH="100vh" p={5}>
      <Flex w="100%" justify="flex-end" p={5}>
        <Button mr={4}>
          <Link href="/about">About</Link>
        </Button>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <Button>
          <Link href="/progress">Progress</Link>
        </Button>
      </Flex>
      <VStack spacing={4} align="center" mt="auto" mb="auto" width="50%">
        <Box textStyle="h1">SpineCARE</Box>
        <Box textStyle="h3" textAlign="center">
          AI powered companion monitoring and managing adolescent idiopathic scoliosis, guiding you towards a straighter spine
        </Box>
        <Image src="/logo.png" alt="logo" width={500} height={500} />
      </VStack>
    </Flex>
  );
}
