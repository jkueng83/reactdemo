import React, { Component } from "react";

import styles from "./Button.module.css";

export default class Button extends Component {
  render() {
    return <button className={styles.mybutton}>Sender</button>;
  }
}
