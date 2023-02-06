import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import '../All.css';
import GetReady from '../getready.png';
import { useParams } from "react-router-dom";
import {useRef} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';

const Registration = () =>{
    const [numberr, setNumberr] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const buttonRef = useRef(null);

    const [count, setCount] = useState(0);
    const [emailB, setEmailB] = useState(false);
    const [select, setSelect] = useState('')

    function onlyOnetwo(e) {
        var checkm = document.getElementById('checkmd');
        var checkf = document.getElementById('checkfd');
        // checkm.checked = !checkm.checked 
        // checkf.checked = !checkf.checked 
        // console.log(checkbox)

        if(e === 'm'){
            console.log("lol")
            
            checkf.checked = false
            setSelect("Yes")
            
            // setUser({...user, [firstname]:value})
        }

        if(e === 'f'){
            console.log("lil")
            
            checkm.checked = false
            setSelect("No")

            // setUser({...user, [firstname]:value})
        }
    }
    function HandleMap() {
        if(location.state.date === '9feb') {
            navigate(`/${location.state.date}`)
        }

        else{
            navigate(`/Date/${location.state.date}`)
        }
    }

    function HandleSubmit(){
        console.log('2');

        buttonRef.current.disabled = true;
        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;

       
        console.log(Email)

        if(Name === ''){
            buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "Please Enter Your Name"
            return;
        }

        if (document.getElementById("no").value === "" ||  document.getElementById("no").value.slice(0,3) != 971 ){
            console.log('Hello')
            buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "Please Enter a Valid Phone Number"
            return;
            
        }




        var area = location.state.time.slice(0,7)
        var time = location.state.time.slice(7)
        var date = location.state.date

        Users.add({
            Name:Name,
            Email:Email,
            Number:Number,
            Time:time,
            Area:area,
            Date:date,
            Status: "-",
            KiteStatus: "-",
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

                if(select === "Yes"){
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
                            axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
                            name, date, time, number
                            })
                            return;
                        }
    
                        await timeslot.update({
                            kites: firebase.firestore.FieldValue.increment(-1),
                            slots: firebase.firestore.FieldValue.increment(-1)
                        });
                        axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
                            name, date, time, number
                            })
                        
                    })
                }else{
                    var timeslot = kites.collection("Areas").doc("Area1").collection('timeslots').doc(`${time} PM`)
                timeslot.get().then(async (doc)=>{
                    console.log(doc.data())
                    var data = doc.data() 

                        if(data.slots <=0){
                            return;
                        }

                    await timeslot.update({
                        slots: firebase.firestore.FieldValue.increment(-1)
                    });
                    axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
                        name, date, time, number
                        })
                    
                })
                }
            }

            if(area === 'areatwo'){

                if(select === "Yes"){
                    var timeslot = kites.collection("Areas").doc("Area2").collection('timeslots').doc(`${time}:00 PM`)
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
                            axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
                            name, date, time, number
                            })
                            return;
                        }
    
                        await timeslot.update({
                            kites: firebase.firestore.FieldValue.increment(-1),
                            slots: firebase.firestore.FieldValue.increment(-1)
                        });
                        axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
                            name, date, time, number
                            })
                        
                    })
                }

                

                else{
                    var timeslot = kites.collection("Areas").doc("Area2").collection('timeslots').doc(`${time}:00 PM`)
                timeslot.get().then(async (doc)=>{
                    console.log(doc.data())
                    var data = doc.data() 

                        if(data.slots <=0){
                            return;
                        }


                    await timeslot.update({
                        slots: firebase.firestore.FieldValue.increment(-1)
                    });
                    axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
                        name, date, time, number
                    })
                    
                })
                }
                
            }

            
            console.log("Document written with ID: ", docRef.id);
            navigate("/Success",{state:{uid:docRef.id,count:0, name:name, area:area, date:date, time:time}});
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });  


        
    }
    
    var date = location.state.date.slice(0,2)
    var time = location.state.time.slice(7)

    if( location.state.date === "9feb"){
        date = location.state.date.slice(0,1)
    }


    
    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper3.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}} >


            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '400px', gap:'10px', alignItems: 'center'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', width: '100%'}}>
                        <h1 style={{fontSize:'20px', color: '#54B2E9'}}>BOOKING FOR: {date} FEB -  {time} PM, 2023</h1>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%', marginTop: '20px'}}>
                        <label style={{color:"#54B2E9", fontWeight:"400"}}>NAME</label>
                        <input  type="text" id="Name" style={{background:"transparent",border:"0", borderBottom:"1px solid #54B2E9", marginBottom:'15px', width:"100%", height:'27px', color:"#54B2E9" }}/> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                        <label style={{color:"#54B2E9", fontWeight:"400"}}>EMAIL</label>
                        <input type="email" id='email' style={{background:"transparent",border:"0", borderBottom:"1px solid #54B2E9", marginBottom:'15px', width:"100%", height:'27px', color:"#54B2E9" }} />
                    </div>


                    <div style={{width:"100%", display: 'flex', flexDirection: 'column'}}>
                        <div  style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                            <label style={{color:"#54B2E9", fontWeight:"400"}}>MOBILE (971 xx xxx xxxx)</label>
                            <input type="number" id='no' style={{background:"transparent",border:"0", borderBottom:"1px solid #54B2E9", marginBottom:'15px', width:"100%", height:'27px', color:"#54B2E9" }} />
                        </div>
                    </div>

                    <div style={{width:"100%", display: 'flex', flexDirection: 'column'}}>
                        <label style={{color:"#54B2E9", fontWeight:"400", marginBottom: '10px'}}>KITE ASSIGNED</label>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <label style={{color:"#54B2E9", fontWeight:"400"}}><input id='checkmd' style={{marginRight: '10px'}} value="m" onClick={(e)=>{onlyOnetwo(e.target.value)}} type="checkbox"/>Yes</label>
                            <label style={{color:"#54B2E9", fontWeight:"400"}}><input id='checkfd' style={{marginLeft:'80px', marginRight: '10px'}} value="f" onClick={(e)=>{onlyOnetwo(e.target.value)}} type="checkbox"/>No</label>
                        </div>
                    </div>

                    <div>
                        <p id='error' style={{color:"red", marginBottom: '30px'}}>  </p>
                    </div>


                    <div style={{display: 'flex', width: '100%', flexDirection: 'row'}}>                    
                        {/* <Link to={{pathname:`/Date/${location.state.date}`}}>               */}
                            <button onClick={HandleMap} className="grab"  style={{cursor: 'grab', width: '200px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px'}} variant="contained">BACK</button>
                        {/* </Link> */}
                        <button ref={buttonRef} className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', marginLeft: '20px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px'}} variant="contained" onClick={HandleSubmit}>SUBMIT</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Registration;
