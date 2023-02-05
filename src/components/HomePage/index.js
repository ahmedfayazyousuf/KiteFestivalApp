import Logo from './admin.png'
import Logo2 from './logo.png'
import { Link } from "react-router-dom";

const HomePage = () => { 

    return (
        <>
            <div style={{height: '100vh', width: '100vw', backgroundColor: 'white', margin: '0', padding: '0'}} >
                <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                
                    <div style={{display: 'flex', flexDirection: 'column', height: '70%', width: '100%'}}>
                            
                            <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'right', alignItems: 'right', height:'10vh', marginBottom: '80px'}}>
                                <Link to={{pathname:"/adminlogin"}}>
                                    <img src= {Logo} alt="Logo" style={{width: '70px', marginTop: '20px', marginRight: '20px'}}/>
                                </Link>
                            </div>

                            <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'   }}>
                                <img src= {Logo2} alt="Logo" style={{width: '350px', marginTop: '20px', marginRight: '20px'}}/>
                            </div>

                    </div>

                    <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column', height: '30%', width: '100%', marginTop: '50px'}}>
                        <Link to={{pathname:"/choosedate"}}>
                            <button style={{cursor: 'grab', width: '250px', height: '50px', border: 'none', borderRadius: '10px', backgroundColor:'#54B2E9', color: 'white', fontSize: '25px', marginTop: '20px'}}>CLICK TO ENTER</button>
                        </Link>
                    </div>
                </div>
            </div>

              
        </>
    )
}

export default HomePage

