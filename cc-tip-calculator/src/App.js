import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [display, setDisplay] = useState(false);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function handleBill(e) {
    setBill(e.target.value);
    if (bill < 0) setDisplay(false);
    if (bill > 0) setDisplay(true);
  }

  function handleTip(id, tip) {
    if (id === 1) setTip1(tip);
    if (id === 2) setTip2(tip);
  }

  function handleReset() {
    setBill(0);
    setDisplay(false);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} onBill={handleBill} />
      <Percentage id={1} onTip={handleTip}>
        How did you like the service?
      </Percentage>
      <Percentage id={2} onTip={handleTip}>
        How did your friend like the service?
      </Percentage>
      <Total bill={bill} display={display} tip1={tip1} tip2={tip2} />
      <Reset display={display} onReset={handleReset} />
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="number" value={bill} onChange={onBill}></input>
    </div>
  );
}

function Percentage({ id, tip, onTip, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => onTip(id, e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, display, tip1, tip2 }) {
  const totalTips = ((Number(tip1) + Number(tip2)) / 2 / 100) * bill;
  console.log(totalTips);
  return (
    display && (
      <h1>
        You pay ${bill} (${bill} + ${totalTips} tip)
      </h1>
    )
  );
}

function Reset({ display, onReset }) {
  return display && <button onClick={onReset}>Reset</button>;
}

export default App;
