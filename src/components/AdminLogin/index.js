

const AdminLogin = () =>{
    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper3.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}} >


            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '400px', gap:'10px', alignItems: 'center'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                        <label style={{color:"white", fontWeight:"400"}}>Name</label>
                        <input  type="text" id="Name" style={{background:"transparent",border:"0", borderBottom:"1px solid white", marginBottom:'15px', width:"100%", height:'27px', color:"rgba(255,255,255,0.5" }}/> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                        <label style={{color:"white", fontWeight:"400"}}>Password</label>
                        <input type="password" id='password' style={{background:"transparent",border:"0", borderBottom:"1px solid white", marginBottom:'15px', width:"100%", height:'27px', color:"rgba(255,255,255,0.5" }} />
                    </div>


                    <div style={{display: 'flex', width: '100%', flexDirection: 'row',gap:"20px", marginTop: '20px'}}>                    
                        <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundImage: 'linear-gradient(#0031CC 50%, #0180F1 )', color: 'white', fontSize: '25px'}} variant="contained">Back</button>
                        <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundImage: 'linear-gradient(#0031CC 50%, #0180F1 )', color: 'white', fontSize: '25px'}} variant="contained">Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AdminLogin;
