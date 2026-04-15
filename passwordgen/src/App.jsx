import { useState,useCallback,useEffect ,useRef} from "react";

function App() {
const [length,setLength]=useState(0);
const[numberAllowed,setNumberAllowed]=useState(false);
const [charAllowed,setCharAllowed]=useState(false);
const[password,setPassword]=useState("")
const passwordref=useRef(null);

const passgen=useCallback(()=>{
 let pass=""
 let str="ABCDEFGHIJKLMNOPQRSTUVVWXYZabcdefghijklmnopqrstuvwxyz"
 if(numberAllowed) str+="0123456789"
 if(charAllowed) str+="!@#$%^&*+={}"

for(let i=1;i<=length;i++){
let char=Math.floor(Math.random()*str.length)
pass+=str.charAt(char)
 }
 setPassword(pass)

},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard=useCallback(()=>{
  passwordref.current?.select()
  passwordref.current?.setSelectionRange(0, password.length)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passgen()
},[passgen])

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white gap-6">
      
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-80 border border-white/20">
        
        <h1 className="text-2xl font-bold mb-4 text-center tracking-wide">
          Password Generator
        </h1>

        <input
          type="text"
          value={password}
          readOnly
          placeholder="Enter password"
          ref={passwordref}
          className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-xl 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 
                     placeholder-gray-300 text-white"
        />

        <button
        onClick={copyPasswordToClipboard}
          className="w-full mt-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 
                     transition duration-200 font-semibold shadow-lg"
        >
          Copy
        </button>

      </div>

      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg w-80 space-y-4 border border-white/20">
        
        <div>
          <input type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e)=>setLength(Number(e.target.value))}
          className="w-full accent-blue-500 cursor-pointer"
          />
          <label className="text-sm">Length: {length}</label>
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="characterInput">Character</label>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="numberInput">Number</label>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
          />
        </div>

      </div>

    </div>
  );
}

export default App;