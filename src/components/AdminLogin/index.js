import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () =>{

    const navigate = useNavigate();

    function Check(){
        var User = document.getElementById("Name").value
        var Pass = document.getElementById("password").value

        if(User === "admin" || User === "Admin" && Pass === "admin123"){
            navigate("/AdminPanel")
        }
    }

    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper3.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}} >


            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'10px', alignItems: 'center'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                        <label style={{color:"#54B2E9", fontWeight:"400"}}>NAME</label>
                        <input  type="text" id="Name" style={{background:"transparent",border:"0", borderBottom:"1px solid #54B2E9", marginBottom:'15px', width:"100%", height:'27px', color:"#54B2E9" }}/> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                        <label style={{color:"#54B2E9", fontWeight:"400"}}>PASSWORD</label>
                        <input type="password" id='password' style={{background:"transparent",border:"0", borderBottom:"1px solid #54B2E9", marginBottom:'15px', width:"100%", height:'27px', color:"#54B2E9" }} />
                    </div>


                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row', marginTop: '20px'}}>      
                        <Link to={{pathname:"/"}}>              
                            <button className="grab"  style={{cursor: 'grab', width: '200px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px'}} variant="contained">BACK</button>
                        </Link>
                                    
                        <button className="grab"  style={{cursor: 'grab', width: '200px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px', marginLeft: '20px'}} variant="contained" onClick={Check}>SUBMIT</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AdminLogin;
