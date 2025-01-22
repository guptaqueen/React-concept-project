import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
 

  const addValue = () => {
    if (counter <20){
      setCounter(counter + 1);
      
    }
    else{
       console.log("maximum value reached") 
    }
    // setCounter(counter + 1);
    // console.log("value added", counter);
  };

  const removeValue = () => {
    if(counter>0){
      setCounter(counter -1)
    }
  else{
    console.log("minimun value reached")
  }
    // setCounter(counter - 1);
  };

  return (
    <div className="intro">
      <h1>Manisha react</h1>
      <h2>Counter value {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>

      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>footer:{counter}</p>
    </div>
  );
}

export default App;
