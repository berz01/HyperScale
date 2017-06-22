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
      pendingActions: this.props.pendingActions,
      feedItems: this.getFeedActions(),
      name: this.props.pendingActions[0].name
    }
  }

  getFeedActions(){
      return [{
        type: "Call"
      },
      {
        type: "Email"
      },
      {
        type: "Email"
      },
      {
        type: "Note"
      },
      {
        type: "Note"
      },
      {
        type: "Call"
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

  getFeedActions2(){
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

  getFeedActions3(){
      return [{
        type: "Text"
      },
      {
        type: "Email"
      },
      {
        type: "Text"
      },
      {
        type: "Email"
      },
      {
        type: "Call"
      },
      {
        type: "Call"
      },
      {
        type: "Call"
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

  addNewFeedAction(type){
    var feedItems = this.state.feedItems;
    feedItems.unshift({
      type: type
    })

    this.setState(prevState => ({
      feedItems: feedItems
    }))
  };

  changeFeedClient(i){
    var feedItems = {};

    if(!(i % 1)) feedItems =  this.getFeedActions();
    if(!(i % 2)) feedItems =  this.getFeedActions2();
    if(!(i % 3)) feedItems =  this.getFeedActions3();

    var newName = this.state.pendingActions[i].name;

    this.setState( prevState => ({
      name: newName,
      feedItems: feedItems
    }));
    console.log("FeedItems", feedItems);

    console.log("STATE", this.state);
  };

  render() {
    return (
      <div className="page-content">
          {/* BEGIN PAGE HEAD*/}
          <div className="page-head row">
              {/* BEGIN PAGE TITLE */}
              <div className="col-xs-5">
                <div className="page-title">

                    <h1><img src="../assets/img/rocket-img.jpg" className="rocket-reach" alt="RocketReach" height="75" width="75"/> RocketReach    <small>: outbound sales automation</small> </h1>
                </div>
              </div>
              <div className="col-xs-7">
                <div className="action-row">
                  <a onClick={(e) => this.addNewFeedAction("Call")} className="btn btn-lg default blue space"> Call <i className="fa fa-phone-square"></i></a>
                  <a onClick={(e) => this.addNewFeedAction("Text")}  className="btn btn-lg default red space"> Text <i className="fa fa-comments"></i></a>
                  <a onClick={(e) => this.addNewFeedAction("Email")}  className="btn btn-lg default green space"> Email <i className="fa fa-envelope-o"></i></a>
                  <a onClick={(e) => this.addNewFeedAction("Note")}  className="btn btn-lg default purple space"> Note <i className="fa fa-user"></i></a>
                </div>
              </div>
              {/* END PAGE TITLE */}
          </div>
          {/* END PAGE HEAD*/}
          {/* BEGIN PAGE BASE CONTENT */}
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-lg-6 col-xs-12 col-sm-12">
              <ConquerBench title="Workbench" handleSeeFeed={this.changeFeedClient.bind(this)} completedActions={this.state.completedActions} pendingActions={this.state.pendingActions} />
            </div>
            <div className="col-lg-6 col-xs-12 col-sm-12">
              <div className="row">
                <Feed name={this.state.name} feedItems={this.state.feedItems} />
              </div>
            </div>
          {/* END PAGE BASE CONTENT */}
          </div>
      </div>
    );
  }
}
