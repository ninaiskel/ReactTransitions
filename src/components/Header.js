import React from "react";
import ButtonGoHome from "../components/buttons/ButtonGoHome";
import './header.css';


const Header = () => (
  <header className="header">
    <ButtonGoHome />
    <div className="top-bar"></div>
  </header>
);


export default Header;