import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './button.css';

const Button = ({ linkTo, linkName }) => (
  <Link to={ linkTo } className="button">
    { linkName }
  </Link> 
);

Button.propTypes = {
  linkTo: PropTypes.string,
  linkName: PropTypes.string
}

export default Button;