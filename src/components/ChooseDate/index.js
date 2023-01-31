import './User.css';
// import activityarea2Logo from '../activityarea2logo.png';
import GetReady from '../getready.png';
// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

const ChooseDate = () => { 
    // eslint-disable-next-line
    const location = useLocation();
    const navigate = useNavigate();

    const [date, setDate] = useState('');

    function Handleclick(){
        if(date === ''){
            return;
        }
    navigate(date);
    }

    function dateClick(e){

        if(e === '9feb'){
            setDate('/9feb');
            document.getElementById(e).style.backgroundImage = "linear-gradient(#0031CC 50%, #0180F1 )";
            document.getElementById(e).style.color = "white";
            document.getElementById('10feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('11feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('12feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('10feb').style.color = "black";
            document.getElementById('11feb').style.color = "black";
            document.getElementById('12feb').style.color = "black";
        }
        if(e === '10feb'){
            setDate('/Date/10feb');
            document.getElementById(e).style.backgroundImage = "linear-gradient(#0031CC 50%, #0180F1 )";
            document.getElementById(e).style.color = "white";
            document.getElementById('9feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('11feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('12feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('9feb').style.color = "black";
            document.getElementById('11feb').style.color = "black";
            document.getElementById('12feb').style.color = "black";
        }

        if(e === '11feb'){
            setDate('/Date/11feb');
            document.getElementById(e).style.backgroundImage = "linear-gradient(#0031CC 50%, #0180F1 )";
            document.getElementById(e).style.color = "white";
            document.getElementById('9feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('10feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('12feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('9feb').style.color = "black";
            document.getElementById('10feb').style.color = "black";
            document.getElementById('12feb').style.color = "black";
        }

        if (e === '12feb'){
            setDate('/Date/12feb');
            document.getElementById(e).style.backgroundImage = "linear-gradient(#0031CC 50%, #0180F1 )";
            document.getElementById(e).style.color = "white";
            document.getElementById('9feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('10feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('11feb').style.backgroundImage = "linear-gradient(#ffffff 20%, #8afcf2 )";
            document.getElementById('9feb').style.color = "black";
            document.getElementById('10feb').style.color = "black";
            document.getElementById('11feb').style.color = "black";
        }
        
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '100vw', backgroundImage: `url("wallpaper2.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}} >

            <div  style={{display:'flex', width: '80%', justifyContent: 'center', border: 'none', borderRadius: '10px', backgroundImage: 'linear-gradient(#0031CC 50%, #0180F1 )'}} >
                <p style={{fontSize: '25px', color: 'white', padding: '5px'}} >SELECT A DATE</p>
            </div>

            <div className="rower" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0', gap:'30px', marginTop:'10px'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0', margin: '0'}}>
                    <div id='9feb' className="content content-1" onClick={()=>{dateClick("9feb")}} style={{padding: '0', margin: '10px'}}>
                        <p>9 - Feb</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='10feb' className="content content-1" onClick={()=>{dateClick("10feb")}} style={{padding: '0', margin: '10px'}}>
                        <p>10 - Feb</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='11feb' className="content content-1" onClick={()=>{dateClick("11feb")}} style={{padding: '0', margin: '10px'}}>
                        <p>11 - Feb</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='12feb' className="content content-1" onClick={()=>{dateClick("12feb")}} style={{padding: '0', margin: '10px'}}>
                        <p>12 - Feb</p>
                    </div>
                </div>
                
            </div>


            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'3vh'}} >
                <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundImage: 'linear-gradient(#0031CC 50%, #0180F1 )', color: 'white', fontSize: '25px'}} variant="contained" onClick= {() => Handleclick()}>Next</button> 
            </div>

              
        </div>
    )
}

export default ChooseDate

