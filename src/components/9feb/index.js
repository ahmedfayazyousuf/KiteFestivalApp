
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

        if(e === 'areaone4:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areaone4:30');
        }

        if(e === 'areaone5:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areaone5:30');
        }

        if(e === 'areaone6:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areaone6:30');
        }

        if(e === 'areaone7:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areaone7:30');
        }

        if(e === 'areaone8:30'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areaone8:30');
        }

        if(e === 'areatwo5'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areatwo5');
        }

        if(e === 'areatwo6'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areatwo6');
        }

        if(e === 'areatwo7'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areatwo7');
        }

        if(e === 'areatwo8'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo9').style.background = "transparent";

            setTime('areatwo8');
        }

        if(e === 'areatwo9'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone6:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone8:30').style.background = "transparent";

            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";
            document.getElementById('areatwo8').style.background = "transparent";

            setTime('areatwo9');
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
                    <button className="grab" id="areaone4:30" onClick={() => {Handleclick("areaone4:30")}} value="4:30 PM - 5:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        4:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>


                    <button className="grab" id="areaone5:30" onClick={() => {Handleclick("areaone5:30")}} value="5:30 PM - 6:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        5:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areaone6:30" onClick={() => {Handleclick("areaone6:30")}} value="6:30 PM - 7:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        6:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="areaone7:30" onClick={() => {Handleclick("areaone7:30")}} value="7:30 PM - 8:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        7:30 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areaone8:30" onClick={() => {Handleclick("areaone8:30")}} value="8:30 PM - 9:30 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        8:30 PM 
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>

                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <p style={{fontSize: '25px', marginTop: '30px', fontWeight: '900'}} >ACTIVITY AREA 2</p>
                </div>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="areatwo5" onClick={() => {Handleclick("areatwo5")}} value="5 PM - 6 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        5:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areatwo6" onClick={() => {Handleclick("areatwo6")}} value="6 PM - 7 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        6:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areatwo7" onClick={() => {Handleclick("areatwo7")}} value="7 PM - 8 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        7:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <button className="grab" id="areatwo8" onClick={() => {Handleclick("areatwo8")}} value="8 PM - 9 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        8:00 PM
                        <p><em style={{color: 'grey', }}>x kites available</em></p>
                        <p><em style={{color: 'grey', }}>x slots available</em></p>
                    </button>
                    
                    <button className="grab" id="areatwo9" onClick={() => {Handleclick("areatwo9")}} value="9 PM - 10 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>
                        9:00 PM
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