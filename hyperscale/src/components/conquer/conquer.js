import React, { Component } from 'react';
import './conquer.css';


// Existing, Internet Lead, Potential, New
var pendingActions = [];

var completedActions = [
  {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Call",
    type: "Existing"
  }, {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Text",
    type: "Existing"
  }, {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Email",
    type: "Existing"
  }, {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Email",
    type: "Existing"
  }, {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Call",
    type: "Existing"
  }, {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Note",
    type: "Existing"
  },
  {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Text",
    type: "Existing"
  },
  {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Text",
    type: "Existing"
  },
  {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Call",
    type: "Existing"
  },
  {
    name: "Taylor Ereio",
    status: "Active",
    lastAction: "Note",
    type: "Existing"
  }
];
export default class Feed extends Component {

  generateIcon(type){
    var icon = "fa fa-question";

    switch(type){
      case "Call":
        icon = "icon-call-in"
        break;
      case "Text":
        icon = "icon-bubbles"
        break;
      case "Email":
        icon = "icon-email"
        break;
      case "Note":
        icon = "icon-notes"
        break;
    }

    return icon;
  }


  generateAction(action){
    return (
      <div className="mt-action">
          <div className="mt-action-body">
              <div className="mt-action-row">
                  <div className="mt-action-info ">
                      <div className="mt-action-icon ">
                          <i className={this.generateIcon(action.lastAction)}></i>
                      </div>
                      <div className="mt-action-details ">
                          <span className="mt-action-author">{action.name}</span>
                          <p className="mt-action-desc">{action.status}</p>
                      </div>
                  </div>
                  <div className="mt-action-buttons ">
                      <div className="btn-group btn-group-circle">
                          <button type="button" className="btn btn-outline green btn-sm">Add</button>
                          <button type="button" className="btn btn-outline red btn-sm">Dismiss</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  listPendingActions(actions){
      var output = "";
      for(var i=0; i < actions.length; i++){

      }
  }

  listCompletedActions(){

  }

  render() {
    return (
          <div className="portlet light bordered">
              <div className="portlet-title tabbable-line">
                  <div className="caption">
                      <i className=" icon-social-twitter font-dark hide"></i>
                      <span className="caption-subject font-dark bold uppercase">Quick Actions</span>
                  </div>
                  <ul className="nav nav-tabs">
                      <li className="active">
                          <a href="#tab_actions_pending" data-toggle="tab"> Pending </a>
                      </li>
                      <li>
                          <a href="#tab_actions_completed" data-toggle="tab"> Completed </a>
                      </li>
                  </ul>
              </div>
              <div className="portlet-body">
                  <div className="tab-content">
                      <div className="tab-pane active" id="tab_actions_pending">
                          {/* BEGIN: Actions */}
                          <div className="mt-actions">
                            {}
                              {this.generateAction(completedActions[0])}
                              {this.generateAction(completedActions[1])}
                              {this.generateAction(completedActions[2])}
                              {this.generateAction(completedActions[3])}
                              {this.generateAction(completedActions[4])}
                              {this.generateAction(completedActions[5])}
                              {this.generateAction(completedActions[6])}
                              {this.generateAction(completedActions[7])}
                              {this.generateAction(completedActions[8])}
                          </div>
                          {/* END: Actions */}
                      </div>
                      <div className="tab-pane" id="tab_actions_completed">
                          {/* BEGIN:Completed*/}
                          <div className="mt-actions">
                              <div className="mt-action">
                                  <div className="mt-action-img">
                                      <img src="../assets/pages/media/users/avatar1.jpg" /> </div>
                                  <div className="mt-action-body">
                                      <div className="mt-action-row">
                                          <div className="mt-action-info ">
                                              <div className="mt-action-icon ">
                                                  <i className="icon-action-redo"></i>
                                              </div>
                                              <div className="mt-action-details ">
                                                  <span className="mt-action-author">Frank Cameron</span>
                                                  <p className="mt-action-desc">Lorem Ipsum is simply dummy</p>
                                              </div>
                                          </div>
                                          <div className="mt-action-datetime ">
                                              <span className="mt-action-date">3 jun</span>
                                              <span className="mt-action-dot bg-red"></span>
                                              <span className="mt=action-time">9:30-13:00</span>
                                          </div>
                                          <div className="mt-action-buttons ">
                                              <div className="btn-group btn-group-circle">
                                                  <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                  <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-action">
                                  <div className="mt-action-img">
                                      <img src="../assets/pages/media/users/avatar8.jpg" /> </div>
                                  <div className="mt-action-body">
                                      <div className="mt-action-row">
                                          <div className="mt-action-info ">
                                              <div className="mt-action-icon ">
                                                  <i className="icon-cup"></i>
                                              </div>
                                              <div className="mt-action-details ">
                                                  <span className="mt-action-author">Ella Davidson </span>
                                                  <p className="mt-action-desc">Text of the printing and typesetting industry</p>
                                              </div>
                                          </div>
                                          <div className="mt-action-datetime ">
                                              <span className="mt-action-date">3 jun</span>
                                              <span className="mt-action-dot bg-green"></span>
                                              <span className="mt=action-time">9:30-13:00</span>
                                          </div>
                                          <div className="mt-action-buttons">
                                              <div className="btn-group btn-group-circle">
                                                  <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                  <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-action">
                                  <div className="mt-action-img">
                                      <img src="../assets/pages/media/users/avatar5.jpg" /> </div>
                                  <div className="mt-action-body">
                                      <div className="mt-action-row">
                                          <div className="mt-action-info ">
                                              <div className="mt-action-icon ">
                                                  <i className=" icon-graduation"></i>
                                              </div>
                                              <div className="mt-action-details ">
                                                  <span className="mt-action-author">Jason Dickens </span>
                                                  <p className="mt-action-desc">Dummy text of the printing and typesetting industry</p>
                                              </div>
                                          </div>
                                          <div className="mt-action-datetime ">
                                              <span className="mt-action-date">3 jun</span>
                                              <span className="mt-action-dot bg-red"></span>
                                              <span className="mt=action-time">9:30-13:00</span>
                                          </div>
                                          <div className="mt-action-buttons ">
                                              <div className="btn-group btn-group-circle">
                                                  <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                  <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-action">
                                  <div className="mt-action-img">
                                      <img src="../assets/pages/media/users/avatar2.jpg" /> </div>
                                  <div className="mt-action-body">
                                      <div className="mt-action-row">
                                          <div className="mt-action-info ">
                                              <div className="mt-action-icon ">
                                                  <i className="icon-badge"></i>
                                              </div>
                                              <div className="mt-action-details ">
                                                  <span className="mt-action-author">Jan Kim</span>
                                                  <p className="mt-action-desc">Lorem Ipsum is simply dummy</p>
                                              </div>
                                          </div>
                                          <div className="mt-action-datetime ">
                                              <span className="mt-action-date">3 jun</span>
                                              <span className="mt-action-dot bg-green"></span>
                                              <span className="mt=action-time">9:30-13:00</span>
                                          </div>
                                          <div className="mt-action-buttons ">
                                              <div className="btn-group btn-group-circle">
                                                  <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                  <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/* END: Completed */}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
