import './UserNissan.css';
// import activityarea2Logo from '../activityarea2logo.png';
import GetReady from '../getready.png';
// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

const ChooseDate = () => { 
    const location = useLocation();
    const navigate = useNavigate();

    const [car, setCar] = useState('');

    function Handleclick(v){
        if(car === ''){
            return;
        }
        
    navigate(v, {state:{uid:location.state.uid,count:location.state.count}});
    }

    function carClick(e){

        if(e === '9feb'){
            setCar('/9feb');
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('10feb').style.background = "transparent";
            document.getElementById('11feb').style.background = "transparent";
            document.getElementById('12feb').style.background = "transparent";
        }
        if(e === '10feb'){
            setCar('/10feb');
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('9feb').style.background = "transparent";
            document.getElementById('11feb').style.background = "transparent";
            document.getElementById('12feb').style.background = "transparent";
        }

        if(e === '11feb'){
            setCar('/11feb');
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('9feb').style.background = "transparent";
            document.getElementById('10feb').style.background = "transparent";
            document.getElementById('12feb').style.background = "transparent";
        }

        if (e === '12feb'){
            setCar('/12feb');
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('9feb').style.background = "transparent";
            document.getElementById('10feb').style.background = "transparent";
            document.getElementById('11feb').style.background = "transparent";
        }
        
    }

    return (
        <>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                {/* <img src={NissanLogo} alt="Logo" style={{width: '20vh'}}/> */}
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '40vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >Choose Date</p>
            </div>
            <div className="rower" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0', gap:'30px', marginTop:'10px'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0', margin: '0'}}>
                    <div id='9feb' className="content content-1" onClick={()=>{carClick('9feb')}} style={{padding: '0', margin: '10px'}}>
                        <p>9 Feb</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='10feb' className="content content-1" onClick={()=>{carClick('10feb')}} style={{padding: '0', margin: '10px'}}>
                        <p>10 Feb</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='11feb' className="content content-1" onClick={()=>{carClick('11feb')}} style={{padding: '0', margin: '10px'}}>
                        <p>11 Feb</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='12feb' className="content content-1" onClick={()=>{carClick('12feb')}} style={{padding: '0', margin: '10px'}}>
                        <p>12 Feb</p>
                    </div>
                </div>
                
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'3vh'}} >
                <button className="grab" style={{color:"white", background:"black",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained" onClick= {() => Handleclick(car)}>Next</button> 
            </div>

              
        </>
    )
}

export default ChooseDate

