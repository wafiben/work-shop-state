import React, { Component } from "react";
import Home from "./Home";

export default class App extends Component {
  state = { count: 0, show: false };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decremtn = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
    console.log(this.state.show);
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decremtn}>-</button>
        <div>
          <button onClick={this.handleShow}>Show</button>
          {this.state.show ? <Home /> : "loading"}
        </div>
      </div>
    );
  }
}
