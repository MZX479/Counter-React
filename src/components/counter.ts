import { useState } from "react";

const Сount = () => {
  let [number, setNumber] = useState<number>(0);

  if (number < 0 || number > 100) {
    throw new Error("Unexpected number amount!");
  }

  const plusNumber = () => {
    return setNumber(++number);
  };

  const minusNumber = () => {
    return setNumber(--number);
  };

  const plusTen = () => {
    return setNumber((number += 10));
  };

  const minusTen = () => {
    return setNumber((number -= 10));
  };

  const clear = () => {
    return setNumber(0);
  };

  const data = {
    number,
    plusNumber,
    minusNumber,
    plusTen,
    minusTen,
    clear,
  };

  return data;
};

export default Сount;
