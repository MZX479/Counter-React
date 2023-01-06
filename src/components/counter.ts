import { useState } from "react";

const Сount = () => {
  let [number, setNumber] = useState(0);

  const plusNumber = () => {
    setNumber(++number);
  };

  const minusNumber = () => {
    setNumber(--number);
  };

  const clear = () => {
    setNumber(0);
  };

  const data = {
    number,
    plusNumber,
    minusNumber,
    clear,
  };

  return data;
};

export default Сount;
