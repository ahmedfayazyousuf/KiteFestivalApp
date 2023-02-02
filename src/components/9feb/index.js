
import firebase from '../../firebase'
import { useState } from "react"
import GetReady from '../getready.png';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const TimeSlot = () => {
    // eslint-disable-next-line 
    const [time, setTime] = useState('');
    // eslint-disable-next-line 
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    // const [ccount, setCcount] = useState(0);

    const getKites = async () =>{

        const kites = firebase.firestore().collection("Kites").doc(`9feb`);
    
        kites.collection("Areas").doc("Area1").collection('timeslots').get().then((querySnapshot) => {
            var count = 0;
        querySnapshot.forEach((doc) => {
            kites.collection("Areas").doc("Area1").collection('timeslots').doc(`${doc.id}`).get().then((doc2)=>{
                var time=doc.id.slice(0,-3)
                console.log(time)
                if(doc2.data().available<=0){
                    document.getElementById(`areaone${time}`).disabled = true;
                    document.getElementById(`areaone${time}`).style.display = "none";
                }
                document.getElementById(`areaone${time}k`).innerHTML = `${doc2.data().kites} KITES AVAILABLE`
                document.getElementById(`areaone${time}s`).innerHTML = `${doc2.data().slots} SLOTS AVAILABLE`
    
            })
    
    
    
            
    
            setUser(current => [...current, doc.data()]);
        });
    
    
        })
    
        kites.collection("Areas").doc("Area2").collection('timeslots').get().then((querySnapshot) => {
            var count = 0;
        querySnapshot.forEach((doc) => {
            kites.collection("Areas").doc("Area2").collection('timeslots').doc(`${doc.id}`).get().then((doc2)=>{
                var time=doc.id.slice(0,-6)
                console.log(time)
                if(doc2.data().available<=0){
                    document.getElementById(`areatwo${time}`).disabled = true;
                    document.getElementById(`areatwo${time}`).style.display = "none";
                }
    
                document.getElementById(`areatwo${time}k`).innerHTML = `${doc2.data().kites} KITES AVAILABLE`
                document.getElementById(`areatwo${time}s`).innerHTML = `${doc2.data().slots} SLOTS AVAILABLE`
            })
    
    
            
    
            setUser(current => [...current, doc.data()]);
        });
    
    
        })
        // eslint-disable-next-line
      
    
    //     const Cars2 = Location.collection('models').doc(`${id}`).collection('timeslot').where("available", "==", 0).get().then((doc)=>{
    //         console.log(doc.size)
    //         if(doc.size === 8){
    //                     const node = document.createElement("p");
    //         node.style.color = "red";
    //         node.style.fontSize = "10px";
    //         node.style.marginRight = "10px";
    //         node.innerHTML = "No Timeslots Available";
    // document.getElementById(`slotparent`).appendChild(node);
    //         }
    //     })
    
        // console.log(Cars)
        }
    
        function HandleSubmit(){
            console.log('hello')
            if(time === ''){
                return;
            }
        navigate('/registration',{state:{time:time,date:"9feb"}});
        }
    
        useEffect(()=>{
            getKites()
        },[])

    function Handleclick(e){
        console.log(user)

        console.log()

        if(e === 'areaone4:30'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areaone4:30');
        }

        if(e === 'areaone5:30'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areaone5:30');
        }

        if(e === 'areaone6:30'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areaone6:30');
        }

        if(e === 'areaone7:30'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areaone7:30');
        }

        if(e === 'areaone8:30'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";

            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areaone8:30');
        }

        if(e === 'areatwo5'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areatwo5');
        }

        if(e === 'areatwo6'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areatwo6');
        }

        if(e === 'areatwo7'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areatwo7');
        }

        if(e === 'areatwo8'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo9').style.color = "black";

            setTime('areatwo8');
        }

        if(e === 'areatwo9'){
            document.getElementById(e).style.background = "#54B2E9"
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";

            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone6:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone8:30').style.color = "black";

            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";
            document.getElementById('areatwo8').style.color = "black";

            setTime('areatwo9');
        }
        
    }
    
    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '100vw', backgroundImage: `url("wallpaper2.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}} >

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                <div  style={{display:'flex', width: '80%', justifyContent: 'center', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', marginBottom: '20px'}} >
                    <p style={{fontSize: '25px', color: 'white', padding: '5px'}} >ACTIVITY AREA 1</p>
                </div>
                
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone4:30" onClick={() => {Handleclick("areaone4:30")}} value="4:30 PM - 5:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                4:30 PM
                                <p id="areaone4:30k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areaone4:30s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>


                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone5:30" onClick={() => {Handleclick("areaone5:30")}} value="5:30 PM - 6:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                5:30 PM
                                <p id="areaone5:30k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areaone5:30s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone6:30" onClick={() => {Handleclick("areaone6:30")}} value="6:30 PM - 7:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                6:30 PM
                                <p id="areaone6:30k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areaone6:30s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone7:30" onClick={() => {Handleclick("areaone7:30")}} value="7:30 PM - 8:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                7:30 PM
                                <p id="areaone7:30k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areaone7:30s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone8:30" onClick={() => {Handleclick("areaone8:30")}} value="8:30 PM - 9:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                8:30 PM 
                                <p id="areaone8:30k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areaone8:30s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>

                </div>

                <div  style={{display:'flex', width: '80%', justifyContent: 'center', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', marginBottom: '20px', marginTop: '50px'}} >
                    <p style={{fontSize: '25px', color: 'white', padding: '5px'}} >ACTIVITY AREA 2</p>
                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo5" onClick={() => {Handleclick("areatwo5")}} value="5 PM - 6 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                5:00 PM
                                <p id="areatwo5k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areatwo5s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo6" onClick={() => {Handleclick("areatwo6")}} value="6 PM - 7 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                6:00 PM
                                <p id="areatwo6k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areatwo6s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo7" onClick={() => {Handleclick("areatwo7")}} value="7 PM - 8 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                7:00 PM
                                <p id="areatwo7k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areatwo7s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo8" onClick={() => {Handleclick("areatwo8")}} value="8 PM - 9 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                8:00 PM
                                <p id="areatwo8k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areatwo8s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo9" onClick={() => {Handleclick("areatwo9")}} value="9 PM - 10 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                9:00 PM
                                <p id="areatwo9k" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x kites available</em></p>
                                <p id="areatwo9s" style={{color: 'grey', fontSize: '10px'}}><em style={{color: 'grey', }}>x slots available</em></p>
                            </button>
                        </div>
                    </div>

                </div>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row', gap:"20px", marginTop: '20px'}}>      
                        <Link to={{pathname:'/choosedate'}}>              
                            <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px'}} variant="contained">BACK</button>
                        </Link>
                                    
                        <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px'}} variant="contained" onClick={HandleSubmit}>SUBMIT</button>
                </div>

 
            </div>
        </div>
    )
}

export default TimeSlot