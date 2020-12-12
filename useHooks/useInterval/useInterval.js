import React, { useEffect, useRef, useState } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;

//usage :
function Counter() {
  let [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return <h1>{count}</h1>;
}