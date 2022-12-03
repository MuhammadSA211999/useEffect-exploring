import { useState } from 'react';
import './App.css';
import MyComFunc from './componentents/MyComFunc';
import MyComponent from './componentents/MyComponent';


function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <h1>useEffect exploring</h1>
      {/* <MyComponent></MyComponent> */}
      <div>{show && <MyComFunc></MyComFunc>}</div>
      <p> <button onClick={() => setShow((prvShow) => !prvShow)}>{show ? "Hide Post" : "Show post"}</button>
      </p>

    </div>
  );
}

export default App;
