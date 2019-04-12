import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "../../../stores/actions";

export interface ICounterInterface {
  dispatch: any;
  count: number;
}

class Counter extends Component<ICounterInterface> {
  public increment = () => {
    this.props.dispatch(increment());
  }

  public decrement = () => {
    this.props.dispatch(decrement());
  }

  public reset = () => {
    this.props.dispatch(reset());
  }

  public render() {
    const { count } = this.props;
    return (
      <div>
        <style>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count }: ICounterInterface) => ({ count });
export default connect(mapStateToProps)(Counter);
