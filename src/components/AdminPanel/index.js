import { Link } from "react-router-dom";
import firebase from '../../firebase';
import '../All.css'; 
import { useEffect, useState } from 'react';

const AdminLogin = () =>{
    const [allDocs, setAllDocs] = useState([]);

    useEffect(() => {
        firebase.firestore().collection("Users").get().then((snapshot) => {
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc)=>{
                    var data = doc.data()
                    data.id = doc.id
                    setAllDocs((prev)=>{
                        return[...prev,data];
                    });
                });
            }   
        });
        console.log(allDocs);
    },[]);


    async function Attended(id) {
        // change user status to 'attended' on button click onClick function - firebase document update

        await firebase.firestore().collection("Users").doc(id).update({
            Status:"Attended"
        })

        document.getElementById(`S${id}`).innerHTML = "Attended"
        console.log(`S${id}`)



    }


    async function Returned(id) {
        // change kite status to 'returned' on button click onClick function - firebase document update
        await firebase.firestore().collection("Users").doc(id).update({
            KiteStatus:"Returned"
        })

        console.log(`K${id}`)

        document.getElementById(`K${id}`).innerHTML = "Returned"
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection:"column", alignItems: 'center', height: '100vh', width: '100vw', backgroundImage: `url("wallpaper3.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height: "70%", justifyContent:"center", alignItems:"center", overflowY: 'scroll'}}>
                <table style={{backgroundColor: '#fff', borderRadius: '5px', width: '100%'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Attendance</th>
                            <th>Kite Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allDocs.map((doc) => (
                            // set key to document id this is incorrect
                            <tr key={doc.id} style={{textAlign: 'center'}}>

                                <td>{doc.Name}</td>
                                <td>{doc.Time}<span> PM</span></td>                     
                                
                                {/* change user status to 'attended' on button click */}
                                <td id = {"S"+ doc.id} >{doc.Status}</td>
                                
                                {/* change kite status to 'returned' on button click */}
                                <td id = {"K"+ doc.id}>{doc.KiteStatus}</td> 

                                <td>
                                    <button style={{backgroundColor: 'black', color: 'white', margin: '4px', padding: '5px', borderRadius: '10px', marginRight: '5px'}} onClick={() => {Attended(doc.id)}}>Attended</button>
                                    <button style={{backgroundColor: 'black', color: 'white', margin: '4px', padding: '5px', borderRadius: '10px', marginRight: '5px'}} onClick={() => {Returned(doc.id)}}>Returned</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                
            </div>
            <Link to={{pathname:`/`}}>              
                    <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px', marginTop: '40px'}} variant="contained">RETURN</button>
                </Link>
        </div>
    )
}

export default AdminLogin;
