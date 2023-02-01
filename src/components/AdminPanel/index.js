import firebase from '../../firebase';
import '../All.css'; 
import { useEffect, useState } from 'react';

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
    },[]);


    function Attended() {
        // change user status to 'attended' on button click onClick function - firebase document update
    }


    function Returned() {
        // change kite status to 'returned' on button click onClick function - firebase document update
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundImage: `url("wallpaper3.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height: "80%", justifyContent:"center", alignItems:"center", overflowY: 'scroll'}}>
                <table style={{backgroundColor: '#fff', borderRadius: '5px', width: '90%'}}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Time</td>
                            <td>Status</td>
                            <td>Attendance</td>
                            <td>Kite Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    {allDocs.map((doc) => (
                            // set key to document id this is incorrect
                            <tr key={doc._id} style={{textAlign: 'center'}}>

                                <td>{doc.Name}</td>
                                <td>{doc.Time}<span> PM</span></td>                     
                                
                                {/* change user status to 'attended' on button click */}
                                <td>{doc.Status}</td>
                                
                                {/* change kite status to 'returned' on button click */}
                                <td>{doc.KiteStatus}</td> 

                                <td>
                                    <button style={{backgroundColor: 'black', color: 'white', margin: '4px', padding: '5px', borderRadius: '10px', marginRight: '5px'}} onClick={() => {Attended()}}>Attended</button>
                                    <button style={{backgroundColor: 'black', color: 'white', margin: '4px', padding: '5px', borderRadius: '10px', marginRight: '5px'}} onClick={() => {Returned()}}>Returned</button>
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
