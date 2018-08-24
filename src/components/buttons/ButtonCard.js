import React from "react";
import PropTypes from 'prop-types';
import './buttonCard.css';

const ButtonCard = (props) => (
  <div className="card-button">
    <h3>{ props.cardName }</h3>
  </div>
);

ButtonCard.propTypes = {
  cardName: PropTypes.string
}

export default ButtonCard;