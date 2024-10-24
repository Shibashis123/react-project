import React, { useState } from "react";
import "./App.css";
function App() {
  const [Counter, setCounter] = useState(15);
  //let Counter = 15;

  const addValue = () => {
    // Counter = Counter + 1;
    console.log("clicked", Counter);
    setCounter(Counter + 1);
  };
  const removeValue = () => {
    //Counter = Counter - 1;
    console.log("Clicked", Counter);
    setCounter(Counter - 1);

    if (Counter > 25) {
      alert("please provide proper value to remove ");
    } else {
      alert("shiba will be successfull");
    }
    if (Counter < 15) {
      alert("shiba is good at coding");
    } else {
      alert("please provide proper value to remove ");
    }
  };
  return (
    <>
      <h1>shiba will be successfull </h1>
      <h2>one more thing i have to master on this react </h2>
      <h2>Counter value :{Counter} </h2>
      <h3>shiba is a good programmer</h3>

      <button id="btn" onClick={addValue}>
        Add value{Counter}
      </button>
      <br />
      <button id="btn" onClick={removeValue}>
        remove value{Counter}
      </button>
      <p className="footer">
        shiba is in under pressure but he will be successfull . Jai
        bajrangbali....
      </p>
    </>
  );
}

export default App;
