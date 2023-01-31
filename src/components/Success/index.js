import '../All.css';
// import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import TickIcon from './tickicon.png';  

const Success = () =>{

    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper4.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', height: '60%', width: '100%', backgroundColor: 'yellow'}}>
                </div>

                <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column', height: '30%', width: '100%', backgroundColor: 'red'}}>
                </div>
            </div>
           
        </div>
    )
}

export default Success;
