import React, { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.value &&
      setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        type="text"
        placeholder="Add meg a neved"
        maxLength={10}
        className="start__input"
        ref={inputRef}
      />
      <button
        className="start__button"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  );
}
