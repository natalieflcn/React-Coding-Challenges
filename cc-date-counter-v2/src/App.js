import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("June 30 2025");
  date.setDate(date.getDate() + count);

  // function handleRange(e) {
  //   if (e.target.value > step) {
  //     setStep((s) => s + 1);
  //   } else if (e.target.value < step) {
  //     setStep((s) => s - 1);
  //   }
  // }

  // function handleInput(e) {
  //   setCount(e.target.value);
  // }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0 && "Today is "}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

// Today is Mon June 28 2028
// 1 day from today is Tue June 29 2028
// 1 day ago is Sun June 27 2028

export default App;
