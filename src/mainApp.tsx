import React from "react";
import "./main.scss";

class Counter extends React.Component<{}, { count: number }> {
  private readonly limit: 100 = 100;
  state = { count: 0 };

  plusCount() {
    return this.setState({
      count: ++this.state.count,
    });
  }

  minusCount() {
    return this.setState({
      count: --this.state.count,
    });
  }

  plusTenCount() {
    return this.setState({
      count: (this.state.count += 10),
    });
  }

  minusTenCount() {
    return this.setState({
      count: (this.state.count -= 10),
    });
  }

  clear() {
    return this.setState({
      count: (this.state.count = 0),
    });
  }

  render(): React.ReactNode {
    return (
      <div className="appWrapper">
        <section className="mainContainer">
          <div className="number">{this.state.count}</div>
          <section className="buttons">
            <button
              className="minusNumber"
              onClick={(e) => {
                this.minusCount();
              }}
              disabled={this.state.count <= 0}
            >
              -
            </button>
            <button
              className="clear"
              onClick={(e) => {
                this.clear();
              }}
            >
              Clear
            </button>
            <button
              className="plusNumber"
              onClick={(e) => {
                this.plusCount();
              }}
              disabled={this.state.count >= this.limit}
            >
              +
            </button>
          </section>
          <section className="aditionalButtons">
            <button
              className="minusTen"
              onClick={(e) => {
                this.minusTenCount();
              }}
              disabled={this.state.count <= 0 + 10}
            >
              - 10
            </button>
            <button
              className="plusTen"
              onClick={(e) => {
                this.plusTenCount();
              }}
              disabled={this.state.count >= 100 - 10}
            >
              + 10
            </button>
          </section>
        </section>
      </div>
    );
  }
}

export default Counter;
