
import firebase from '../../firebase'
import { useState } from "react"
import GetReady from '../getready.png';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const TimeSlot = () => {
    // eslint-disable-next-line 
    const [time, setTime] = useState('');
    // eslint-disable-next-line 
    const [user, setUser] = useState([]);

    const { id } = useParams();

    const getKites = async () =>{

    
        

    const kites = firebase.firestore().collection("Kites").doc(`${id}`);

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
            document.getElementById(`areaone${time}k`).innerHTML = `${doc2.data().kites} kites available`
            document.getElementById(`areaone${time}s`).innerHTML = `${doc2.data().slots} slots available`

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

            document.getElementById(`areatwo${time}k`).innerHTML = `${doc2.data().kites} kites available`
            document.getElementById(`areatwo${time}s`).innerHTML = `${doc2.data().slots} slots available`
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

    useEffect(()=>{
        getKites()
    },[])
   

    function Handleclick(e){
        console.log(user)

        console.log()

        if(e === 'areaone12:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areaone12:30');
        }
        
        if(e === 'areaone1:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areaone1:30');
        }
        
        if(e === 'areaone2:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areaone2:30');
        }
        
        if(e === 'areaone3:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areaone3:30');
        }
        
        if(e === 'areaone4:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areaone4:30');
        }

        if(e === 'areaone5:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areaone5:30');
        }

        if(e === 'areaone6:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areaone6:30');
        }
        






        if(e === 'areatwo1'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areatwo1');
        }
        if(e === 'areatwo2'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areatwo2');
        }
        if(e === 'areatwo3'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areatwo3');
        }
        if(e === 'areatwo4'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areatwo4');
        }
        if(e === 'areatwo5'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areatwo5');
        }

        if(e === 'areatwo6'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            setTime('areatwo6');
        }

        if(e === 'areatwo7'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo2').style.background = "transparent";
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";

            setTime('areatwo7');
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
                    
                    <button className="grab" id="areaone12:30" onClick={() => {Handleclick("areaone12:30")}} value="12:30 PM - 1:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        12:30 PM
                        <p id="areaone12:30k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areaone12:30s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areaone1:30" onClick={() => {Handleclick("areaone1:30")}} value="1:30 PM - 2:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        1:30 PM
                        <p id="areaone1:30k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areaone1:30s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>

                    <button className="grab" id="areaone2:30" onClick={() => {Handleclick("areaone2:30")}} value="2:30 PM - 3:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        2:30 PM
                        <p id="areaone2:30k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areaone2:30s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>

                    <button className="grab" id="areaone3:30" onClick={() => {Handleclick("areaone3:30")}} value="3:30 PM - 4:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        3:30 PM
                        <p id="areaone3:30k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areaone3:30s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    
                </div>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="areaone4:30" onClick={() => {Handleclick("areaone4:30")}} value="4:30 PM - 5:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        4:30 PM
                        <p id="areaone4:30k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areaone4:30s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>


                    <button className="grab" id="areaone5:30" onClick={() => {Handleclick("areaone5:30")}} value="5:30 PM - 6:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        5:30 PM
                        <p id="areaone5:30k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areaone5:30s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areaone6:30" onClick={() => {Handleclick("areaone6:30")}} value="6:30 PM - 7:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        6:30 PM
                        <p id="areaone6:30k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areaone6:30s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>

                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <p style={{fontSize: '25px', marginTop: '30px', fontWeight: '900'}} >ACTIVITY AREA 2</p>
                </div>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="areatwo1" onClick={() => {Handleclick("areatwo1")}} value="1 PM - 2 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        1:00 PM
                        <p id="areatwo1k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areatwo1s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areatwo2" onClick={() => {Handleclick("areatwo2")}} value="2 PM - 3 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        2:00 PM
                        <p id="areatwo2k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areatwo2s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areatwo3" onClick={() => {Handleclick("areatwo3")}} value="3 PM - 4 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        3:00 PM
                        <p id="areatwo3k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areatwo3s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>

                    <button className="grab" id="areatwo4" onClick={() => {Handleclick("areatwo4")}} value="4 PM - 5 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        4:00 PM
                        <p id="areatwo4k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areatwo4s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="areatwo5" onClick={() => {Handleclick("areatwo5")}} value="5 PM - 6 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        5:00 PM
                        <p id="areatwo5k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areatwo5s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areatwo6" onClick={() => {Handleclick("areatwo6")}} value="6 PM - 7 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        6:00 PM
                        <p id="areatwo6k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areatwo6s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areatwo7" onClick={() => {Handleclick("areatwo7")}} value="7 PM - 8 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        7:00 PM
                        <p id="areatwo7k"><em style={{color: 'grey', }}>x kites available</em></p>
                        <p id="areatwo7s"><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>

                <button className="grab" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}} >Next</button>

 
            </div>
        </>
    )
}

export default TimeSlot