import React, { Component } from "react";

import styles from "./List.module.css";

export default class List extends Component {
  render() {
    return (

      <div>
        <ul>
          <li className={styles.listelement}>Coffee</li>
          <li className={styles.listelement}>Tea</li>
          <li className={styles.listelement}>Beer</li>
        </ul>
      </div>
    );
  }
}
