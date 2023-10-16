import { useEffect, useState } from "react";

const Counter = ({ limit }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = limit;

    if (start === end) return;

    let totalMilSecDur = 10;
    let incrementTime = (totalMilSecDur / end) * 100;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [limit]);

  return <span className={"transition-all duration-1000"}>{count}</span>;
};

export default Counter;
