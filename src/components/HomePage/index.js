
const HomePage = () => { 

    return (
        <>
            <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}} >
                <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                
                    <div style={{display: 'flex', flexDirection: 'column', height: '70%', width: '100%'}}>

                    </div>

                    <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column', height: '30%', width: '100%'}}>
                        <button style={{cursor: 'grab', width: '250px', height: '50px', border: 'none', borderRadius: '10px', backgroundImage: 'linear-gradient(#0031CC 50%, #0180F1 )', color: 'white', fontSize: '25px'}}>Click to Enter</button>
                    </div>
                </div>
                
        
            </div>

              
        </>
    )
}

export default HomePage

