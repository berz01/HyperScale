import React, { Component } from 'react';
import './opportunity.css';

import Conquer from '../conquer/conquer';
import Profile from '../profile/profile';


// Internet Lead, Internet Lead, Potential, New
var completedActions = [
  {
    name: "Jan Kim",
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
    type: "Internet Lead"
  }, {
    name: "Alec Ulick",
    status: "Active",
    lastAction: "Email",
    type: "Internet Lead"
  }, {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Call",
    type: "Internet Lead"
  }
];

var pendingActions = [
  {
    name: "Tim Hightower",
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

export default class Opportunity extends Component {
  constructor(props){
    super(props);
    this.state = {
      pendingActions: pendingActions,
      completedActions: completedActions
    };
  } 

  dismissAction(i){
    var actions = this.state.pendingActions;
    console.log("I", i)
    actions.splice(i, 1);
    this.setState({
      pendingActions: actions
    });
  };

  render() {
    return (
      <div className="page-content">
          {/* BEGIN PAGE HEAD*/}
          <div className="page-head row">
              {/* BEGIN PAGE TITLE */}
              <div className="col-xs-6">
                <div className="page-title">
                    <h1>Opportunity    <small>find people in need</small> </h1>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="action-row">
                  <a href="javascript:;" className="btn btn-lg default blue space"> Call <i className="fa fa-user"></i></a>
                  <a href="javascript:;" className="btn btn-lg default red space"> Text <i className="fa fa-user"></i></a>
                  <a href="javascript:;" className="btn btn-lg default green space"> Email <i className="fa fa-user"></i></a>
                  <a href="javascript:;" className="btn btn-lg default purple space"> Note <i className="fa fa-user"></i></a>
                </div>
              </div>
              {/* END PAGE TITLE */}
          </div>
          {/* END PAGE HEAD*/}
          {/* BEGIN PAGE BASE CONTENT */}
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-lg-6 col-xs-12 col-sm-12">
              <Conquer title="Potential Clients"
                dismissAction={this.dismissAction.bind(this)}
                addPendingAction={this.props.addPendingAction}
                completedActions={this.state.completedActions}
                pendingActions={this.state.pendingActions} />
            </div>
            <div className="col-lg-6 col-xs-12 col-sm-12">
              <div className="row">
                <Profile />
              </div>
            </div>
          {/* END PAGE BASE CONTENT */}
          </div>
      </div>
    );
  }
}
