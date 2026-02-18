import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <LightBlub />
    </div>
  );
}

function LightBlub() {
  const [bulbOn, setBlubOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBlubOn={setBlubOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? " bulb on" : "bulb off"}</div>;
}

function ToggleBulbState({ bulbOn, setBlubOn }) {
  function toggleBulb() {
    setBlubOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={toggleBulb}>Toggle the bulb</button>
    </div>
  );
}

export default App;
