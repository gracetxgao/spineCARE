import Link from 'next/link';
import React from 'react'
import { Box, Button, Flex, Text, Link as ChakraLink, Image } from '@chakra-ui/react';
import { Checkbox, IconButton, } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { SmallCloseIcon} from '@chakra-ui/icons'

const reminders = ["reminder 1", "reminder 2"]

export default function Reminders() {
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
                    <Button sx={{ backgroundColor: 'white', fontFamily: 'helvetica', color: '#386DB3', border: 'none', padding: '10px 20px', cursor: 'pointer'}}>
                        <Link href="/scans">Scans</Link>
                    </Button>
                    <Button sx={{ backgroundColor: 'white', fontFamily: 'helvetica', color: '#386DB3', border: 'none', padding: '10px 20px', cursor: 'pointer'}} marginInline={5}>
                        <Link href="/progress">Progress</Link>
                    </Button>
                    <Button>
                        <Link href="/reminders">Reminders</Link>
                    </Button>     
                </Flex>
                <Flex align="center">
                    <Button paddingInline={10}><Link href="/about">Sign Out</Link></Button>
                    <Image src="profileicon.png" alt="Profile" boxSize="50px" ml={3} mr={3} />
                </Flex>
                </Flex>
            </Flex>
            <Box p='2rem'>
                <Flex justifyContent="space-between" alignItems="center" borderBottom="1px solid #E2E8F0" marginBottom="2rem">
                    <Text as="h1" fontSize="2xl" mb={4} textAlign="center">
                        Reminders
                    </Text>
                    <Button>
                        + New Reminder
                    </Button>
                </Flex>

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                        <Tr>
                            <Th>Task</Th>
                            <Th>Date</Th>
                            <Th isNumeric>Time</Th>
                            <Th isNumeric></Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td><Checkbox>Wear brace</Checkbox></Td>
                            <Td>2023/07/11</Td>
                            <Td isNumeric>09:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Take brace off</Checkbox></Td>
                            <Td>2023/07/11</Td>
                            <Td isNumeric>17:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Wear brace</Checkbox></Td>
                            <Td>2023/07/12</Td>
                            <Td isNumeric>09:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Take brace off</Checkbox></Td>
                            <Td>2023/07/12</Td>
                            <Td isNumeric>17:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Physician appointment</Checkbox></Td>
                            <Td>2023/07/13</Td>
                            <Td isNumeric>15:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Make physio appointment</Checkbox></Td>
                            <Td>2024/01/01</Td>
                            <Td isNumeric>11:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Daily stretches</Checkbox></Td>
                            <Td>2024/01/03</Td>
                            <Td isNumeric>09:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Go to checkup</Checkbox></Td>
                            <Td>2024/02/24</Td>
                            <Td isNumeric>15:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Physician appointment</Checkbox></Td>
                            <Td>2024/2/27</Td>
                            <Td isNumeric>10:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox>Wear Brace</Checkbox></Td>
                            <Td>2024/03/02</Td>
                            <Td isNumeric>07:00</Td>
                            <Td isNumeric><IconButton
                            aria-label='exit'
                            fontSize='15px'
                            icon={<SmallCloseIcon />}
                            /></Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <div style={footerBox}>
                <div style={footerText}>SpineCARE</div>
                <Link href={'https://github.com/gracetxgao/spineCARE'}>
                <Image src='/github.png' alt='logo' width={10} height={10}/>
                </Link>
            </div>
        </Box>
    )
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

