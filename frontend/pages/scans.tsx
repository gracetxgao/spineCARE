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
    <Box>
      <Flex
        direction={['column', 'column', 'row']}
        justify="space-between"
        align="center"
        backgroundColor="white"
        color="black"
        p={3}
        mb={5}
      >
        <Flex w="100%" justify={['space-between', 'space-between', 'space-between']} align="center" mb={[2, 2, 0]}>
          <Flex align="center">
            <Image src="logo_flower.png" alt="Logo" boxSize="90px" mr={3} />
            <Text fontSize="1.2rem" fontFamily="helvetica">SpineCARE</Text>
          </Flex>
          <Flex direction={['row', 'row']} justify="center" align="center" w="100%">
            <Button>
              <Link href="/scans">Scans</Link>
            </Button>
            <Button sx={{ backgroundColor: 'white', fontFamily: 'helvetica', color: '#386DB3', border: 'none', padding: '10px 20px', cursor: 'pointer'}} marginInline={5}>
              <Link href="/progress">Progress</Link>
            </Button>
            <Button sx={{ backgroundColor: 'white', fontFamily: 'helvetica', color: '#386DB3', border: 'none', padding: '10px 20px', cursor: 'pointer',}}>
              <Link href="/reminders">Reminders</Link>
            </Button>        
          </Flex>
          <Flex align="center">
            <Button paddingInline={10}><Link href="/about">Sign Out</Link></Button>
            <Image src="profileicon.png" alt="Profile" boxSize="50px" ml={3} mr={3} />
          </Flex>
        </Flex>
      </Flex>

      <Box p="3rem">
        <Heading as="h2" size="lg" mb="1rem">Your Scans</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="1rem" mb="2rem">
          {scans.map(scan => (
            <Box key={scan.id} textAlign="center" display="flex" flexDirection="column" justifyContent="space-between">
              <Image src={scan.src} alt={scan.label} borderRadius="md" objectFit="cover" width='auto' height={'50vh'} />
              <Text>{scan.label}</Text>
              <Text fontSize="sm" color="gray.500">{scan.date}</Text>
            </Box>
          ))}
          <Button variant="outline" height={'50vh'}>
            <Link href="/upload">
              + New Image
            </Link>
          </Button>
        </SimpleGrid>
        <ChakraLink as={Link} href="#" display="block" textAlign="right" mb="2rem">See More</ChakraLink>

        <Heading as="h2" size="lg" mb="1rem">Your Back Images</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="1rem" mb="2rem">
          {backImages.map(image => (
            <Box key={image.id} textAlign="center">
              <Image src={image.src} alt={image.label} borderRadius="md" height={'50vh'} width="auto"/>
              <Text>{image.label}</Text>
              <Text fontSize="sm" color="gray.500">{image.date}</Text>
            </Box>
          ))}
          <Button variant="outline" height={'50vh'}>
            <Link href="/upload">
              + New Image
            </Link>
          </Button>
        </SimpleGrid>
        <ChakraLink as={Link} href="#" display="block" textAlign="right">See More</ChakraLink>
      </Box>
      <div style={footerBox}>
        <div style={footerText}>SpineCARE</div>
        <Link href={'https://github.com/gracetxgao/spineCARE'}>
          <Image src='/github.png' alt='logo' width={10} height={10}/>
        </Link>
      </div>
    </Box>
  );
}

const footerBox: React.CSSProperties = {
  width: '100vw',
  height: '150px',
  backgroundColor: '#EEF5FF',
  marginTop: '50px',
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center',
  flexDirection: 'column'
};

const footerText: React.CSSProperties = {
  textAlign: 'center',
  fontWeight: 'normal',
  fontFamily: 'helvetica',
  paddingBottom: '20px'
};
