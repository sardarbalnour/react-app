import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const increaseHandler = () => {
    setCounter((counter) => counter + 1);
  };

  const stopHandler = () => {
    setCounter("-");
  };

  const showHandler = () => setIsShow(true);
  const hideHandler = () => setIsShow(false);

  return (
    <>
      <button onClick={showHandler}>Show</button>
      <button onClick={hideHandler}>Hide</button>
      {isShow && (
        <div>
          <h1>Counter</h1>
          <button onClick={increaseHandler}>Increase</button>
          <button onClick={stopHandler}>Stop</button>
          <p>{counter}</p>
        </div>
      )}
    </>
  );
}

export default Counter;
