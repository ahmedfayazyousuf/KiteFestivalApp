import '../All.css';
// import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import TickIcon from './tickicon.png';  

const Success = () =>{

    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper4.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', height: '67%', width: '100%'}}>
                </div>

                <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column', height: '33%', width: '100%'}}>
                    <h1 style={{fontSize: '20px', color: 'white', fontWeight: '500'}}>Booking Details</h1>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '400px'}}>

                        <table>
                            <tr>
                                <th style={{textAlign: 'left', color: 'white'}}>Name</th>
                                <th style={{width: '40px', color: 'white'}}>:</th>
                                <th style={{textAlign: 'left', color: 'white'}}>Ahmed</th>
                            </tr>
                            <tr>
                                <td style={{textAlign: 'left', color: 'white'}}>Location</td>
                                <td style={{width: '40px', color: 'white'}}>:</td>
                                <td style={{textAlign: 'left', color: 'white'}}>ACTIVITY AREA 1</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: 'left', color: 'white'}}>Date</td>
                                <td style={{width: '40px', color: 'white'}}>:</td>
                                <td style={{textAlign: 'left', color: 'white'}}>9 Feb</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: 'left', color: 'white'}}>Time</td>
                                <td style={{width: '40px', color: 'white'}}>:</td>
                                <td style={{textAlign: 'left', color: 'white'}}>6:30 PM</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Success;
