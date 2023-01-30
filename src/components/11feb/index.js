
// import firebase from '../../firebase'
import { useState } from "react"
import GetReady from '../getready.png';
const TimeSlot = () => {
    // eslint-disable-next-line 
    const [time, setTime] = useState('');
    // eslint-disable-next-line 
    const [user, setUser] = useState([]);
    // const [ccount, setCcount] = useState(0);

    // const getKites = async () =>{
    //     var cccount = 0
    //     const Location = firebase.firestore().collection("Kites").doc(`${location.state.car}`);
    //     // eslint-disable-next-line
    //     const Cars = Location.collection('Areas').doc(`${id}`).collection('timeslots').get().then((querySnapshot) => {
    //         var count = 0;
    //     querySnapshot.forEach((doc) => {
    //         Location.collection('models').doc(`${id}`).collection('timeslots').doc(`${doc.id}`).get().then((doc2)=>{
    //             console.log()
    //             if(doc2.data().available<=0){
    //                 document.getElementById(`${doc.id}`).disabled = true;
    //                 document.getElementById(`${doc.id}`).style.display = "none";
    //                 setCcount(ccount+1)
    //             }
    //         })
    //         console.log(count);
    //         setUser(current => [...current, doc.data()]);
    //     });
    //     }).then(()=>{
    //         if(ccount === 10){
    //         }
    //     })
    //     const Cars2 = Location.collection('models').doc(`${id}`).collection('timeslots').where("available", "==", 0).get().then((doc)=>{
    //     console.log(doc.size)
    //     if(doc.size === 10){
    //         const node = document.createElement("p");
    //         node.style.color = "red";
    //         node.style.fontSize = "10px";
    //         node.style.marginRight = "10px";
    //         node.innerHTML = "No Timeslots Available";
    //         document.getElementById(`slotparent`).appendChild(node);
    //     }
    // })
    // }

    function Handleclick(e){
        console.log(user)

        console.log()

        if(e === 'timeslot12:30_1:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot12:30_1:30');
        }
        
        if(e === 'timeslot1:30_2:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot1:30_2:30');
        }
        
        if(e === 'timeslot2:30_3:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot2:30_3:30');
        }
        
        if(e === 'timeslot3:30_4:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot3:30_4:30');
        }
        
        if(e === 'timeslot4:30_5:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot4:30_5:30');
        }

        if(e === 'timeslot5:30_6:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot5:30_6:30');
        }

        if(e === 'timeslot6:30_7:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot6:30_7:30');
        }
        






        if(e === 'timeslot1_2'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot1_2');
        }
        if(e === 'timeslot2_3'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot2_3');
        }
        if(e === 'timeslot3_4'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot3_4');
        }
        if(e === 'timeslot4_5'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot4_5');
        }
        if(e === 'timeslot5_6'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot5_6');
        }

        if(e === 'timeslot6_7'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot7_8').style.background = "transparent";

            setTime('timeslot6_7');
        }

        if(e === 'timeslot7_8'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('timeslot12:30_1:30').style.background = "transparent";
            document.getElementById('timeslot1:30_2:30').style.background = "transparent";
            document.getElementById('timeslot2:30_3:30').style.background = "transparent";
            document.getElementById('timeslot3:30_4:30').style.background = "transparent";
            document.getElementById('timeslot4:30_5:30').style.background = "transparent";
            document.getElementById('timeslot5:30_6:30').style.background = "transparent";
            document.getElementById('timeslot6:30_7:30').style.background = "transparent";

            document.getElementById('timeslot1_2').style.background = "transparent";
            document.getElementById('timeslot2_3').style.background = "transparent";
            document.getElementById('timeslot3_4').style.background = "transparent";
            document.getElementById('timeslot4_5').style.background = "transparent";
            document.getElementById('timeslot5_6').style.background = "transparent";
            document.getElementById('timeslot6_7').style.background = "transparent";

            setTime('timeslot7_8');
        }
        
    }
    
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '20vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >Choose a slot!</p>
            </div>

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <p style={{fontSize: '25px', fontWeight: '900'}} >ACTIVITY AREA 1</p>
                </div>
                
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    
                    <button className="grab" id="timeslot12:30_1:30" onClick={() => {Handleclick("timeslot12:30_1:30")}} value="12:30 PM - 1:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        12:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="timeslot1:30_2:30" onClick={() => {Handleclick("timeslot1:30_2:30")}} value="1:30 PM - 2:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        1:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>

                    <button className="grab" id="timeslot2:30_3:30" onClick={() => {Handleclick("timeslot2:30_3:30")}} value="2:30 PM - 3:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        2:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>

                    <button className="grab" id="timeslot3:30_4:30" onClick={() => {Handleclick("timeslot3:30_4:30")}} value="3:30 PM - 4:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        3:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    
                </div>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="timeslot4:30_5:30" onClick={() => {Handleclick("timeslot4:30_5:30")}} value="4:30 PM - 5:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        4:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>


                    <button className="grab" id="timeslot5:30_6:30" onClick={() => {Handleclick("timeslot5:30_6:30")}} value="5:30 PM - 6:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        5:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="timeslot6:30_7:30" onClick={() => {Handleclick("timeslot6:30_7:30")}} value="6:30 PM - 7:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        6:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>

                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <p style={{fontSize: '25px', marginTop: '30px', fontWeight: '900'}} >ACTIVITY AREA 2</p>
                </div>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="timeslot1_2" onClick={() => {Handleclick("timeslot1_2")}} value="1 PM - 2 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        1:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="timeslot2_3" onClick={() => {Handleclick("timeslot2_3")}} value="2 PM - 3 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        2:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="timeslot3_4" onClick={() => {Handleclick("timeslot3_4")}} value="3 PM - 4 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        3:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>

                    <button className="grab" id="timeslot4_5" onClick={() => {Handleclick("timeslot4_5")}} value="4 PM - 5 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        4:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="timeslot5_6" onClick={() => {Handleclick("timeslot5_6")}} value="5 PM - 6 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        5:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="timeslot6_7" onClick={() => {Handleclick("timeslot6_7")}} value="6 PM - 7 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        6:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="timeslot7_8" onClick={() => {Handleclick("timeslot7_8")}} value="7 PM - 8 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        7:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>

                <button className="grab" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}} >Next</button>

 
            </div>
        </>
    )
}

export default TimeSlot