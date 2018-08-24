import React from "react";
import { Link } from 'react-router-dom';
import './bigImage.css'

const BigImage = () => (
  <div className="page ">
    <div className="close">
      <Link to="/Two">
        <svg 
          width="12" 
          height="12" 
          className="close-icon" 
          viewPort="0 0 12 12" 
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="11" 
                x2="11" y2="1" 
                stroke="grey" 
                stroke-width="2"/>
          <line x1="1" y1="1" 
                x2="11" y2="11" 
                stroke="grey" 
                stroke-width="2"/>
        </svg>
      </Link>
    </div>
    <figure className="img">
      
    </figure>
  </div>
);

export default BigImage;