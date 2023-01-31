import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import '../All.css';
import GetReady from '../getready.png';
import { useParams } from "react-router-dom";
import {useRef} from 'react';

import {useLocation} from 'react-router-dom';

const Registration = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const buttonRef = useRef(null);

    const [count, setCount] = useState(0);
    const [emailB, setEmailB] = useState(false);



    function HandleSubmit(){

        buttonRef.current.disabled = true;
        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;
       
        console.log(Email)

        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (Email === "" || !Email.match(validRegex))
        {
            if(emailB === false){
                const el = document.createElement("p");
                const name = document.getElementById('parent')
                el.id = "emailerr"
                el.style.color = "red";
                el.style.marginLeft = "160px";
                el.style.fontSize = "10px";
                el.innerHTML = "Invalid Email"
                name.appendChild(el);
                setEmailB(true)
            }
            console.log("lessgoooooo")
            return;
        }

        var area = location.state.time.slice(0,7)
        var time = location.state.time.slice(7)

        Users.add({
            Name:Name,
            Email:Email,
            Number:Number,
            Time:time,
            Area:area,
            time: firebase.firestore.FieldValue.serverTimestamp()

        }).then( function(docRef) {

            const kites = firebase.firestore().collection("Kites").doc(`${location.state.date}`);

            if(area === 'areaone'){
                var timeslot = kites.collection("Areas").doc("Area1").collection('timeslots').doc(`${time} PM`)
                timeslot.get().then(async (doc)=>{
                    console.log(doc.data())
                    var data = doc.data() 

                    if(data.kites <= 0){
                        if(data.slots <=0){
                            return;
                        }
                    }

                    if(kites<=0){
                        await timeslot.update({
                            slots: firebase.firestore.FieldValue.increment(-1)
                        });
                        return;
                    }

                    await timeslot.update({
                        kites: firebase.firestore.FieldValue.increment(-1),
                        slots: firebase.firestore.FieldValue.increment(-1)
                    });
                    
                })
            }

            if(area === 'areatwo'){
                var timeslot2 = kites.collection("Areas").doc("Area2").collection('timeslots').doc(`${time} PM`)
                timeslot2.get().then(async (doc)=>{

                    console.log(doc.data())
                    var data = doc.data()
                    if(data.kites <= 0){
                        if(data.slots <=0){
                            return;
                        }
                    }

                    if(kites<=0){
                        await timeslot.update({
                            slots: firebase.firestore.FieldValue.increment(-1)
                        });
                        return;
                    }

                    await timeslot.update({
                        kites: firebase.firestore.FieldValue.increment(-1),
                        slots: firebase.firestore.FieldValue.increment(-1)
                    });
                })
            }

            
            console.log("Document written with ID: ", docRef.id);
            navigate("/Success",{state:{uid:docRef.id,count:0}});
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });  


        
    }
    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("desktop.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}}>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '40vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "30vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '400px', gap:'10px', alignItems: 'center'}}>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Name</label>
                        <input type="text" id="Name" style={{marginLeft: '10px', marginRight:'45px',width:"60%", height:'27px'}} /> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Email</label>
                        <input type="email" id='email' style={{marginLeft: '10px',marginRight:'45px', width:"60%", height:'27px'}} />
                    </div>


                    <div id='parent' style={{width:"100%", display: 'flex', flexDirection: 'column'}}>
                        <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                            <label>Mobile</label>
                            <input type="number" id='no' style={{marginLeft: '10px', marginRight:'45px', marginBottom:'15px', width:"60%", height:'27px'}} />
                        </div>
                    </div>


                    <div style={{display: 'flex', width: '100%', flexDirection: 'row'}}>                    
                        <button className="grab" style={{width:"180px", marginTop: '30px', margin: '10px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', fontSize:'15px'}}>Back</button>
                        <button ref={buttonRef} className="grab" style={{width:"180px", marginTop: '30px', margin: '10px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', fontSize:'15px'}} onClick={HandleSubmit}>Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Registration;
