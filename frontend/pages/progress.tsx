import Link from 'next/link';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';


export default function Progress() {
    return (
        <div style={all}>
            <nav style={navbarStyle}>
                <div style={logoContainerStyle}>
                    <img src="logo_flower.png" alt="Logo" style={logoStyle}/>
                    <span style={{fontSize: '1.2rem', fontFamily: 'helvetica'}}>SpineCARE</span>
                </div>

                <div style={pages}>
                    <button style={buttonStyle}><Link href="/scans">Scans</Link></button>
                    <Button><Link href="/progress">Progress</Link></Button>
                    <button style={buttonStyle}><Link href="/reminders">Reminders</Link></button>
                </div>

                <div style={navbarStyle}>
                    <Button>Sign Out</Button>
                    <div style={profileContainerStyle}>
                        <img src="profileicon.png" alt="Profile" style={profileStyle}/>
                    </div>
                </div>
            </nav>

            <div style={statsStyle}>
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
            </div>

            <div style={statsStyle}>
                <div style={curveGraphbox}>
                    <div style={imageBox}>
                        <img src="curvatureGraph.png" alt="curveGraph"/>
                    </div>
                </div>
                <div style={legendBox}>
                    <div style={legendStyle}>
                        <div style={titleText}>Legend</div>
                        <table>
                            <tr>
                                <th>
                                    <img src="greycircle.png" style={{ width: '70px', height: 'auto' }}/>
                                </th>
                                <th>
                                    <tr>Thoracic</tr>
                                    <tr style={{fontWeight: 'normal', fontSize: 'small', fontFamily: 'helvetica'}}>
                                        <div style={{color: '#8A8F92'}}>current: 31 degrees</div>
                                    </tr>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <img src="bluecircle.png" style={{ width: '70px', height: 'auto' }}/>
                                </th>
                                <th>
                                    <tr>Lumbar</tr>
                                    <tr style={{fontWeight: 'normal', fontSize: 'small', fontFamily: 'helvetica'}}>
                                        <div style={{color: '#8A8F92'}}>current: 20 degrees</div>
                                    </tr>
                                </th>
                            </tr>
                        </table>
                        
                        
                    </div>
                </div>
            </div>

            <div style={buttonStatsStyle}>
                <div style={physioButtonBox}>
                    <Button>+ Physiotherapy</Button>
                </div>
                <div style={braceButtonBox}>
                    <Button>+ Brace Wear</Button>
                </div>
            </div>
            

            <div style={bottomStatsStyle}>
                <div style={physioBox}>
                    <table style={physioTable}>
                        <div style={titleText}>Physiotherapy Progress</div>
                        <tr>
                            <th style={tableSession}><div style={tableHeader}>Session</div></th>
                            <th style={tableDateHour}><div style={tableHeader}>Date</div></th>
                            <th style={tableDateHour}><div style={tableHeader}>Hours</div></th>
                        </tr>
                        <tr>
                            <th style={tableSession}>Physiotherapy with John</th>
                            <th style={tableDateHour}>June 6</th>
                            <th style={tableDateHour}>+1</th>
                        </tr>
                        <tr>
                            <th style={tableSession}>Physiotherapy with John</th>
                            <th style={tableDateHour}>June 10</th>
                            <th style={tableDateHour}>+0.5</th>
                        </tr>
                        <tr>
                            <th style={tableSession}>Physiotherapy with John</th>
                            <th style={tableDateHour}>June 12</th>
                            <th style={tableDateHour}>+0.5</th>
                        </tr>
                        <tr>
                            <th style={tableSession}>Schroth Method with Alice</th>
                            <th style={tableDateHour}>June 20</th>
                            <th style={tableDateHour}>+1</th>
                        </tr>
                        <tr>
                            <th style={tableSession}>Physiotherapy at Home</th>
                            <th style={tableDateHour}>June 25</th>
                            <th style={tableDateHour}>+1</th>
                        </tr>
                        <tr>
                            <th style={tableSession}>Schroth Method with Alice</th>
                            <th style={tableDateHour}>June 30</th>
                            <th style={tableDateHour}>+0.5</th>
                        </tr>
                        <tr>
                            <th style={tableSession}>Physiotherapy at Home</th>
                            <th style={tableDateHour}>July 10</th>
                            <th style={tableDateHour}>-1</th>
                        </tr>
                    </table>
                </div>

                <div style={braceBox}>
                    <img src="braceGraph.png" alt="braceGraph"/>
                </div>

            </div>

            <div style={footerBox}>
                <div style={footerText}>SpineCARE</div>
            </div>
        </div>

    )
}

const all = {
    backgroundColor: 'white',
    minHeight: '100vh',
    padding: '0px',
    margin: '0px'
};

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
  
const buttonStyle: React.CSSProperties = {
    backgroundColor: 'white',
    fontFamily: 'helvetica',
    color: '#386DB3',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
};

const pages = {
    backgroundColor: 'white',
    padding: '0px',
    marginLeft: '10px',
    alignItems: 'center'
};

const profileContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'left'
};
  
const profileStyle: React.CSSProperties = {
    width: '50px', 
    height: 'auto',
    marginLeft: '20px'
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
    width: '60%',
    marginLeft: '10px'
};

const legendBox: React.CSSProperties = {
    width: '40%',
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
    marginTop: '7px',
    margin: '20px',
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
    marginLeft: '45px',
    marginRight: '45px',
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'left'
};

const physioBox: React.CSSProperties = {
    width: '40%',
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
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0px'
};

const braceButtonBox: React.CSSProperties = {
    width: '40%',
    backgroundColor: 'white',
    border: '0px solid #cccc',
    borderRadius: '10px',
    textAlign: 'left',
    paddingLeft: '20px',
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
};

const footerText: React.CSSProperties = {
    textAlign: 'center',
    fontWeight: 'normal',
    fontFamily: 'helvetica'
};