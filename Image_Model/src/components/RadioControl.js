import React from "react";

import styles from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label1}<input type="radio" onClick={()=>props.setVisible(true)}/>{props.label2}<input type="radio" onClick={()=>props.setVisible(false)}/>
    </div>
  );
}

export default InputControl;