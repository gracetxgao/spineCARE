import { useState } from 'react';
import { Box, Button, Image, Input, VStack, Text, Flex, Center } from '@chakra-ui/react';
import Link from 'next/link';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPredictions(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <Flex direction="column" minH="100vh" p={5}>
        <Flex w="100%" justify="flex-end" p={5}>
            <Button mr={4}>
                <Link href="/about">About</Link>
            </Button>
            <Button>
                <Link href="/login">Login</Link>
            </Button>
        </Flex>
    
        <Flex align="center" justify="center" flex="1" p={5}>
            <Box p={10} sx={{ borderWidth: '5px' }} w={'40vw'} h={'80vh'} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <VStack spacing={10} alignItems={'center'} display={'flex'}>
                <Text>Upload an x-ray or back image</Text>
                <Input type="file" onChange={handleFileChange} />
                <Button onClick={handleSubmit}>Upload and Predict</Button>
                {predictions && (
                    <Box>
                    <Text>Predictions:</Text>
                    {Object.keys(predictions).map((label) => (
                        <Text key={label}>{`${label}: ${predictions[label].toFixed(4)}`}</Text>
                    ))}
                    </Box>
                )}
                </VStack>
            </Box>
            <Box p={5}>
                {file ? 
                <Box p={10} sx={{ borderWidth: '5px' }} w={'40vw'} h={'80vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={URL.createObjectURL(file)} alt="Selected Image" width='70%' height='auto' />
                </Box>
                :
                <Box p={10} sx={{ borderWidth: '5px' }} w={'40vw'} h={'80vh'}></Box>
                }
            </Box>
        </Flex>
    </Flex>
  
  );
}