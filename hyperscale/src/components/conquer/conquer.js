import React, { Component } from 'react';
import './conquer.css';

export default class Conquer extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter:0,
      pendingActions: this.props.pendingActions,
      completedActions: this.props.completedActions
    };
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

  componentWillReceiveProps(props){
      this.setState({
        counter: 0,
        pendingActions: props.pendingActions,
        completedActions: props.completedActions
      })
  };

  generateAction(action){
    var i = this.state.counter++;
    if(action != undefined){
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
                            <button type="button" onClick={(e) => {this.props.addPendingAction(this.state.pendingActions[i]); this.props.dismissAction(i)}} className="btn btn-outline green btn-sm">Add</button>
                            <button type="button" onClick={(e) => this.props.dismissAction(i)} className="btn btn-outline red btn-sm">Dismiss</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    } else {
      return (<div></div>);
    }
  }

  render() {
    this.state.counter = 0;
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
                              {this.generateAction(this.state.pendingActions[0])}
                              {this.generateAction(this.state.pendingActions[1])}
                              {this.generateAction(this.state.pendingActions[2])}
                              {this.generateAction(this.state.pendingActions[3])}
                              {this.generateAction(this.state.pendingActions[4])}
                              {this.generateAction(this.state.pendingActions[5])}
                              {this.generateAction(this.state.pendingActions[6])}
                              {this.generateAction(this.state.pendingActions[7])}
                              {this.generateAction(this.state.pendingActions[8])}
                          </div>
                          {/* END: Actions */}
                      </div>
                      <div className="tab-pane" id="tab_actions_completed">
                          {/* BEGIN:Completed*/}
                          <div className="mt-actions">
                            {this.generateAction(this.state.completedActions[0])}
                            {this.generateAction(this.state.completedActions[1])}
                            {this.generateAction(this.state.completedActions[2])}
                            {this.generateAction(this.state.completedActions[3])}
                            {this.generateAction(this.state.completedActions[4])}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
