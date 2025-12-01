import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);

  const handlePlusOneBtn = () => {
    setNumber(number + 1);
  };
  const handleUserNumberBtn = () => {
    setNumber(number + Number(inputNumber));
  };

  const handleInputNumber = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <main>
      <h1>{number}</h1>
      <button onClick={handlePlusOneBtn}>+1</button>
      <br />
      <input
        type="number"
        placeholder="숫자만 적으세요"
        value={inputNumber}
        onChange={handleInputNumber}
      />
      <br />
      <button onClick={handleUserNumberBtn}>+ {inputNumber}</button>
    </main>
  );
}
