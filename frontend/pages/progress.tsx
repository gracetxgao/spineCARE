import Link from 'next/link';
import { Box, Button, Flex, VStack, Image, Text } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, IconButton, Checkbox } from '@chakra-ui/react'
import { SmallCloseIcon} from '@chakra-ui/icons'


export default function Progress() {
    return (
        <Box style={all}>
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
                    <Button sx={{ backgroundColor: 'white', fontFamily: 'helvetica', color: '#386DB3', border: 'none', padding: '10px 20px', cursor: 'pointer'}}>
                        <Link href="/scans">Scans</Link>
                    </Button>
                    <Button marginInline={[0, 0, 5]}>
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

            <Box p='2rem'>
                <Box flexDirection={['column', 'row']}
                    sx={{
                        backgroundColor: 'white',
                        // padding: '15px',
                        // marginLeft: '30px',
                        // marginRight: '30px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                    <div style={curveStatStyle}>
                        <div style={topStatText}>Current Curvature</div>
                        <div style={middleStatText}>31°, 20°</div>
                        <div style={bottomStatText}>-0.7% over month</div>
                    </div>
                    <div style={eachStatStyle}>
                        <div style={topStatText}>Daily Brace Wear Average</div>
                        <div style={middleStatText}>17 hours</div>
                        <div style={bottomStatText}>-10% over month</div>
                    </div>
                    <div style={eachStatStyle}>
                        <div style={topStatText}>Total Physiotherapy Sessions</div>
                        <div style={middleStatText}>10 hours</div>
                        <div style={bottomStatText}>+12% over month</div>
                    </div>
                </Box>

                <Box 
                    flexDirection={['column', 'row']} 
                    sx={{
                        backgroundColor: 'white',
                        // padding: '15px',
                        // marginLeft: '30px',
                        // marginRight: '30px',
                        display: 'flex',
                        justifyContent: 'space-between',

                    }}
                >
                    <Box sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)', border: '1px solid #cccc', borderRadius: '10px', }} p={'5px'} m={'20px'}>
                        <Image src="curvatureGraph.png" alt="curveGraph" width='100%' h="auto"/>
                    </Box>
                    <Box style={legendStyle} h="100%" m={'20px'} p={'20px'}>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Legend</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <Image src="greycircle.png" alt='grey circle' w="20%" h="auto"/>
                                        </Td>
                                        <Td>Thoracic</Td>
                                        <Td>current: 31 degrees</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Image src="bluecircle.png" alt='blue circle' w="20%" h="auto"/>
                                        </Td>
                                        <Td>Lumbar</Td>
                                        <Td>current: 20 degrees</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>

                <Box
                    flexDirection={['column', 'row']}
                    justifyContent="center"
                    backgroundColor="white"
                    padding="20px"
                >
                    <Box
                        style={buttonStatsStyle}
                        flexDir={['column', 'row']}
                    >
                        <Box flexDirection={['column', 'column']} w={['100%', '50%']} paddingRight={10}>
                            <Box style={physioButtonBox}>
                                <Button>+ Physiotherapy</Button>
                            </Box>
                            <Box style={physioBox}>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Thead>
                                        <Tr>
                                            <Th>Session</Th>
                                            <Th>Date</Th>
                                            <Th isNumeric>Hours</Th>
                                        </Tr>
                                        </Thead>
                                        <Tbody>
                                        <Tr>
                                            <Td>Physiotherapy with John</Td>
                                            <Td>2023/06/12</Td>
                                            <Td isNumeric>1:00</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Schroth Method with Alice</Td>
                                            <Td>2023/06/06</Td>
                                            <Td isNumeric>0:30</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Physiotherapy with John</Td>
                                            <Td>2023/05/29</Td>
                                            <Td isNumeric>1:30</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Schroth Method with Alice</Td>
                                            <Td>2023/05/14</Td>
                                            <Td isNumeric>0:30</Td>
                                        </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    
                        <Box flexDirection={['column', 'column']} w={['100%', '50%']}>
                            <Box style={braceButtonBox}>
                                <Button>+ Brace Wear</Button>
                            </Box>
                            <Box sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)', border: '1px solid #cccc', borderRadius: '10px', }} p={'10px'} m={'10px'} >
                                <Image src="braceGraph.png" alt="braceGraph" width={'100%'}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
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

const all = {
    backgroundColor: 'white',
    minHeight: '100vh',
    // padding: '3rem',
    // margin: '0px'
};

const statsStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '15px',
    marginLeft: '30px',
    marginRight: '30px',
    display: 'flex',
    justifyContent: 'space-between'
};


const curveStatStyle: React.CSSProperties = {
    backgroundImage: 'url("statsbg.png")',
    // backgroundColor: '#EEF5FF',
    border: '1px solid #cccc',
    borderRadius: '10px',
    flex: '1',
    textAlign: 'left',
    padding: '20px',
    margin: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)'
};

const eachStatStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #cccc',
    borderRadius: '10px',
    flex: '1',
    textAlign: 'left',
    padding: '20px',
    margin: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)'
};

const topStatText: React.CSSProperties = {
    fontSize: '13px', 
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    marginBottom: '10px' 
};
const middleStatText: React.CSSProperties = {
    fontSize: '45px', 
    fontWeight: '900px',
    fontFamily: 'arial',
    marginBottom: '10px' 
};
const bottomStatText: React.CSSProperties = {
    fontSize: '11px', 
    fontWeight: 'normal',
    color: '#8A8F92',
    fontFamily: 'helvetica',
    marginBottom: '10px' 
};

const curveGraphbox: React.CSSProperties = {
    width: '100%',
    // marginLeft: '10px'
};

const legendBox: React.CSSProperties = {
    width: '100%',
};

const imageBox: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0px'
};

const legendStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #cccc',
    borderRadius: '10px',
    flex: '1',
    textAlign: 'left',
    padding: '20px',
    // marginTop: '7px',
    // margin: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)'
};

const titleText: React.CSSProperties = {
    fontSize: '15px', 
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    marginBottom: '20px' 
};

const bottomStatsStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '15px',
    marginLeft: '30px',
    marginRight: '30px',
    display: 'flex',
    justifyContent: 'center'
};

const buttonStatsStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '0px',
    // marginLeft: '45px',
    // marginRight: '45px',
    // marginTop: '25px',
    display: 'flex',
    justifyContent: 'left'
};

const physioBox: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'white',
    border: '1px solid #cccc',
    borderRadius: '10px',
    textAlign: 'left',
    padding: '10px',
    margin: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)'
};

const physioButtonBox: React.CSSProperties = {
    width: '40%',
    backgroundColor: 'white',
    border: '0px solid #cccc',
    borderRadius: '10px',
    textAlign: 'left',
    paddingLeft: '10px',
    margin: '0px',
};

const braceBox: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0px',
};

const braceButtonBox: React.CSSProperties = {
    width: '40%',
    backgroundColor: 'white',
    border: '0px solid #cccc',
    borderRadius: '10px',
    textAlign: 'left',
    paddingLeft: '10px',
    marginTop: '0px',
};

const physioTable: React.CSSProperties = {
    backgroundColor: 'white',
    width: '90%',
    border: '0px solid #cccc',
    borderRadius: '10px',
    textAlign: 'left',
    padding: '20px',
    margin: '20px',

};

const tableHeader: React.CSSProperties = {
    color: '#8A8F92',
    fontFamily: 'helvetica',
    border: '0px solid #cccc',
    borderRadius: '10px',
};

const tableSession: React.CSSProperties = {
    backgroundColor: 'white',
    borderBottom: '1px solid #cccc',
    textAlign: 'left',
    fontFamily: 'arial',
    fontWeight: 'normal',
    paddingTop: '7px',
    paddingBottom: '7px'
};

const tableDateHour: React.CSSProperties = {
    backgroundColor: 'white',
    borderBottom: '1px solid #cccc',
    textAlign: 'right',
    fontFamily: 'arial',
    fontWeight: 'normal',
    paddingTop: '7px',
    paddingBottom: '7px'
};


const footerBox: React.CSSProperties = {
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
    fontFamily: 'helvetica'
};