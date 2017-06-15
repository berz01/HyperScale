import React, { Component } from 'react';
import './conquer.css';

export default class ConquerBench extends Component {

  constructor(props){
    super(props);
    this.state = {
      completedActions: [],
      pendingActions: [],
      counter:0,
    }
    this.state.completedActions = this.props.completedActions;
    this.state.pendingActions = this.props.pendingActions;
  };

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
        icon = "icon-envelope"
        break;
      case "Note":
        icon = "icon-note"
        break;
    }

    return icon;
  }


  generateAction(action){
    var counter = this.state.counter++;

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
                  <div className="mt-action-datetime ">
                      <span className="mt-action-dot bg-red"></span>
                      <span className="mt=action-time">  {action.type}</span>
                  </div>
                  <div className="mt-action-buttons ">
                      <div className="btn-group btn-group-circle">
                          <button type="button" onClick={(e) => this.props.handleSeeFeed(counter)} className="btn btn-outline green btn-sm">See Feed</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  render() {
    return (
          <div className="portlet light bordered">
              <div className="portlet-title tabbable-line">
                  <div className="caption">
                      <i className=" icon-social-twitter font-dark hide"></i>
                      <span className="caption-subject font-dark bold uppercase">{this.props.title}</span>
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
                            {console.log(this.props)}
                              {this.generateAction(this.props.pendingActions[0])}
                              {this.generateAction(this.props.pendingActions[1])}
                              {this.generateAction(this.props.pendingActions[2])}
                              {this.generateAction(this.props.pendingActions[3])}
                              {this.generateAction(this.props.pendingActions[4])}
                              {this.generateAction(this.props.pendingActions[5])}
                              {this.generateAction(this.props.pendingActions[6])}
                              {this.generateAction(this.props.pendingActions[7])}
                              {this.generateAction(this.props.pendingActions[8])}
                          </div>
                          {/* END: Actions */}
                      </div>
                      <div className="tab-pane" id="tab_actions_completed">
                          {/* BEGIN:Completed*/}
                          <div className="mt-actions">
                            {this.generateAction(this.props.completedActions[0])}
                            {this.generateAction(this.props.completedActions[1])}
                            {this.generateAction(this.props.completedActions[2])}
                            {this.generateAction(this.props.completedActions[3])}
                            {this.generateAction(this.props.completedActions[4])}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
