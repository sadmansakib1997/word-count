import logo from "./logo.svg";
import "./App.css";
import From from "./Components/From";
import { useState } from "react";

function App() {
  const [istoggle, setToggled] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setToggled(!istoggle)}>SAKib</button>
      {istoggle ? <h1>sakib</h1> : <h1>Synthia</h1>}

      <From></From>
    </div>
  );
}

export default App;
