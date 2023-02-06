import './admin.css';
import Logo from './download.png'
import { Link } from "react-router-dom";
import firebase from '../../firebase';
import { useEffect, useState } from 'react';

const AdminLogin = () =>{
    const [allDocs, setAllDocs] = useState([]);

    const [date, setDate] = useState('')

    const [times, setTimes] = useState('')

    const [area, setArea] = useState('')

    const [at, setAt] = useState(0)

    const [rt, setRt] = useState(0)

    function timefilter(){
        var body = document.getElementById("tbody").childNodes

        for(var i = 0; i < body.length; i++){

            body[i].style.display = "none"; // depending on what you're doing
        }

        if(date === '' && area === ''){
            var time = document.getElementById("time")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(timeSelected); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
            setTimes(timeSelected)
        }
        else if(date === ''){
            var time = document.getElementById("time")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(timeSelected + " " + area); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
            setTimes(timeSelected)
        }
        else if(area === ''){
            var time = document.getElementById("time")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(date +" "+ timeSelected); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
            setTimes(timeSelected)
        }
        else{
            var time = document.getElementById("time")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(date +" "+ timeSelected + " " + area); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
            setTimes(timeSelected)
        }

        


    }

    function datefilter(){
        var body = document.getElementById("tbody").childNodes

        for(var i = 0; i < body.length; i++){

            body[i].style.display = "none"; // depending on what you're doing
        }

        if(times === '' && area === ''){
            var time = document.getElementById("date")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(timeSelected); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }

            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`

            console.log(divsToHide[1].childNodes[2].innerHTML,divsToHide[1].childNodes[3].innerHTML)
            setDate(timeSelected)
        }
        else if(times === ''){
            var time = document.getElementById("date")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(timeSelected+ " " + area); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }
            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
            console.log(divsToHide[1].childNodes[2].innerHTML,divsToHide[1].childNodes[3].innerHTML)
            setDate(timeSelected)
        }
        else if(area === ''){
            var time = document.getElementById("date")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(timeSelected+ " " + times ); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
            console.log(divsToHide[1].childNodes[2].innerHTML,divsToHide[1].childNodes[3].innerHTML)
            setDate(timeSelected)
        }
        else{
            var time = document.getElementById("date")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(timeSelected+ " " + times + " " + area); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
                
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
            console.log(divsToHide[1].childNodes[2].innerHTML,divsToHide[1].childNodes[3].innerHTML)
    
            setDate(timeSelected)
        }


    }

    function areafilter(){
        var body = document.getElementById("tbody").childNodes

        for(var i = 0; i < body.length; i++){

            body[i].style.display = "none"; // depending on what you're doing
        }

        if(times === '' && date === ''){
            var time = document.getElementById("area")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(timeSelected); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
    
            setArea(timeSelected)
        }

        else if(times === ''){
            var time = document.getElementById("area")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(date+ " " + timeSelected); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
    
            setArea(timeSelected)
        }
        else if (date === ''){
            var time = document.getElementById("area")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(times + " " + timeSelected); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
    
            setArea(timeSelected)
        }
        else{
            var time = document.getElementById("area")
            var timeSelected = time.options[time.selectedIndex].value;
            var divsToHide = document.getElementsByClassName(date+ " " + times + " " + timeSelected); //divsToHide is an array
            var counta = 0
            var countr = 0
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "table-row"; // depending on what you're doing
                var attended = divsToHide[i].childNodes[2].innerHTML
                var returned = divsToHide[i].childNodes[3].innerHTML

                if(attended === 'Attended'){
                    counta = counta +1
                }

                if(returned === 'Returned'){
                    countr = countr + 1
                }
            }

            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${counta})`
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${countr})`
    
            setArea(timeSelected)
        }


    }

    useEffect(() => {
        firebase.firestore().collection("Users").get().then((snapshot) => {
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc)=>{
                    var data = doc.data()

                    if(data.Status === 'Attended'){
                        setAt(prev => prev+1)
                    }

                    if(data.KiteStatus === 'Returned'){
                        setRt(prev => prev+1)
                    }
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

        var value = document.getElementById(`S${id}`).innerHTML
        if( value !== "Attended"){
            setAt(at+1)
            document.getElementById(`at`).innerHTML = `ATTENDANCE (count = ${at+1})`
        }

        document.getElementById(`S${id}`).innerHTML = "Attended"
        console.log(`S${id}`)

 

    }


    async function Returned(id) {
        // change kite status to 'returned' on button click onClick function - firebase document update
        await firebase.firestore().collection("Users").doc(id).update({
            KiteStatus:"Returned"
        })
        var value = document.getElementById(`K${id}`).innerHTML
        console.log(value)
        if( value !== "Returned"){
            setRt(rt+1)
            document.getElementById(`rt`).innerHTML = `KITE STATUS (count = ${rt+1})`
        }

        console.log(`K${id}`)

        document.getElementById(`K${id}`).innerHTML = "Returned"


    }

    function locationfilter() {

    }

// Quick and simple export target #table_id into a csv
function download(table_id, separator = ',') {
    // Select rows from table_id
    var rows = document.querySelectorAll('table#' + table_id + ' tr');

    if (times === '' && date === ''  && area === ''){
        rows = document.querySelectorAll('table#' + table_id + ' tr');
    }
    else{
        rows = document.getElementsByClassName(date + " " + times + " " + area);
    }
    
    // Construct csv
    var csv = ['"NAME","NUMBER","ATTENDANCE","KITE STATUS"',];
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll('td, th');
        if (cols[0].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ').replace(/"/g, '""') === 'NAME' ){
            continue
        }
        for (var j = 0; j < cols.length-2; j++) {
            // Clean innertext to remove multiple spaces and jumpline (break csv)
            var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')

            // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
            data = data.replace(/"/g, '""');
            // Push escaped string
            row.push('"' + data + '"');
        }
        csv.push(row.join(separator));
    }
    console.log(csv)
    var csv_string = csv.join('\n');
    // Download it
    var filename = 'export_' + table_id + '_' + new Date().toLocaleDateString() + '.csv';
    var link = document.createElement('a');
    // link.style.display = 'none';
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
    link.setAttribute('download', filename);

    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
}






    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection:"column", alignItems: 'center', height: '100%', width: '100%', backgroundImage: `url("wallpaper3.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
            {/* <button onClick={filter}>lol</button> */}

            <div style={{display: 'flex', width: '90%', marginBottom: '12px', marginTop: '20px'}}>

                <select name="time" id="date" type="text" required onClick={()=>{datefilter()}} style={{border: 'none', backgroundColor: 'rgb(150, 216, 255)', cursor: 'grab', borderRadius: '10px', width: '15vw', height: '4vh', marginRight: '20px', padding: '5px'}}>
                    <option selected disabled value="">DATE</option>
                    <option value="9feb">9 - FEB</option>
                    <option value="10feb">10 - FEB</option>
                    <option value="11feb">11 - FEB</option>
                    <option value="12feb">12 - FEB</option>
                </select>


                <select name="time" id="time" type="text" required onChange={()=>{timefilter()}} style={{border: 'none', backgroundColor: 'rgb(150, 216, 255)', cursor: 'grab', borderRadius: '10px', width: '15vw', height: '4vh', marginRight: '20px', padding: '5px'}}>
                    <option selected disabled value="">TIME</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="1">1:00 PM</option>
                    <option value="1:30">1:30 PM</option>
                    <option value="2">2:00 PM</option>
                    <option value="2:30">2:30 PM</option>
                    <option value="3">3:00 PM</option>
                    <option value="3:30">3:30 PM</option>
                    <option value="4">4:00 PM</option>
                    <option value="4:30">4:30 PM</option>
                    <option value="5">5:00 PM</option>
                    <option value="5:30">5:30 PM</option>
                    <option value="6">6:00 PM</option>
                    <option value="6:30">6:30 PM</option>
                    <option value="7">7:00 PM</option>
                    <option value="7:30">7:30 PM</option>
                    <option value="8">8:00 PM</option>
                    <option value="8:30">8:30 PM</option>
                    <option value="9">9:00 PM</option>
                    <option value="9:30">9:30 PM</option>
                </select>

                

                <select name="time" id="area" type="text" required onClick={()=>{areafilter()}} style={{border: 'none', backgroundColor: 'rgb(150, 216, 255)', cursor: 'grab', borderRadius: '10px', width: '20vw', height: '4vh', marginRight: '20px', padding: '5px'}}>
                    <option selected disabled value="">LOCATION</option>
                    <option value="areaone">ACTIVITY AREA 1</option>
                    <option value="areatwo">ACTIVITY AREA 2</option>
                </select>

                   {/* <div onSubmit={download_table_as_csv("tableid")}> <img src= {Logo} alt="Logo" style={{width: '4vh', marginLeft: '20px'}} /> </div> */}

                   <button onClick={()=> download("tableid")} style={{border: 'none'}}>
                       <img src= {Logo} alt="Logo" style={{width: '4vh', marginLeft: '20px'}} />
                    </button>

            </div>
            
            <div style={{display:"flex", flexDirection:"column", height:'100%', width:"100%", justifyContent:"center", alignItems:"center"}}>
                <table id='tableid' style={{backgroundColor: '#fff', borderRadius: '5px', width: '90%', height: "100%", backgroundColor: 'rgba(150, 216, 255, 0.5)', borderCollapse: 'collapse', textAlign:"center", border: '2px solid #54B2E9'}}>
                    <thead>
                        <tr style ={{border: '1px solid black'}}>
                            <th style={{backgroundColor: 'black', color: 'white', padding: '5px', border: '1px solid white'}}>NAME</th>
                            <th style={{backgroundColor: 'black', color: 'white', padding: '5px', border: '1px solid white'}}>NUMBER</th>
                            <th id='at' style={{backgroundColor: 'black', color: 'white', padding: '5px', border: '1px solid white'}}>ATTENDANCE (count = {at})</th>
                            <th id='rt' style={{backgroundColor: 'black', color: 'white', padding: '5px', border: '1px solid white'}}>KITE STATUS (count = {rt})</th>
                            <th style={{backgroundColor: 'black', color: 'white', padding: '5px', border: '1px solid white'}}></th>
                            <th style={{backgroundColor: 'black', color: 'white', padding: '5px', border: '1px solid white'}}></th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                    {allDocs.map((doc) => (
                            <tr key={doc.id } className= {doc.Date+ " " + doc.Time + " " + doc.Area} style={{textAlign: 'center'}} >

                                <td>{doc.Name}</td>
                                <td>{doc.Number}</td>                  
                                
                                <td id = {"S"+ doc.id} >{doc.Status}</td>
                                
                                <td id = {"K"+ doc.id}>{doc.KiteStatus}</td> 

                                <td>
                                    <button style={{backgroundColor: 'black', color: 'white', padding: '5px', margin: '4px', padding: '5px', borderRadius: '10px', marginRight: '5px'}} onClick={() => {Attended(doc.id)}}>Attended</button>
                                </td>

                                <td>
                                    <button style={{backgroundColor: 'black', color: 'white', padding: '5px', margin: '4px', padding: '5px', borderRadius: '10px', marginRight: '5px'}} onClick={() => {Returned(doc.id)}}>Returned</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link to={{pathname:`/`}}>              
                    <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px', marginTop: '20px', marginBottom: '100px'}} variant="contained">RETURN</button>
                </Link>
        </div>
    )
}

export default AdminLogin;



{/* <div class="download-wrapper" onClick="download()">
  <p><i class="material-icons">file_download</i></p>
  <p>Download Demo CSV File</p>
</div> */}



