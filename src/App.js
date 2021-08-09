import { useState, useEffect } from "react";
import Bulb from "./components/bulb/index"
import "./App.css"


function App() {
    const [btn, setBtn] = useState(false)

        // {btn ? setDisplay("ON") : setDisplay("OFF")}
    return <>
        <div class="box">
            <div class="center">
                <Bulb show={btn}/>
                <button  onClick={() => {
                    setBtn(!btn)
                }}>Switch {btn? "ON" :"OFF"}</button>
                <h2>Switch for Bulb</h2>
            </div>
        </div>


    </>



}














export default App;

 // const[bulb,setBulb]=useState(false)

 // return <>
 // {console.log("hello")}
 // <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:400}}>
 // <Bulb show={bulb}/>
 // <button onClick={()=>{setBulb(!bulb)}}>Switch On/Off</button>
 // </div>
 // </>
