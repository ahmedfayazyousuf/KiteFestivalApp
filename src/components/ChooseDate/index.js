import './User.css';
import { Link } from "react-router-dom";
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
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('10feb').style.background="transparent";
            document.getElementById('11feb').style.background="transparent";
            document.getElementById('12feb').style.background="transparent";
            document.getElementById('10feb').style.color = "black";
            document.getElementById('11feb').style.color = "black";
            document.getElementById('12feb').style.color = "black";
        }
        if(e === '10feb'){
            setDate('/Date/10feb');
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('9feb').style.background="transparent";
            document.getElementById('11feb').style.background="transparent";
            document.getElementById('12feb').style.background="transparent";
            document.getElementById('9feb').style.color = "black";
            document.getElementById('11feb').style.color = "black";
            document.getElementById('12feb').style.color = "black";
        }

        if(e === '11feb'){
            setDate('/Date/11feb');
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('9feb').style.background="transparent";
            document.getElementById('10feb').style.background="transparent";
            document.getElementById('12feb').style.background="transparent";
            document.getElementById('9feb').style.color = "black";
            document.getElementById('10feb').style.color = "black";
            document.getElementById('12feb').style.color = "black";
        }

        if (e === '12feb'){
            setDate('/Date/12feb');
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('9feb').style.background="transparent";
            document.getElementById('10feb').style.background="transparent";
            document.getElementById('11feb').style.background="transparent";
            document.getElementById('9feb').style.color = "black";
            document.getElementById('10feb').style.color = "black";
            document.getElementById('11feb').style.color = "black";
        }
        
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '100vw', backgroundImage: `url("wallpaper2.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}} >

            <div style={{display:'flex', width: '80%', justifyContent: 'center', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', marginBottom: '20px'}} >
                <p style={{fontSize: '25px', color: 'white', padding: '5px'}} >SELECT A DATE</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0', gap:'5px', marginTop:'10px'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0', margin: '0'}}>
                    <div id='9feb' className="content content-1" onClick={()=>{dateClick("9feb")}} style={{padding: '0', margin: '10px'}}>
                        <p style={{paddingTop: '30px', paddingBottom: '30px'}}>9 - FEB</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='10feb' className="content content-1" onClick={()=>{dateClick("10feb")}} style={{padding: '0', margin: '10px'}}>
                        <p style={{paddingTop: '30px', paddingBottom: '30px'}}>10 - FEB</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='11feb' className="content content-1" onClick={()=>{dateClick("11feb")}} style={{padding: '0', margin: '10px'}}>
                        <p style={{paddingTop: '30px', paddingBottom: '30px'}}>11 - FEB</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='12feb' className="content content-1" onClick={()=>{dateClick("12feb")}} style={{padding: '0', margin: '10px'}}>
                        <p style={{paddingTop: '30px', paddingBottom: '30px'}}>12 - FEB</p>
                    </div>
                </div>
                
            </div>


            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'3vh'}} >
                <Link to={{pathname:"/"}}>              
                            <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px'}} variant="contained">BACK</button>
                </Link>
                <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', marginLeft:'20px', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px'}} variant="contained" onClick= {() => Handleclick()}>NEXT</button> 
            </div>

              
        </div>
    )
}

export default ChooseDate

