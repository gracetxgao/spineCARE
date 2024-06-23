import { useState } from 'react';
import { Box, Button, Image, Input, VStack, Text, Flex, Center } from '@chakra-ui/react';
import Link from 'next/link';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'


export default function Upload() {
    const [file, setFile] = useState(null);
    const [predictions, setPredictions] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://spinecare-backend.vercel.app/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPredictions(data);
            onOpen();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const renderPrediction = () => {
        console.log(predictions);
        var pred = ['unknown', 1]
        if (predictions) {
            const scol = predictions["back image with scoliosis"]
            const norm = predictions["regular back image"]
    
            if (scol > norm) {
                pred[0] = "Scoliosis"
                pred[1] = scol.toFixed(4) * 100
            } else {
                pred[0] = "No scoliosis"
                pred[1] = norm.toFixed(4) * 100
            }
    
            console.log(pred);
        }
        
        return (
            <Box>
                <Text>This image shows:</Text>
                <Text>{pred[0]} ({pred[1]}% likelihood)</Text>
                {/* {Object.keys(predictions).map((label) => (
                <Text key={label}>
                    {label === "back image with scoliosis" ? 
                        `scoliosis (${predictions[label].toFixed(4)})% likelihood` :
                        `no scoliosis (${predictions[label].toFixed(4)})% likelihood`
                    }</Text>
                ))} */}
            </Box>
        );
    };

    return (
        <Box>
            <Flex
                direction={['column', 'column', 'row']}
                justify={['center', 'space-between', 'space-between']}
                align="center"
                backgroundColor="white"
                color="black"
                p={3}
                mb={5}
                w="100%"
            >
                <Flex align="center">
                    <Image src="logo_flower.png" alt="Logo" boxSize="90px" mr={3} />
                    <Text fontSize="1.2rem" fontFamily="helvetica">SpineCARE</Text>
                </Flex>
                <Flex direction='row' justify="center" align="center" mb={[3,0,0]}>
                    <Button>
                        <Link href="/scans">Scans</Link>
                    </Button>
                    <Button sx={{ backgroundColor: 'white', fontFamily: 'helvetica', color: '#386DB3', border: 'none', padding: '10px 20px', cursor: 'pointer' }} marginInline={[0, 0, 5]}>
                        <Link href="/progress">Progress</Link>
                    </Button>
                    <Button sx={{ backgroundColor: 'white', fontFamily: 'helvetica', color: '#386DB3', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                        <Link href="/reminders">Reminders</Link>
                    </Button>        
                </Flex>
                <Flex align="center">
                    <Button paddingInline={10}><Link href="/about">Sign Out</Link></Button>
                    <Image src="profileicon.png" alt="Profile" boxSize="50px" ml={3} mr={3} />
                </Flex>
            </Flex>

            <Box display={"flex"} flexDirection={['column', 'row', 'row']} margin={[,0,'2rem']} alignItems={'center'} justifyContent={'center'}>
                <Box sx={{ borderWidth: '5px', borderRadius: '20px' }} w={['80vw', '40vw']} h={['50vh', '80vh']} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={"column"} p={10} mr={[0,5]} mb={[10,0]}>
                    <Text fontWeight={'bold'}>Upload an x-ray or back image</Text>
                    <Input type="file" onChange={handleFileChange} m={10}/>
                    <Button onClick={handleSubmit}>Predict</Button>

                    <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Prediction</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {renderPrediction() || <Text>Loading...</Text>}
                            </ModalBody>
                            <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
                <Box ml={[0,5]}>
                    {file ? (
                        <Box p={10} sx={{ borderWidth: '5px', borderRadius: '20px' }} w={['80vw', '40vw']} h={['50vh', '80vh']} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Image src={URL.createObjectURL(file)} alt="Selected Image" width='auto' height='100%' />
                        </Box>
                    ) : (
                        <Box p={10} sx={{ borderWidth: '5px', borderRadius: '20px' }} w={['80vw', '40vw']} h={['50vh', '80vh']}></Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
