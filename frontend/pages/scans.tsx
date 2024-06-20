// pages/scans.tsx
import { Box, Flex, Heading, Text, Button, Link as ChakraLink, Image, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';

const scans = [
  { id: 1, src: '/xray1.jpg', label: 'X-Ray 1', date: '2023/03/28' },
  { id: 2, src: '/xray2.jpg', label: 'X-Ray 2', date: '2023/06/25' },
  { id: 3, src: '/xray3.jpg', label: 'X-Ray 3', date: '2023/09/20' },
];

const backImages = [
  { id: 1, src: '/back1.jpg', label: 'Image 1', date: '2024/01/13' },
  { id: 2, src: '/back2.jpg', label: 'Image 2', date: '2024/03/19' },
];

export default function Scans() {
  return (
    <Box padding="2rem">
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" borderBottom="1px solid #E2E8F0" paddingBottom="1rem" marginBottom="2rem">
        <Flex>
          <ChakraLink as={Link} href="/scans" marginRight="2rem">Images</ChakraLink>
          <ChakraLink as={Link} href="/progress" marginRight="2rem">Progression</ChakraLink>
          <ChakraLink as={Link} href="/reminders" marginRight="2rem">Reminders</ChakraLink>
        </Flex>
        <Link href="/about">
                <Button colorScheme='blue'>Sign Out</Button>
        </Link>
      </Flex>

      {/* Your Scans Section */}
      <Heading as="h2" size="lg" marginBottom="1rem">Your Scans</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="1rem" marginBottom="2rem">
        {scans.map(scan => (
          <Box key={scan.id} textAlign="center" display="flex" flexDirection="column" justifyContent="space-between">
            <Image src={scan.src} alt={scan.label} borderRadius="md" height="100%" objectFit="cover"/>
            <Text>{scan.label}</Text>
            <Text fontSize="sm" color="gray.500">{scan.date}</Text>
          </Box>
        ))}
        <Button variant="outline" height="150px">
            <Link href="/upload">
                + New Image
            </Link>
        </Button>
      </SimpleGrid>
      <ChakraLink as={Link} href="#" display="block" textAlign="right" marginBottom="2rem">See More</ChakraLink>

      {/* Your Back Images Section */}
      <Heading as="h2" size="lg" marginBottom="1rem">Your Back Images</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="1rem" marginBottom="2rem">
        {backImages.map(image => (
          <Box key={image.id} textAlign="center">
            <Image src={image.src} alt={image.label} borderRadius="md" />
            <Text>{image.label}</Text>
            <Text fontSize="sm" color="gray.500">{image.date}</Text>
          </Box>
        ))}
        <Button variant="outline" height="150px">
            <Link href="/upload">
                + New Image
            </Link>
        </Button>
      </SimpleGrid>
      <ChakraLink as={Link} href="#" display="block" textAlign="right">See More</ChakraLink>
    </Box>
  );
}