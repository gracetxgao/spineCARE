import Link from 'next/link';
import React from 'react'
import { Box, Button, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Checkbox, IconButton, } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { SmallCloseIcon} from '@chakra-ui/icons'

const reminders = ["reminder 1", "reminder 2"]

export default function Reminders() {
    return (
        <Box padding="2rem">
            {/* Header */}
            <Flex justifyContent="space-between" alignItems="center" borderBottom="1px solid #E2E8F0" paddingBottom="1rem" marginBottom="2rem">
                <Flex>
                    <ChakraLink as={Link} href="/scans" marginRight="2rem">Images</ChakraLink>
                    <ChakraLink as={Link} href="/progression" marginRight="2rem">Progression</ChakraLink>
                    <ChakraLink as={Link} href="/reminders" marginRight="2rem">Reminders</ChakraLink>
                </Flex>
                <Link href="/about">
                    <Button colorScheme='blue'>Sign Out</Button>
                </Link>
            </Flex>
            {/* New reminder button */}
            <Flex justifyContent="space-between" alignItems="center" borderBottom="1px solid #E2E8F0" marginBottom="2rem">
                <Text as="h1" fontSize="2xl" mb={4} textAlign="center">
                    Reminders
                </Text>
                <Button>
                    + New Reminder
                </Button>
            </Flex>

            {/* Reminder list */}
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
                        <Td><Checkbox>Physician appointment</Checkbox></Td>
                        <Td>2024/01/08</Td>
                        <Td isNumeric>10:00</Td>
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
    )
}

