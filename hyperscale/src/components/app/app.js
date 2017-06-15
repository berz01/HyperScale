import React, { Component } from 'react';
import './app.css';

import Nav from '../nav/nav';
import Sidebar from '../sidebar/sidebar';

import Overview from '../overview/overview';
import Opportunity from '../opportunity/opportunity';
import Retention from '../retention/retention';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class App extends Component {
  constructor() {
      super();
      this.state = {
        test:"123"
      }
  };

  render() {
    return (
    <Router>
      <div className="App">
        <div className="page-container-bg-solid page-header-fixed page-sidebar-closed-hide-logo">
          <Nav />
          <div className="clearfix"> </div>
          <div className="page-container">
            <Sidebar />
            <div className="page-content-wrapper">
              <Route exact path="/" component={Overview} />
              <Route path="/retention" component={Retention} />
              <Route path="/opportunity" component={Opportunity} />
            </div>
          </div>
        </div>
      </div>
    </Router>
    );
  };
};
