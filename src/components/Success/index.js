import '../All.css';
// import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import TickIcon from './tickicon.png';

const Success = () =>{

    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("desktop.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}}>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '40vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={TickIcon} alt="Tick Mark" style={{width: '10vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', marginTop: '25px'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >Thank you! We will be sending you a confirmation SMS shortly.</p>
            </div>
        </div>
    )
}

export default Success;
