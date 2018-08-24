import React from "react";
import { Link } from 'react-router-dom';
import './buttonGoHome.css';


const ButtonGoHome = () => (
  <Link to="/" className="button-home">
    Go to Home  
  </Link>
);

export default ButtonGoHome;