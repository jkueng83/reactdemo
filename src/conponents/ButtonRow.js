import { render } from "@testing-library/react";
import React ,  { Component } from "react";
import SuperButton from "./SuperButton";
import style from './ButtonRow.module.css';

export default class ButtonRow extends Component{
    render(){
        return(
        <div className={style.row} >
          <SuperButton/>
          <SuperButton/>
          <SuperButton/>          
      </div>
        )

    }
}