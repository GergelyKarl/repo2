import styles from "./Search.module.css";
import React, { useState, useRef } from "react";


const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} {...rest} />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default SearchBar;
