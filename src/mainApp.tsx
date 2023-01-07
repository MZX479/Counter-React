import "./App.css";
import Сount from "./components/counter";

const Counter = () => {
  const limit: 100 = 100;
  const countData = Сount();
  return (
    <div className="appWrapper">
      <section className="mainContainer">
        <div className="number">{countData.number}</div>
        <section className="buttons">
          <button
            className="minusNumber"
            onClick={countData.minusNumber}
            disabled={countData.number <= 0}
          >
            -
          </button>
          <button className="clear" onClick={countData.clear}>
            Clear
          </button>
          <button
            className="plusNumber"
            onClick={countData.plusNumber}
            disabled={countData.number >= limit}
          >
            +
          </button>
        </section>
        <section className="aditionalButtons">
          <button
            className="minusTen"
            onClick={countData.minusTen}
            disabled={countData.number <= 0 + 10}
          >
            - 10
          </button>
          <button
            className="plusTen"
            onClick={countData.plusTen}
            disabled={countData.number >= 100 - 10}
          >
            + 10
          </button>
        </section>
      </section>
    </div>
  );
};

export default Counter;
