import React from "react";
import Header from "../components/Header";
import Button from "../components/buttons/Button";

const PageThree = () => (
  <section className="page page-three detail-page">
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
        <Button linkName="Go to page one" linkTo="/One" />
        <Button linkName="Go to page Two" linkTo="/Two" />
      </div>
    </article>

  </section>
);


export default PageThree;