import React from "react";
import Header from "../components/Header";
import Button from "../components/buttons/Button";
import './commons.css'
import '../components/transitions/transition.css'


const PageOne = () => (
  <section className="page page-one detail-page">
    <Header />
    <article className="content">
      <div className="content-text content-text-center">
        <div className="content-text-line title"></div>
        <div className="content-text-line"></div>
        <div className="content-text-line"></div>
        <div className="content-text-line"></div>
        <div className="content-text-line"></div>
        <div className="content-text-line"></div>
        <div className="content-text-line"></div>
        <div className="content-text-line"></div>
      </div>
      <figure className="content-image">
        
      </figure>
    </article>
    <article className="content">
      <div className="content-text content-text-center">
        <div className="content-text-line"></div>
        <div className="content-text-line"></div>
      </div>
      <div className="wrap-button">
        <Button linkName="Go to page two" linkTo="/Two" />
      </div>
    </article>

  </section>
);


export default PageOne;