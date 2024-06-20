import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex direction="column" minH="100vh">
      <nav style={navbarStyle}>
        <div style={logoContainerStyle}>
            <img src="logo_flower.png" alt="Logo" style={logoStyle}/>
            <span style={{fontSize: '1.2rem', fontFamily: 'helvetica'}}>SpineCARE</span>
        </div>

        <div style={navbarStyle}>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </nav>

      <Flex 
        flex="1" 
        align="center" 
        justify="center" 
        direction={['column', 'column', 'row']}
        minH='100vh'
        mt={[0, 0, -100]}
      >
        <Box p={5} width={['100%', '100%', '40%']}>
          <VStack spacing={5}>
            <Text 
              as="h1" 
              fontSize={['2xl', '3xl', '4xl']} 
              mb={4} 
              textAlign="center" 
              fontWeight='bold'
            >
              SpineCARE
            </Text>
            <Text 
              as="h3" 
              fontSize={['lg', 'xl', '2xl']} 
              mb={4} 
              textAlign="center"
            >
              A tool designed to support individuals on their journey with adolescent idiopathic scoliosis, utilizing artificial intelligence to monitor spinal curvature.
            </Text>
            <Text>
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
            </Text>
          </VStack>
        </Box>
        <Box p={5} display="flex" justifyContent="center" width={['100%', '100%', '40%']} mt={[5, 5, 0]}>
          <Image src='/logo.png' alt='logo' width={500} height={500} />
        </Box>
      </Flex>
      <Flex 
        align="center" 
        justify="center" 
        direction={['column', 'column', 'row']}
        wrap="wrap"
        mt={10}
      >
        <Box p={2}>
          <Text textAlign="center" mb={4} fontSize={['md', 'md', 'lg']}>Built by team V5 for the AI4Good Lab 2024 Cohort</Text>
        </Box>
        <Box display="flex" flexDirection={['column', 'column', 'row']} flexWrap="wrap" justifyContent="center">
          <Box p={5} borderWidth={5} borderRadius={10} m={10}>
            <Image src='/pfp.jpg' alt='logo' width={200} height={200} />
            <Text textAlign="center" mt={10} fontSize={['md', 'md', 'lg']} fontWeight="bold">Aina Merchant</Text>
            <Text textAlign="center" mt={3} fontSize={['sm', 'sm', 'md']}>Trainee</Text>
          </Box>
          <Box p={5} borderWidth={5} borderRadius={10} m={10}>
            <Image src='/pfp.jpg' alt='logo' width={200} height={200} />
            <Text textAlign="center" mt={10} fontSize={['md', 'md', 'lg']} fontWeight="bold">Alicia Zhang</Text>
            <Text textAlign="center" mt={3} fontSize={['sm', 'sm', 'md']}>Trainee</Text>
          </Box>
          <Box p={5} borderWidth={5} borderRadius={10} m={10}>
            <Image src='/pfp.jpg' alt='logo' width={200} height={200} />
            <Text textAlign="center" mt={10} fontSize={['md', 'md', 'lg']} fontWeight="bold">Grace Gao</Text>
            <Text textAlign="center" mt={3} fontSize={['sm', 'sm', 'md']}>Trainee</Text>
          </Box>
          <Box p={5} borderWidth={5} borderRadius={10} m={10}>
            <Image src='/pfp.jpg' alt='logo' width={200} height={200} />
            <Text textAlign="center" mt={10} fontSize={['md', 'md', 'lg']} fontWeight="bold">Katie Sun</Text>
            <Text textAlign="center" mt={3} fontSize={['sm', 'sm', 'md']}>Trainee</Text>
          </Box>
          <Box p={5} borderWidth={5} borderRadius={10} m={10}>
            <Image src='/pfp.jpg' alt='logo' width={200} height={200} />
            <Text textAlign="center" mt={10} fontSize={['md', 'md', 'lg']} fontWeight="bold">Mary Kong</Text>
            <Text textAlign="center" mt={3} fontSize={['sm', 'sm', 'md']}>Trainee</Text>
          </Box>
          <Box p={5} borderWidth={5} borderRadius={10} m={10}>
            <Image src='/pfp.jpg' alt='logo' width={200} height={200} />
            <Text textAlign="center" mt={10} fontSize={['md', 'md', 'lg']} fontWeight="bold">Negareh Mahboubi</Text>
            <Text textAlign="center" mt={3} fontSize={['sm', 'sm', 'md']}>Trainee</Text>
          </Box>
          <Box p={5} borderWidth={5} borderRadius={10} m={10}>
            <Image src='/pfp.jpg' alt='logo' width={200} height={200} />
            <Text textAlign="center" mt={10} fontSize={['md', 'md', 'lg']} fontWeight="bold">Paige Tuttosi</Text>
            <Text textAlign="center" mt={3} fontSize={['sm', 'sm', 'md']}>TA</Text>
          </Box>
          <Box p={5} borderWidth={5} borderRadius={10} m={10}>
            <Image src='/pfp.jpg' alt='logo' width={200} height={200} />
            <Text textAlign="center" mt={10} fontSize={['md', 'md', 'lg']} fontWeight="bold">Diana Moyano</Text>
            <Text textAlign="center" mt={3} fontSize={['sm', 'sm', 'md']}>Mentor</Text>
          </Box>
        </Box>
      </Flex>
      <div style={footerBox}>
        <div style={footerText}>SpineCARE</div>
        <Link href={'https://github.com/gracetxgao/spineCARE'}>
          <Image src='/github.png' alt='logo' width={40} height={40}/>
        </Link>
      </div>
    </Flex>
  );
}

const navbarStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  color: 'black',
  padding: '10px 20px'
};

const logoContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center'
};

const logoStyle: React.CSSProperties = {
  width: '90px', 
  height: 'auto',
  marginRight: '10px'
};

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