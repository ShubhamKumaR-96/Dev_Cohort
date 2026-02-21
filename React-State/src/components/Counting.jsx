import { useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";

const Counting = () => {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
};

function CurrentCount() {
  const Val = useRecoilValue(counterAtom);
  return <div>{Val}</div>;
}



function Increase() {
  const setCountVal = useSetRecoilState(counterAtom);

  function IncreVal() {
    setCountVal((c) => c + 1);
  }
  return (
    <div>
      <button onClick={IncreVal}>Increase</button>
    </div>
  );
}

function Decrease() {
  const setCountVal = useSetRecoilState(counterAtom);

  function DecVal() {
    setCountVal((c) => c - 1);
  }
  return (
    <div>
      <button onClick={DecVal}>Decrease</button>
    </div>
  );
}


export default Counting;