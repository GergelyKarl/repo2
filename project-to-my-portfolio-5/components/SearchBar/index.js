import styles from "./Search.module.css";
import React, { useState, useRef } from "react";

const SearchBar = ({ ...rest }) => {
  return (
    <div>
      <input {...rest} />
    </div>
  );
};

export default SearchBar;
