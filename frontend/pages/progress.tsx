import Link from 'next/link';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';

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
    marginLeft: '15px'
    
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
    border: '1.5px solid #cccc',
    borderRadius: '10px',
    flex: '1',
    textAlign: 'left',
    padding: '20px',
    margin: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)'
};

const legendTitleText: React.CSSProperties = {
    fontSize: '13px', 
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    marginBottom: '10px' 
};

const braceStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '15px',
    marginLeft: '30px',
    marginRight: '30px',
    display: 'flex',
    justifyContent: 'center'
};


export default function Progression() {
    return (
        <div style={all}>
            <nav style={navbarStyle}>
                <div style={logoContainerStyle}>
                    <img src="logo_flower.png" alt="Logo" style={logoStyle}/>
                    <span style={{fontSize: '1.2rem', fontFamily: 'helvetica'}}>SpineCARE</span>
                </div>

                <div style={pages}>
                    <button style={buttonStyle}>Images</button>
                    <Button>Progression</Button>
                    <button style={buttonStyle}>Reminders</button>
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
                        <div style={legendTitleText}>Legend</div>
                        <img src="greycircle.png"/>
                        <img src="bluecircle.png"/>
                    </div>
                </div>
            </div>


            <div style={braceStyle}>
                <div style={imageBox}>
                    <img src="braceGraph.png"/>
                </div>
            </div>

        </div>


    )
}