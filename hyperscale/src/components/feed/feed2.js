import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './feed.css';

let styles = {
  noHeight:0
}

let data = {
    user: {
      name: "Taylor Ereio"
    },
    stats: {
      calls: 4,
      texts: 5,
      emails: 6,
      notes: 2
    },
    feed: [{
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
    }]
}

export default class Feed extends Component {

  generateIcon(type){
    var icon = "fa fa-question";

    switch(type){
      case "Call":
        icon = "icon-docs font-red-intense"
        break;
      case "Text":
        icon = "icon-user-following font-green-haze"
        break;
      case "Email":
        icon = "fa fa-envelope fa-lg"
        break;
      case "Note":
        icon = "fa fa-sticky-note fa-lg"
        break;
    }

    return icon;
  }

  generateFeedItem(item){
    return (
      <li className="mt-list-item">
          <div className="list-todo-icon bg-white font-blue-steel">
              <i className={this.generateIcon(item.type)}></i>
          </div>
          <div className="list-todo-item grey">
              <a className="list-toggle-container font-white collapsed" data-toggle="collapse" href="#task-1-2" aria-expanded="false">
                  <div className="list-toggle done uppercase">
                      <div className="list-toggle-title bold">{item.type}</div>
                      <div className="badge badge-default pull-right bold"><i className={this.generateIcon(item.type)}></i></div>
                  </div>
              </a>
              <div className="task-list panel-collapse collapse" id="task-1-2" aria-expanded="false">
                  <ul>
                      <li className="task-list-item done">
                          <div className="task-icon">
                              <a href="javascript:;">
                                  <i className={this.generateIcon(item.type)}></i>
                              </a>
                          </div>
                          <div className="task-content">
                              <h4 className="uppercase bold">
                                  <a href="javascript:;">First Info Row</a>
                              </h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                          </div>
                      </li>
                  </ul>
                  <div className="task-footer bg-grey">
                      <div className="row">
                          <div className="col-xs-6">
                              <a className="task-trash" href="javascript:;">
                                  <i className="fa fa-trash"></i>
                              </a>
                          </div>
                          <div className="col-xs-6">
                              <a className="task-add" href="javascript:;">
                                  <i className="fa fa-plus"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </li>
    );

  };

  generateFeed(feedItems){
    const feed = feedItems.map((item) =>
      <li className="mt-list-item">
          <div className="list-todo-icon bg-white font-blue-steel">
              <i className={this.generateIcon(item.type)}></i>
          </div>
          <div className="list-todo-item grey">
              <a className="list-toggle-container font-white collapsed" data-toggle="collapse" href="#task-1-2" aria-expanded="false">
                  <div className="list-toggle done uppercase">
                      <div className="list-toggle-title bold">{item.type}</div>
                      <div className="badge badge-default pull-right bold"><i className={this.generateIcon(item.type)}></i></div>
                  </div>
              </a>
              <div className="task-list panel-collapse collapse" id="task-1-2" aria-expanded="false">
                  <ul>
                      <li className="task-list-item done">
                          <div className="task-icon">
                              <a href="javascript:;">
                                  <i className={this.generateIcon(item.type)}></i>
                              </a>
                          </div>
                          <div className="task-content">
                              <h4 className="uppercase bold">
                                  <a href="javascript:;">First Info Row</a>
                              </h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                          </div>
                      </li>
                  </ul>
                  <div className="task-footer bg-grey">
                      <div className="row">
                          <div className="col-xs-6">
                              <a className="task-trash" href="javascript:;">
                                  <i className="fa fa-trash"></i>
                              </a>
                          </div>
                          <div className="col-xs-6">
                              <a className="task-add" href="javascript:;">
                                  <i className="fa fa-plus"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </li>
    );
    ReactDOM.render(
    {feed},
    document.getElementById('feedContainer')
    );
  }

  render() {
    return (
          <div className="portlet light portlet-fit bordered">
              <div className="portlet-title">
                  <div className="caption">
                      <i className=" icon-feed font-green"></i>
                      <span className="caption-subject font-green bold uppercase">ACTIVITY FEED</span>
                      <div className="caption-desc font-grey-cascade"> Most recent monthly interactions with this client</div>
                  </div>
              </div>
              <div className="portlet-body">
                  <div className="mt-element-list">
                      <div className="mt-list-head list-todo red">
                          <div className="list-head-title-container">
                                <h3 className="list-title">{data.user.name}<i className="fa fa-phone"></i>      {data.stats.calls}   <i className="fa fa-comment"></i>   {data.stats.texts}   <i className="fa fa-envelope"></i>    {data.stats.emails}   <i className="fa fa-sticky-note"></i>       {data.stats.notes}      </h3>
                          </div>
                          <a href="javascript:;">
                              <div className="list-count pull-right red-mint">
                                  <i className="fa fa-user"></i>
                              </div>
                          </a>
                      </div>
                      <div className="mt-list-container list-todo">
                          <div className="list-todo-line red"></div>
                          <ul id="feedContainer">
                              {this.generateFeedItem(data.feed[0])}
                              {this.generateFeedItem(data.feed[1])}
                              {this.generateFeedItem(data.feed[2])}
                              {this.generateFeedItem(data.feed[3])}
                              {this.generateFeedItem(data.feed[4])}
                              {this.generateFeedItem(data.feed[5])}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
