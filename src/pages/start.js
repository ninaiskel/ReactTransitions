import React from "react";
import { Link } from 'react-router-dom';
import ButtonCard from "../components/buttons/ButtonCard";
import './start.css';

const Start = () => (
      <section className="start">
        <h1>Hey! Choose a card</h1>
        <nav className="menu">
          <Link to="/One">
            <ButtonCard className="transition-item" cardName="One"/>
          </Link>
          <Link to="/Two">
            <ButtonCard className="transition-item" cardName="Two"/>
          </Link>
        <Link to="/Three">
          <ButtonCard className="transition-item" cardName="Three"/>
        </Link>
        </nav>
     </section>

);


export default Start;