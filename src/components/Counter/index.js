import React, { useState } from "react"

function Counter() {
  //set use state to these variables
  const [seconds, setSeconds] = useState(0)

  //then destructuring the useState() variables 
  function startStopwatch() {
    //equal to the useState value of seconds === 0
    let updatedSeconds = seconds;
    setInterval(() => {
      updatedSeconds += 1;
      console.log(updatedSeconds);
      // this is what causes the component to rerender because set seconds is async, by passing state as an argument it cases the rerender
      setSeconds(updatedSeconds);
    }, 1000);
  }

return (
  <div>
    {seconds}
    <button onClick={startStopwatch} >Start</button>
  </div>
)
}

export default Counter;