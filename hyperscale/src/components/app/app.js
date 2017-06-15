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
        test:"123",
        pendingActions: this.initPendingActions()
      }
  };

  initPendingActions(){
    return [
      {
        name: "Mc.Test Hightower",
        status: "Active",
        lastAction: "Call",
        type: "Internet Lead"
      }, {
        name: "Jeanette Marvin",
        status: "Active",
        lastAction: "Text",
        type: "Internet Lead"
      }, {
        name: "Quidel Ted",
        status: "Active",
        lastAction: "Email",
        type: "Personal Contact"
      }, {
        name: "Alec Ulick",
        status: "Active",
        lastAction: "Email",
        type: "Internet Lead"
      }, {
        name: "Taylor Ereio",
        status: "Active",
        lastAction: "Call",
        type: "Personal Contact"
      }, {
        name: "Shannon Veloz",
        status: "Active",
        lastAction: "Note",
        type: "Internet Lead"
      },
      {
        name: "Sara Bealer",
        status: "Active",
        lastAction: "Text",
        type: "Internet Lead"
      },
      {
        name: "Patrick Stevenson",
        status: "Active",
        lastAction: "Text",
        type: "Internet Lead"
      },
      {
        name: "Stephanie Moore",
        status: "Active",
        lastAction: "Call",
        type: "Internet Lead"
      },
      {
        name: "Nicholas Raasch",
        status: "Active",
        lastAction: "Note",
        type: "Internet Lead"
      }
    ];
  }

  addPendingAction(action){
    var actions = this.state.pendingActions;
    console.log("testing pending actions", action)
    actions.unshift({
        name: action.name,
        status: action.status,
        lastAction:action.lastAction,
        type: action.type
    });

    this.setState(prevState => ({
      pendingActions: actions
    }))
  }

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
              <Route exact path="/" component={() => (<Overview pendingActions={this.state.pendingActions} />)} />
              <Route path="/retention" component={() => (<Retention addPendingAction={this.addPendingAction.bind(this)} />)} />
              <Route path="/opportunity" component={() => (<Opportunity addPendingAction={this.addPendingAction.bind(this)} />)}/>
            </div>
          </div>
        </div>
      </div>
    </Router>
    );
  };
};
