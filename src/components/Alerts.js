import styles from "../styles/Alerts.module.css";
import css from "classnames";
import React from "react";
import { useState } from "react";

export default function Alerts({ type, message }) {
  const [isShown, setIsShown] = useState(true);

  
//    This Handles and closes the alert message
  
  const handleClose = (e) => {
    e.preventDefault();
    setIsShown(false);
  };

  return (
    <div
      className={css(styles.alert, styles[type], !isShown && styles.hide)}
    >
      <span className={styles.closebtn} onClick={handleClose}>
        &times;
      </span>
      {message}
    </div>
  );
}
