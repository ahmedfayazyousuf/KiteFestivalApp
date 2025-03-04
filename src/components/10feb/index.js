import './User.css';
import firebase from '../../firebase'
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const TimeSlot = () => {
    // eslint-disable-next-line 
    const [time, setTime] = useState('');
    // eslint-disable-next-line 
    const [user, setUser] = useState([]);

    const { id } = useParams();
    const idd = id.slice(0,2);
    const idd2 = id.slice(2,5);
    const navigate = useNavigate();

    const getKites = async () =>{

    const kites = firebase.firestore().collection("Kites").doc(`${id}`);

    kites.collection("Areas").doc("Area1").collection('timeslots').get().then((querySnapshot) => {
        var count = 0;
    querySnapshot.forEach((doc) => {
        console.log(doc.id)
        kites.collection("Areas").doc("Area1").collection('timeslots').doc(`${doc.id}`).get().then((doc2)=>{
            var time=doc.id.slice(0,-3)
            console.log(time)
            if(doc2.data().slots<=0){
                // document.getElementById(`areaone${time}`).style.display = "none";
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
                // document.getElementById(`areatwo${time}`).setAttribute("disabled","disabled");s
                // document.getElementById(`areatwo${time}`).style.display = "none";
            }

            document.getElementById(`areatwo${time}k`).innerHTML = `${doc2.data().kites} KITES AVAILABLE`
            document.getElementById(`areatwo${time}s`).innerHTML = `${doc2.data().slots} SLOTS AVAILABLE`
        })
        setUser(current => [...current, doc.data()]);
    });
    })
    }

    function HandleSubmit(){
        console.log('hello')
        if(time === ''){
            return;
        }

        var value = document.getElementById(`${time}s`).innerHTML

        if(value === '0 SLOTS AVAILABLE'){
            document.getElementById('error').innerHTML = "NO SLOTS AVAILABLE"
            return;
        }

    navigate('/registration',{state:{time:time,date:id}});
    }

    useEffect(()=>{
        getKites()
    },[])
   

    function Handleclick(e){
        var slots = document.getElementById(`${e}s`)
        var kites = document.getElementById(`${e}k`)

        slots.style.color = 'white'
        kites.style.color = 'white'
        console.log(user)
        console.log()

        if(e === 'areaone7:30'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone12:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";


            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areaone7:30');
        }


        if(e === 'areatwo12'){
            document.getElementById(e).style.background = "#54B2E9"; 
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone12:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            setTime('areatwo12');
        }

        if(e === 'areatwo11'){
            document.getElementById(e).style.background = "#54B2E9"; 
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";

            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
        
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            setTime('areatwo11');
        }

        if(e === 'areaone10:30'){
            document.getElementById(e).style.background = "#54B2E9"; 
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone12:30').style.color = "black";

            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";


            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";


            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            setTime('areaone10:30');
        }

        if(e === 'areaone11:30'){
            document.getElementById(e).style.background = "#54B2E9"; 
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone12:30').style.color = "black";
        
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            setTime('areaone11:30');
        }



        if(e === 'areaone12:30'){
            document.getElementById(e).style.background = "#54B2E9"; 
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";

            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";


            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
     

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            setTime('areaone12:30');
        }
        if(e === 'areaone1:30'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            
            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areaone1:30');
        }
        if(e === 'areaone2:30'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areaone2:30');
        }
        if(e === 'areaone3:30'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";


            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areaone3:30');
        }
        if(e === 'areaone4:30'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";


            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areaone4:30');
        }
        if(e === 'areaone5:30'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";


            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areaone5:30');
        }
        if(e === 'areatwo1'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";

            document.getElementById('areatwo11').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            

            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";

            document.getElementById('areatwo11').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            

            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";


            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";

            document.getElementById('areatwo11k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            

            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";


            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";

            document.getElementById('areatwo11s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            

            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areatwo1');
        }
        if(e === 'areatwo3'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";


            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areatwo3');
        }
        if(e === 'areatwo4'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areatwo4');
        }
        if(e === 'areatwo5'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";


            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areatwo5');
        }
        if(e === 'areatwo6'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo7').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo7').style.color = "black";

            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo7k').style.color = "black";

            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo7s').style.color = "black";

            setTime('areatwo6');
        }
        if(e === 'areatwo7'){
            document.getElementById(e).style.background = "#54B2E9";
            document.getElementById(e).style.color = "white";
            document.getElementById('areaone12:30').style.background = "transparent";
            document.getElementById('areaone1:30').style.background = "transparent";
            document.getElementById('areaone2:30').style.background = "transparent";
            document.getElementById('areaone3:30').style.background = "transparent";
            document.getElementById('areaone4:30').style.background = "transparent";
            document.getElementById('areaone5:30').style.background = "transparent";
            document.getElementById('areaone11:30').style.background = "transparent";
            document.getElementById('areaone10:30').style.background = "transparent";
            document.getElementById('areaone7:30').style.background = "transparent";
            document.getElementById('areaone12:30').style.background = "transparent";
            

            document.getElementById('areatwo1').style.background = "transparent";
            document.getElementById('areatwo12').style.background = "transparent";
            document.getElementById('areatwo11').style.background = "transparent";
            
            document.getElementById('areatwo3').style.background = "transparent";
            document.getElementById('areatwo4').style.background = "transparent";
            document.getElementById('areatwo5').style.background = "transparent";
            document.getElementById('areatwo6').style.background = "transparent";

            document.getElementById('areaone12:30').style.color = "black";
            document.getElementById('areaone1:30').style.color = "black";
            document.getElementById('areaone2:30').style.color = "black";
            document.getElementById('areaone3:30').style.color = "black";
            document.getElementById('areaone4:30').style.color = "black";
            document.getElementById('areaone5:30').style.color = "black";
            document.getElementById('areaone11:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            document.getElementById('areaone10:30').style.color = "black";
            document.getElementById('areaone7:30').style.color = "black";
            

            document.getElementById('areatwo1').style.color = "black";
            document.getElementById('areatwo12').style.color = "black";
            document.getElementById('areatwo11').style.color = "black";
            
            document.getElementById('areatwo3').style.color = "black";
            document.getElementById('areatwo4').style.color = "black";
            document.getElementById('areatwo5').style.color = "black";
            document.getElementById('areatwo6').style.color = "black";


            document.getElementById('areaone12:30k').style.color = "black";
            document.getElementById('areaone1:30k').style.color = "black";
            document.getElementById('areaone2:30k').style.color = "black";
            document.getElementById('areaone3:30k').style.color = "black";
            document.getElementById('areaone4:30k').style.color = "black";
            document.getElementById('areaone5:30k').style.color = "black";
            document.getElementById('areaone11:30k').style.color = "black";
            document.getElementById('areaone10:30k').style.color = "black";
            document.getElementById('areaone7:30k').style.color = "black";
            document.getElementById('areaone12:30k').style.color = "black";
            

            document.getElementById('areatwo1k').style.color = "black";
            document.getElementById('areatwo12k').style.color = "black";
            document.getElementById('areatwo11k').style.color = "black";
            
            document.getElementById('areatwo3k').style.color = "black";
            document.getElementById('areatwo4k').style.color = "black";
            document.getElementById('areatwo5k').style.color = "black";
            document.getElementById('areatwo6k').style.color = "black";


            document.getElementById('areaone12:30s').style.color = "black";
            document.getElementById('areaone1:30s').style.color = "black";
            document.getElementById('areaone2:30s').style.color = "black";
            document.getElementById('areaone3:30s').style.color = "black";
            document.getElementById('areaone4:30s').style.color = "black";
            document.getElementById('areaone5:30s').style.color = "black";
            document.getElementById('areaone11:30s').style.color = "black";
            document.getElementById('areaone10:30s').style.color = "black";
            document.getElementById('areaone7:30s').style.color = "black";
            document.getElementById('areaone12:30s').style.color = "black";
            

            document.getElementById('areatwo1s').style.color = "black";
            document.getElementById('areatwo12s').style.color = "black";
            document.getElementById('areatwo11s').style.color = "black";
            
            document.getElementById('areatwo3s').style.color = "black";
            document.getElementById('areatwo4s').style.color = "black";
            document.getElementById('areatwo5s').style.color = "black";
            document.getElementById('areatwo6s').style.color = "black";

            setTime('areatwo7');
        }
    }
    
    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '100vw', margin: '0', padding: '0'}} >

                <div  style={{display:'flex', width: '80%', justifyContent: 'center'}} >
                    <p style={{fontSize: '25px', color: '#54B2E9', padding: '5px'}} >SLOTS - {idd} {idd2}ruary</p>
                </div>


                <div  style={{display:'flex', width: '80%', justifyContent: 'center', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', marginBottom: '20px'}} >
                    <p style={{fontSize: '25px', color: 'white', padding: '5px'}} >ACTIVITY AREA 1</p>
                </div>
                
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button  id="areaone10:30"  onClick={() => {Handleclick("areaone10:30")}} value="10:30 AM - 11:30 AM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                10:30 AM
                                <p id="areaone10:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone10:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div> 
                    </div> 

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button  id="areaone11:30"  onClick={() => {Handleclick("areaone11:30")}} value="11:30 AM - 12:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                11:30 AM
                                <p id="areaone11:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone11:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div> 
                    </div> 
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button  id="areaone12:30"  onClick={() => {Handleclick("areaone12:30")}} value="12:30 PM - 1:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                12:30 PM
                                <p id="areaone12:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone12:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div> 
                    </div> 
                                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone1:30" onClick={() => {Handleclick("areaone1:30")}} value="1:30 PM - 2:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                1:30 PM
                                <p id="areaone1:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone1:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div>


                     

                </div>


                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone2:30" onClick={() => {Handleclick("areaone2:30")}} value="2:30 PM - 3:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                2:30 PM
                                <p id="areaone2:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone2:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div> 
                    </div> 
                    

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone3:30" onClick={() => {Handleclick("areaone3:30")}} value="3:30 PM - 4:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                3:30 PM
                                <p id="areaone3:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone3:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div> 

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone4:30" onClick={() => {Handleclick("areaone4:30")}} value="4:30 PM - 5:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                4:30 PM
                                <p id="areaone4:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone4:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div>                 

                </div>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone5:30" onClick={() => {Handleclick("areaone5:30")}} value="5:30 PM - 6:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                5:30 PM
                                <p id="areaone5:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone5:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                            </div> 
                        </div>                 
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areaone7:30" onClick={() => {Handleclick("areaone7:30")}} value="7:30 PM - 8:30 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                7:30 PM
                                <p id="areaone7:30k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areaone7:30s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div> 

                </div>

                <div  style={{display:'flex', width: '80%', justifyContent: 'center', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', marginBottom: '20px', marginTop: '20px'}} >
                    <p style={{fontSize: '25px', color: 'white', padding: '5px'}} >ACTIVITY AREA 2</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo11" onClick={() => {Handleclick("areatwo11")}} value="11 AM - 12 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                11:00 AM
                                <p id="areatwo11k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo11s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div> 
                    </div>    

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo12" onClick={() => {Handleclick("areatwo12")}} value="12 PM - 1 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                12:00 PM
                                <p id="areatwo12k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo12s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div> 
                    </div>    
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo1" onClick={() => {Handleclick("areatwo1")}} value="1 PM - 2 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                1:00 PM
                                <p id="areatwo1k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo1s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div> 
                    </div>                 
                    
                    {/* <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo2" onClick={() => {Handleclick("areatwo2")}} value="2 PM - 3 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                2:00 PM
                                <p id="areatwo2k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo2s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div> 
                    </div>                  */}
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo3" onClick={() => {Handleclick("areatwo3")}} value="3 PM - 4 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                3:00 PM
                                <p id="areatwo3k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo3s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div>                  
   
                    

                </div>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo4" onClick={() => {Handleclick("areatwo4")}} value="4 PM - 5 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                4:00 PM
                                <p id="areatwo4k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo4s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div>  
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo5" onClick={() => {Handleclick("areatwo5")}} value="5 PM - 6 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                5:00 PM
                                <p id="areatwo5k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo5s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo6" onClick={() => {Handleclick("areatwo6")}} value="6 PM - 7 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                6:00 PM
                                <p id="areatwo6k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo6s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                        <div className="content content-1" style={{padding: '0', margin: '10px'}}>
                            <button id="areatwo7" onClick={() => {Handleclick("areatwo7")}} value="7 PM - 8 PM" style={{width:"150px", padding: '10px', color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '20px', fontWeight: '500',borderRadius: "10px"}}>
                                7:00 PM
                                <p id="areatwo7k" style={{color: '#BAB4B4', fontSize: '10px'}}><em >x kites available</em></p>
                                <p id="areatwo7s" style={{color: '#BAB4B4', fontSize: '10px'}}><em>x slots available</em></p>
                            </button>
                        </div>
                    </div>

                </div>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row', marginTop: '20px'}}>

                    <p id='error' style={{color:"red"}}>  </p>

                </div>


                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row'}}>      
                        <Link to={{pathname:'/choosedate'}}>              
                            <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px'}} variant="contained">BACK</button>
                        </Link>
                                    
                        <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', marginLeft:'20px', color: 'white', fontSize: '25px'}} variant="contained" onClick={HandleSubmit}>SUBMIT</button>
                    </div>
        </div>
    )
}

export default TimeSlot