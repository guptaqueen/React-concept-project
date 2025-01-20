
import './App.css'

function App() {
  
let counter =15;

const addvalue = () =>{
  console.log("value added",Math.random());
}

  return (
    <div className='intro'>
      <h1>Manisha react</h1>
      <h2>Counter value</h2>
      <button>Add value</button>
      onclick={addvalue}
      <br />
      <button>Remove value</button>
    </div>
  )
}

export default App
