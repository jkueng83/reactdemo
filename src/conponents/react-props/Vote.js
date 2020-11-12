import React, { Component } from 'react';
import styles from './Vote.module.css';

 class Vote extends Component{
     state = {  }
    render(){
        return(
            <div className={styles.card}>
                <h1>{this.props.candidate}</h1>
                <h3>{this.props.address}</h3>
                <h2>2</h2>
            </div>
        )
    }

}

export default Vote;