import React, { useState } from "react";
import "./ToggerStyle.css";

const Togger = () => {
  const [on, setOn] = useState(false);
  const handleTogger = () => {
    setOn((on) => !on);
    console.log(on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleTogger}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
        {/* <h1>{on}</h1> */}
        {/*  <button onClick={Increase}>handleIncrease { on ? "On" : "Off"}</button> */}
      </div>
      <div className="toggle-control">
        <div>{on ? "On" : "Off"}</div>
        <div className="toggle-on" onClick={handleTogger}>
          On
        </div>
        <div className="toggle-off" onClick={handleTogger}>
          Off
        </div>
      </div>
    </div>
  );
};

export default Togger;
