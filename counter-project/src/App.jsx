import "./App.css";
import React,{useState} from "react";

function App() {
  let [counter,setcounter]=useState(0) 
//let counter=15
const addvalue=()=>{
  //counter=counter+1;
 setcounter(counter+1);
};
const decvalue=()=>{
  if(counter>0){
setcounter(counter-1);
  }
  
}
const resetval=()=>{
  setcounter(0);
}
  return (
    <div className="container">
      <h1>Counter Project</h1>
      <h1>Count: {counter}</h1>

      <button onClick={addvalue} >Increase</button>
      <br />

      <button onClick={decvalue} className="decrease">Decrease</button>
      <button onClick={resetval} className="reset">Reset</button>
    </div>
  );
}

export default App;