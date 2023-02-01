import firebase from '../../firebase';
import '../All.css'; 
import { useEffect, useState } from 'react';

const Success = () => {
    const [Users, setUsers] = useState([]);
    const [singleDoc, setSingleDoc] = useState({});
    
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
                    <h1 style={{fontSize: '20px', color: 'white', fontWeight: '500'}}>Booking Details</h1>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '400px'}}>

                        <table>
                            <tbody>
                                <tr>
                                    <th style={{textAlign: 'left', color: 'white'}}>Name</th>
                                    <th style={{width: '40px', color: 'white'}}>:</th>
                                    <th style={{textAlign: 'left', color: 'white'}}>{singleDoc.Name}</th>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left', color: 'white'}}>Location</td>
                                    <td style={{width: '40px', color: 'white'}}>:</td>
                                    <td style={{textAlign: 'left', color: 'white'}}>{singleDoc.Area}</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left', color: 'white'}}>Date</td>
                                    <td style={{width: '40px', color: 'white'}}>:</td>
                                    <td style={{textAlign: 'left', color: 'white'}}>xxx</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left', color: 'white'}}>Time</td>
                                    <td style={{width: '40px', color: 'white'}}>:</td>
                                    <td style={{textAlign: 'left', color: 'white'}}>{singleDoc.Time}<span> PM</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Success;
