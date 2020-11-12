import React, { Component } from "react";
import styles from "./Vote.module.css";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      mouseOverCount: 0
    };
  }

  voted = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  mouseOver = () =>{
      this.setState({
          mouseOverCount : this.state.mouseOverCount + 1
      })
  }

  render() {
    return (
      <div onClick={this.voted} onMouseOver={this.mouseOver} className={styles.card}>
        <h1>{this.props.candidate}</h1>
        <h3>{this.props.address}</h3>
        <h2>{this.state.counter}</h2>
        <h3>{this.state.mouseOverCount}</h3>
      </div>
    );
  }
}

export default Vote;
