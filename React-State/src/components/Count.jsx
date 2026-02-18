import counterHook from "../hooks/counterHook";

const Count = () => {
    const {counter,incraseCount}=counterHook()
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={incraseCount}>Increase Count</button>
    </div>
  );
}

export default Count
