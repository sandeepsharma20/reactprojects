import "./App.css";
import React,{useState} from "react";

function App() {
  let [counter,setcounter]=useState(0) 
//let counter=15
function addvalue(){
  setcounter(counter=>counter+1);
  setcounter(counter=>counter+1);
  setcounter(counter=>counter+1);
}

  return (
    <div className="container">
      <h1>Counter Project</h1>
      <h1>Count: {counter}</h1>

      <button onClick={addvalue} >Increase</button>
      <br />

      <button onClick={()=>{if(counter>0) setcounter(counter-1)}} className="decrease">Decrease</button>
      <button onClick={()=>{setcounter(0)}} className="reset">Reset</button>
    </div>
  );
}

export default App;