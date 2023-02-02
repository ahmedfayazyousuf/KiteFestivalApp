import { Link } from "react-router-dom";
import firebase from '../../firebase';
import '../All.css'; 
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';

const Success = () => {
    const [Users, setUsers] = useState([]);
    const [singleDoc, setSingleDoc] = useState({});
    const location = useLocation();
    
    useEffect(() => {
        firebase.firestore().collection("Users").doc("8Bz1aKrijtXJMdj7n1mO").get().then((snapshot) => {
            if(snapshot){
                setSingleDoc(snapshot.data());
            }   
        });
        console.log(singleDoc)
    },[]);

    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper4.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', height: '67%', width: '100%'}}>
                </div>

                <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column', height: '33%', width: '100%'}}>
                    <h1 style={{fontSize: '20px', color: '#54B2E9', fontWeight: '500', marginBottom: '20px'}}>BOOKING DETAILS</h1>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '250px'}}>

                        <table>
                            <tbody>
                                <tr>
                                    <th style={{textAlign: 'left', color: '#54B2E9'}}>NAME</th>
                                    <th style={{width: '40px', color: '#54B2E9'}}>:</th>
                                    <th style={{textAlign: 'left', color: '#54B2E9'}}>{location.state.name}</th>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>LOCATION</td>
                                    <td style={{width: '40px', color: '#54B2E9'}}>:</td>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>{location.state.area}</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>DATE</td>
                                    <td style={{width: '40px', color: '#54B2E9'}}>:</td>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>{location.state.date}</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>TIME</td>
                                    <td style={{width: '40px', color: '#54B2E9'}}>:</td>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>{location.state.time}<span> PM</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <Link to={{pathname:`/`}}>              
                            <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px', marginTop: '40px'}} variant="contained">RETURN</button>
                        </Link>
                    </div>

                    
                </div>
            </div>
           
        </div>
    )
}

export default Success;
