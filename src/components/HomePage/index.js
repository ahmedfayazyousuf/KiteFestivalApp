import Logo from './admin.png'
import { Link } from "react-router-dom";

const HomePage = () => { 

    return (
        <>
            <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}} >
                <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                
                    <div style={{display: 'flex', flexDirection: 'column', height: '70%', width: '100%'}}>

                    <Link to={{pathname:"/adminlogin"}}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height:'50vh'}}>
                                <img src= {Logo} alt="Logo" style={{width: '150px', marginTop: '60px', marginBottom: '100px'}}/>
                            </div>
                        </Link>

                    </div>

                    <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column', height: '30%', width: '100%'}}>
                        <Link to={{pathname:"/choosedate"}}>
                            <button style={{cursor: 'grab', width: '250px', height: '50px', border: 'none', borderRadius: '10px', backgroundImage: 'linear-gradient(#0031CC 50%, #0180F1 )', color: 'white', fontSize: '25px'}}>Click to Enter</button>
                        </Link>
                    </div>
                </div>
            </div>

              
        </>
    )
}

export default HomePage

