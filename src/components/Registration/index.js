import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import '../All.css';
import GetReady from '../getready.png';
import { useParams } from "react-router-dom";
import {useRef} from 'react';
import axios from "axios";

import {useLocation} from 'react-router-dom';

const Registration = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const buttonRef = useRef(null);
    // const { user_id } = useParams();

    const [count, setCount] = useState(0);
    const [emailB, setEmailB] = useState(false);

    function onlyOnetwo(e) {
        var checkm = document.getElementById('checkmd');
        var checkf = document.getElementById('checkfd');
        // checkm.checked = !checkm.checked 
        // checkf.checked = !checkf.checked 
        // console.log(checkbox)

        if(e === 'm'){
            console.log("lol")
            
            checkf.checked = false
            
            // setUser({...user, [firstname]:value})
        }

        if(e === 'f'){
            console.log("lil")
            
            checkm.checked = false

            // setUser({...user, [firstname]:value})
        }



    }



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
                el.style.marginLeft = "1100px";
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
            var area = location.state.time.slice(0,7)
            var time = location.state.time.slice(7)

            const kites = firebase.firestore().collection("Kites").doc(`${location.state.date}`);
            console.log(location.state.date, time)

            const name = document.getElementById("Name").value

            const number = document.getElementById("no").value

            var date = location.state.date;



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

                    if(data.kites<=0){
                        await timeslot.update({
                            slots: firebase.firestore.FieldValue.increment(-1)
                        });
                        axios.post("http://localhost:4000/send_sms", {
                        name, date, time, number
                        })
                        return;
                    }

                    await timeslot.update({
                        kites: firebase.firestore.FieldValue.increment(-1),
                        slots: firebase.firestore.FieldValue.increment(-1)
                    });
                    axios.post("http://localhost:4000/send_sms", {
                        name, date, time, number
                        })
                    
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

                    if(data.kites<=0){
                        await timeslot.update({
                            slots: firebase.firestore.FieldValue.increment(-1)
                        });
                        axios.post("http://localhost:4000/send_sms", {
                            name, date, time, number
                            })
                        return;
                    }

                    await timeslot.update({
                        kites: firebase.firestore.FieldValue.increment(-1),
                        slots: firebase.firestore.FieldValue.increment(-1)
                    });
                    axios.post("http://localhost:4000/send_sms", {
                        name, date, time, number
                        })
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
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper3.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}} >


            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '400px', gap:'10px', alignItems: 'center'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                        <label style={{color:"white", fontWeight:"400"}}>Name</label>
                        <input  type="text" id="Name" style={{background:"transparent",border:"0", borderBottom:"1px solid white", marginBottom:'15px', width:"100%", height:'27px', color:"rgba(255,255,255,0.5" }}/> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                        <label style={{color:"white", fontWeight:"400"}}>Email</label>
                        <input type="email" id='email' style={{background:"transparent",border:"0", borderBottom:"1px solid white", marginBottom:'15px', width:"100%", height:'27px', color:"rgba(255,255,255,0.5" }} />
                    </div>


                    <div id='parent' style={{width:"100%", display: 'flex', flexDirection: 'column'}}>
                        <div  style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                            <label style={{color:"white", fontWeight:"400"}}>Mobile</label>
                            <input type="number" id='no' style={{background:"transparent",border:"0", borderBottom:"1px solid white", marginBottom:'15px', width:"100%", height:'27px', color:"rgba(255,255,255,0.5" }} />
                        </div>
                    </div>

                    <div  style={{display:"flex",flexDirection:"column"}}>
                            <label style={{color:"white", fontWeight:"400"}}>Kite Assigned</label>
                            <div style={{display:"flex",flexDirection:"row"}}>  
                                <label style={{color:"white", fontWeight:"400"}}><input id='checkmd' style={{marginRight: '10px'}} value="m" onClick={(e)=>{onlyOnetwo(e.target.value)}} type="checkbox"/>Yes</label>
                                <label style={{color:"white", fontWeight:"400"}}><input id='checkfd' style={{marginRight: '10px',accentColor: "#029CFC",background:"black"}} value="f" onClick={(e)=>{onlyOnetwo(e.target.value)}} type="checkbox"/>No</label>
                            </div>
                        </div>


                    <div style={{display: 'flex', width: '100%', flexDirection: 'row',gap:"20px"}}>                    
                        <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundImage: 'linear-gradient(#0031CC 50%, #0180F1 )', color: 'white', fontSize: '25px'}} variant="contained">Back</button>
                        <button ref={buttonRef} className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundImage: 'linear-gradient(#0031CC 50%, #0180F1 )', color: 'white', fontSize: '25px'}} variant="contained" onClick={HandleSubmit}>Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Registration;
