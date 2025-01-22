import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 justify-center rounded-3xl">
          {" "}
          <button 
          onClick={() =>setColor("red")}
            className="outline-none px-4 rounded-full text-white shawow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 justify-center rounded-3xl">
          {" "}
          <button onClick={() =>setColor("green")}
            className="outline-none px-4 rounded-full text-white shawow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 justify-center rounded-3xl">
          {" "}
          <button onClick={() =>setColor("yellow")}
            className="outline-none px-4 rounded-full text-white shawow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
        </div>
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 justify-center rounded-3xl">
          {" "}
          <button onClick={() =>setColor("blue")}
            className="outline-none px-4 rounded-full text-white shawow-lg"
            style={{ backgroundColor: "blue" }}
          >
           blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
