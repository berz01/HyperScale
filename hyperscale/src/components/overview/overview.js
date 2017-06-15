import React, { Component } from 'react';
import './overview.css';

import ConquerBench from '../conquer/conquer-bench';
import Feed from '../feed/feed';

export default class Overview extends Component {
  constructor(props){
    super(props);

    this.addNewFeedAction = this.addNewFeedAction.bind(this);

    this.state = {
      completedActions: this.getCompletedActions(),
      pendingActions: this.getPendingActions(),
      feedItems: this.getFeedActions()
    }
  }

  getFeedActions(){
      return [{
        type: "Call"
      },
      {
        type: "Text"
      },
      {
        type: "Text"
      },
      {
        type: "Email"
      },
      {
        type: "Note"
      },
      {
        type: "Email"
      }];
  };

  // Existing, Internet Lead, Potential, New
  getCompletedActions(){
    return [{
        name: "Jan Kim",
        status: "Active",
        lastAction: "Call",
        type: "Existing"
      }, {
        name: "Jeanette Marvin",
        status: "Active",
        lastAction: "Text",
        type: "Existing"
      }, {
        name: "Quidel Ted",
        status: "Active",
        lastAction: "Email",
        type: "Existing"
      }, {
        name: "Alec Ulick",
        status: "Active",
        lastAction: "Email",
        type: "Existing"
      }, {
        name: "Taylor Ereio",
        status: "Active",
        lastAction: "Call",
        type: "Existing"
      }
    ];
  };

  getPendingActions(){
    return [{
        name: "Goronwy Makar",
        status: "Active",
        lastAction: "Call",
        type: "Existing"
      }, {
        name: "Jeanette Marvin",
        status: "Active",
        lastAction: "Text",
        type: "Existing"
      }, {
        name: "Quidel Ted",
        status: "Active",
        lastAction: "Email",
        type: "Existing"
      }, {
        name: "Alec Ulick",
        status: "Active",
        lastAction: "Email",
        type: "Existing"
      }, {
        name: "Taylor Ereio",
        status: "Active",
        lastAction: "Call",
        type: "Existing"
      }, {
        name: "Shannon Veloz",
        status: "Active",
        lastAction: "Note",
        type: "Existing"
      },
      {
        name: "Sara Bealer",
        status: "Active",
        lastAction: "Text",
        type: "Existing"
      },
      {
        name: "Patrick Stevenson",
        status: "Active",
        lastAction: "Text",
        type: "Existing"
      },
      {
        name: "Stephanie Moore",
        status: "Active",
        lastAction: "Call",
        type: "Existing"
      },
      {
        name: "Nicholas Raasch",
        status: "Active",
        lastAction: "Note",
        type: "Existing"
      }
    ];
  }

  addNewFeedAction(type){
    var feedItems = this.state.feedItems;
    feedItems.push({
      type: "Call"
    })

    console.log(this.state.feedItems);
    this.setState(prevState => ({
      feedItems: feedItems
    }))
  };

  render() {
    return (
      <div className="page-content">
          {/* BEGIN PAGE HEAD*/}
          <div className="page-head row">
              {/* BEGIN PAGE TITLE */}
              <div className="col-xs-6">
                <div className="page-title">
                    <h1>Overview    <small>your daily todo</small> </h1>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="action-row">
                  <a onClick={(e) => this.addNewFeedAction(e)} className="btn btn-lg default blue space"> Call <i className="fa fa-user"></i></a>
                  <a onClick={(e) => this.addNewFeedAction(e)}  className="btn btn-lg default red space"> Text <i className="fa fa-user"></i></a>
                  <a onClick={(e) => this.addNewFeedAction(e)}  className="btn btn-lg default green space"> Email <i className="fa fa-user"></i></a>
                  <a onClick={(e) => this.addNewFeedAction(e)}  className="btn btn-lg default purple space"> Note <i className="fa fa-user"></i></a>
                </div>
              </div>
              {/* END PAGE TITLE */}
          </div>
          {/* END PAGE HEAD*/}
          {/* BEGIN PAGE BASE CONTENT */}
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-lg-6 col-xs-12 col-sm-12">
              <ConquerBench completedActions={this.state.completedActions} pendingActions={this.state.pendingActions} />
            </div>
            <div className="col-lg-6 col-xs-12 col-sm-12">
              <div className="row">
                <Feed feedItems={this.state.feedItems} />
              </div>
            </div>
          {/* END PAGE BASE CONTENT */}
          </div>
      </div>
    );
  }
}
