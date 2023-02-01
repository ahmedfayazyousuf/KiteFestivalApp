import firebase from '../../firebase';
import '../All.css'; 
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const AdminLogin = () =>{
    const [allDocs, setAllDocs] = useState([]);

    useEffect(() => {
        firebase.firestore().collection("Users").get().then((snapshot) => {
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc)=>{
                    setAllDocs((prev)=>{
                        return[...prev,doc.data()];
                    });
                });
            }   
        });
        console.log(allDocs);
    },[])

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundImage: `url("wallpaper3.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height: "80%", justifyContent:"center", alignItems:"center", overflowY: 'scroll'}}>
                <table style={{backgroundColor: '#fff', opacity: '.5', borderRadius: '5px', width: '90%'}}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Time</td>
                            <td>Attendance</td>
                            <td>Kite Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    {allDocs.map((doc) => (
                            <tr key={doc._id} style={{textAlign: 'center'}}>
                                <td>{doc.Name}</td>
                                <td>{doc.Time}<span> PM</span></td>                     
                                <td>{doc.slug}</td>
                                <td>
                                    <button style={{backgroundColor: '#495151', color: 'white', borderColor: 'white', marginRight: '5px', textDecoration: 'none'}}>Edit</button>
                                    <button style={{backgroundColor: '#495151', color: 'white', borderColor: 'white', marginRight: '5px', textDecoration: 'none'}}>Preview</button>
                                    <button style={{backgroundColor: '#495151', color: 'white', borderColor: 'white', textDecoration: 'none', marginRight: '0'}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminLogin;
