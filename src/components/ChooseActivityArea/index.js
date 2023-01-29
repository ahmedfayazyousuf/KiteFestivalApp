import './UserNissan.css';
// import activityarea2Logo from '../activityarea2logo.png';
import GetReady from '../getready.png';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

const ChooseActivityArea = () => { 
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

        if(e === 'actarea1'){
            setCar('/actarea1');
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('actarea2').style.background = "transparent";
        }
        if(e === 'actarea2'){
            setCar('/actarea2');
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('actarea1').style.background = "transparent";
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
                <p style={{fontSize: '15px', marginTop: '10px'}} >Choose Activity Area</p>
            </div>



        

            <div className="rower" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0', gap:'30px', marginTop:'10px'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0', margin: '0'}}>
                    <div id='actarea1' className="content content-1" onClick={()=>{carClick('actarea1')}} style={{padding: '0', margin: '10px'}}>
                        <p>Activity Area 1</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='actarea2' className="content content-1" onClick={()=>{carClick('actarea2')}} style={{padding: '0', margin: '10px'}}>
                        <p>Activity Area 2</p>
                    </div>
                </div>

                
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'3vh'}} >
                <button className="grab" style={{color:"white", background:"black",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained" onClick= {() => Handleclick(car)}>Next</button> 
            </div>

              
        </>
    )
}

export default ChooseActivityArea


// <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
//                 <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
//                     {/* <button className="grab" id="timeslot9_10" onClick={() => {Handleclick("timeslot9_10")}} value="9:AM - 10 AM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>9:00 AM</button> */}
//                     <button className="grab" id="timeslot12:30_1:30" onClick={() => {Handleclick("timeslot12:30_1:30")}} value="12:30 PM - 1:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>12:30 PM</button>
//                     <button className="grab" id="timeslot1:30_2:30" onClick={() => {Handleclick("timeslot1:30_2:30")}} value="1:30 PM - 2:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>1:30 PM</button>
//                     <button className="grab" id="timeslot2:30_3:30" onClick={() => {Handleclick("timeslot2:30_3:30")}} value="2:30 PM - 3:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>2:30 PM</button>
//                     <button className="grab" id="timeslot3:30_4:30" onClick={() => {Handleclick("timeslot3:30_4:30")}} value="3:30 PM - 4:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>3:30 PM</button>
//                     <button className="grab" id="timeslot4:30_5:30" onClick={() => {Handleclick("timeslot4:30_5:30")}} value="4:30 PM - 5:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>4:30 PM</button>
//                     <button className="grab" id="timeslot5:30_6:30" onClick={() => {Handleclick("timeslot5:30_6:30")}} value="5:30 PM - 6:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>5:30 PM</button>
//                     <button className="grab" id="timeslot6:30_7:30" onClick={() => {Handleclick("timeslot6:30_7:30")}} value="6:30 PM - 7:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>6:30 PM</button>
//                     <button className="grab" id="timeslot7:30_8:30" onClick={() => {Handleclick("timeslot7:30_8:30")}} value="7:30 PM - 8:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>7:30 PM</button>
//                     <button className="grab" id="timeslot8:30_9:30" onClick={() => {Handleclick("timeslot8:30_9:30")}} value="8:30 PM - 9:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>8:30 PM</button>
//                 </div>

//                 <button className="grab" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}} onClick={() => {Handlesubmit(time)}} >Next</button>

//             </div>