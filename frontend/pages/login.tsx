import Link from 'next/link';
import { Input, Button, Flex, Box, VStack, Heading } from '@chakra-ui/react';

export default function Login() {
    return (
        <Flex 
            direction="column" 
            align="center" 
            justify="center" 
            minH="100vh" 
        >
            <Box 
                bg="white"
                p={8}
                borderRadius="md" 
                width={['90%', '80%', '50%', '40%']}
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
