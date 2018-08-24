import React from "react";
import Header from "../components/Header";
import Button from "../components/buttons/Button";
import './pageTwo.css'
import './commons.css'
import '../components/transitions/transition.css'

const PageTwo = () => (
  <section className="page page-two detail-page">
  <Header />
  <article className="content-center">
    <div className="content-text content-text-center">
      <div className="content-text-line title"></div>
      <div className="content-text-line"></div>
      <div className="content-text-line"></div>
      <div className="content-text-line"></div>
      <div className="content-text-line"></div>
    </div>
      <figure className="content-image-center">
        
      </figure>
    <div className="wrap-button">
      <Button linkName="Go to page three" linkTo="/Three" />
    </div>
  </article>

</section>
);


export default PageTwo;