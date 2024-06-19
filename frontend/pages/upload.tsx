import { useState } from 'react';
import { Box, Button, Image, Input, VStack, Text, Flex } from '@chakra-ui/react';
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
        <Box p={5}>
          <VStack spacing={5}>
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
        {file && (
          <Box p={5}>
            <Image src={URL.createObjectURL(file)} alt="Selected Image" width='50%' height='auto' />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}