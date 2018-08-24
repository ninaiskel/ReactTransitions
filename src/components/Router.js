import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import PageOne from '../pages/pageOne';
import PageTwo from '../pages/pageTwo';
import PageThree from '../pages/pageThree';
import NotFound from '../pages/notFound';
// import PageTransition from 'react-router-page-transition';
 import { TransitionGroup, CSSTransition}from 'react-transition-group';


const Router = () => (
  <BrowserRouter>
    <Route render={( { location }) => (
      <TransitionGroup>
        <CSSTransition 
          key={ location.key }
          timeout={400}
          classNames='slide'>
          
          <Switch location={location}>
              <Route exact path="/" component={App} />
              <Route path="/One" component={PageOne} />
              <Route path="/Two" component={PageTwo} />
              <Route path="/Three" component={PageThree} />
              <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup> 
    )}/>
    
  </BrowserRouter>  
);

export default Router;
              // <Route path="/BigImage" component={BigImage} />
