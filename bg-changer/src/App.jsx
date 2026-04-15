import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300 flex items-end justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="mb-10 flex gap-4 bg-white p-4 rounded-2xl shadow-lg">
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
        >
          Red
        </button>

        <button
          onClick={()=> setColor("green")}
          className="px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600"
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;