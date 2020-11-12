import React, { Component } from "react";
import stiles from './Card.module.css';

export default class Card extends Component {
  render() {
    return (
      <div className={stiles.card}>
        <img className={stiles.cardimage}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Jon Doe"
          
        />
        <div  className={stiles.textbox}>
        <div className={stiles.name} >John Doe</div>
        <div className={stiles.position} > Architect & Engineer </div>
        </div>
      </div>
    );
  }
}
