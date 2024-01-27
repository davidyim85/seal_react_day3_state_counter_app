//when we need state, we need to import in the useState hook
//(applies to function components only. 
//look into class components for more detail wont be covering class components today)
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  //"count" is a variable. this is value of state
  //the initial value of 'count' is 200 because that is value inside the useState() on the line above

  //the "setCount" is a function that is used to update the "count" state variable
  return (
    <div >
      <p><b>current count: </b>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(100)
        }}
      >
        set to 100
      </button>
      <button
        onClick={() => {
          setCount(0)
        }}
      >
        reset to 0
      </button>
    </div>
  );
}

export default App;
