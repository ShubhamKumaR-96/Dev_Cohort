import { useState } from "react";
import usePrev from "../hooks/usePrev";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const prev = usePrev(counter);
  console.log(prev)

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter(curr=>curr+1)}}>Increase Value</button>
      <p>The previous val of counter: {prev}</p>
    </div>
  );
};

export default Counter;
