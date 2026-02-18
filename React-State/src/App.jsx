import { createContext, useContext, useState } from "react";
import "./App.css";

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
      <LightBlub />
    </BulbContext.Provider>
  );
}

function LightBlub() {
  // bulbOn is a prop of BulbState component
  // bullOn and setBulbOn is a prop of ToggleBulbState component
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? " bulb on" : "bulb off"}</div>;
}

function ToggleBulbState() {
  const {bulbOn,setBulbOn}=useContext(BulbContext)
  function toggleBulb() {
    setBulbOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={toggleBulb}>Toggle the bulb</button>
    </div>
  );
}

export default App;
