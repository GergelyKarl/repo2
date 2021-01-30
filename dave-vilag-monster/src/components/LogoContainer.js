import React from "react";
import Logo from "../assets/logo.svg";

const LogoContainer = () => {
  return (
    <div className="logo__container">
      <img src={Logo} alt="Logo" className="logo__img" />
      <h1>Monsters</h1>
    </div>
  );
};

export default LogoContainer;
