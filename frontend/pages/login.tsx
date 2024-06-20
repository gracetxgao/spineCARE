import Link from 'next/link';
import { Input, Button, Flex, Box, VStack, Heading } from '@chakra-ui/react';

export default function Login() {
    return (
        <Flex 
            direction="column" 
            align="center" 
            justify="center" 
            minH="100vh" 
            p={5} // Adjust padding here as needed
            bg="gray.50" // Optional: Add a background color for better visibility
        >
            <Box 
                bg="white" // Optional: Background color for the login box
                p={8} // Padding inside the login box
                borderRadius="md" // Optional: Border radius for rounded corners
                boxShadow="lg" // Optional: Add a shadow for better aesthetics
                width={['90%', '80%', '50%', '40%']} // Responsive width
                maxWidth="md"
            >
                <VStack spacing={4}>
                    <Heading as="h1" size="xl">Log in</Heading>
                    <Input placeholder='Username' />
                    <Input placeholder='Password' type='password' />
                    <Link href="/scans">
                        <Button colorScheme='blue' width="full">Log in</Button>
                    </Link>
                </VStack>
            </Box>
        </Flex>
    )
}
