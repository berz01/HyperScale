import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './feed.css';

let styles = {
  noHeight:0
}

let data = {
    stats: {
      calls: 4,
      texts: 1,
      emails: 3,
      notes: 1
    }
}

export default class Feed extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter:1,
      feedItems: this.props.feedItems
    };
  }

  componentWillReceiveProps(props){
      console.log(props.feedItems);
      this.setState({feedItems: props.feedItems})
  };

  // these are the icons on the side of the Activity Feed - currently blue

  generateIcon(type){
    var icon = "fa fa-question";

    switch(type){
      case "Call":
        icon = "icon-call-out simple-size-default font-blue-steel"
        break;
      case "Text":
        icon = "icon-bubbles simple-size-default font-red-steel"
        break;
      case "Email":
        icon = "icon-envelope-letter simple-size-default font-green-steel"
        break;
      case "Note":
        icon = "icon-notebook simple-size-default font-purple-medium"
        break;
    }

    return icon;
  }

  handleInput(){


  };

  generateCallTemplate(type, data){
    return (
      <div className="form-body">
        <div className="form-group">
            <label>Phone Number</label>
            <div className="input-group">
                <span className="input-group-addon">
                    <i className="fa fa-phone"></i>
                </span>
                <input type="text" className="form-control" placeholder="Phone Number" onChange={this.handleInput} value={data.phonenumber}/>
            </div>
        </div>
      </div>
    );
  };

  generateTextTemplate(type, data){
    return (
      <div className="form-body">
        <div className="form-group">
            <label>SMS</label>
            <div className="input-group">
                <span className="input-group-addon">
                    <i className="fa fa-comment"></i>
                </span>
                <input type="text" className="form-control" placeholder="Phone Number" onChange={this.handleInput} value={data.phonenumber}/> </div>
        </div>
        <div className="form-group">
            <div className="row">
              <label className="col-md-3 control-label">SMS Templates</label>
              <div className="col-md-9">
                  <select className="form-control">
                      <option>Hello Again!</option>
                      <option>Just Checking In</option>
                      <option>Lets Catch Up :)</option>
                        <option>SMS: Send Welcome</option>
                  </select>
              </div>
            </div>
        </div>
        <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows="3"></textarea>
        </div>
      </div>
    );
  };
  generateEmailTemplate(type, data){
      return (
        <div className="form-body">
          <div className="form-group">
              <label>Email Address</label>
              <div className="input-group">
                  <span className="input-group-addon">
                      <i className="fa fa-envelope"></i>
                  </span>
                  <input type="text" className="form-control" placeholder="Email Address" onChange={this.handleInput} value={data.email}/>
              </div>

          </div>
          <div className="form-group">
              <div className="row">
                <label className="col-md-3 control-label">Email Templates</label>
                <div className="col-md-9">
                    <select className="form-control">
                        <option>Hello Again!</option>
                        <option>Just Checking In</option>
                        <option>Lets Catch Up :)</option>
                        <option>SMS: Catch up</option>
                    </select>
                </div>
              </div>
          </div>
          <div className="form-group">
              <label>Contents</label>
              <textarea className="form-control" rows="3"></textarea>
          </div>
        </div>
      );
  };
  generateNoteTemplate(type, data){
    return (
      <div className="form-body">
        <div className="form-group">
            <label>Note</label>
            <textarea className="form-control" rows="3"></textarea>
        </div>
      </div>
    );
  };

  addFeedItem(type, item){
    switch(type){
      case "Call":
        return this.generateCallTemplate(type, item);
        break;
      case "Text":
        return this.generateTextTemplate(type, item);
        break;
      case "Email":
        return this.generateEmailTemplate(type, item);
        break;
      case "Note":
        return this.generateNoteTemplate(type, item);
        break;
    }
  };

  generateFeedItem(item){
    var href = "#task-" + this.state.counter + "-2";
    var id = "task-" + this.state.counter++ + "-2";
    item.phonenumber = "404-307-7465";
    item.email = "barrettdavis01@gmail.com";
    return (
      <li className="mt-list-item">
          <div className="list-todo-icon bg-white font-blue-steel">
              <i className={this.generateIcon(item.type)}></i>
          </div>
          <div className="list-todo-item grey-steel">
              <a className="list-toggle-container font-white collapsed" data-toggle="collapse" href={href} aria-expanded="false">
                  <div className="list-toggle done uppercase">
                      <div className="list-toggle-title bold">{item.type}</div>
                      <div className="badge badge-default pull-right bold"><i className={this.generateIcon(item.type)}></i></div>
                  </div>
              </a>
              <div className="task-list panel-collapse collapse" id={id} aria-expanded="false">
                  <ul>
                      <li className="task-list-item done">
                          <div className="task-icon">
                              <a href="javascript:;">
                                  <i className={this.generateIcon(item.type)}></i>
                              </a>
                          </div>
                          <div className="task-content">
                            {this.addFeedItem(item.type, item)}
                          </div>
                      </li>
                  </ul>
                  <div className="task-footer bg-grey-steel">
                      <div className="row">
                          <div className="col-xs-12">
                              <a className="task-add" href="javascript:;">
                                  <i className="fa fa-paper-plane fa-2x"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </li>
    );

  };

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
                                <h3 className="list-title">{this.props.name} <span className="icon-padding"><i className="fa fa-phone"></i>      {data.stats.calls}   <i className="fa fa-comment"></i>   {data.stats.texts}   <i className="fa fa-envelope"></i>    {data.stats.emails}   <i className="fa fa-sticky-note"></i>       {data.stats.notes}</span> </h3>
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
                              {this.generateFeedItem(this.state.feedItems[0])}
                              {this.generateFeedItem(this.state.feedItems[1])}
                              {this.generateFeedItem(this.state.feedItems[2])}
                              {this.generateFeedItem(this.state.feedItems[3])}
                              {this.generateFeedItem(this.state.feedItems[4])}
                              {this.generateFeedItem(this.state.feedItems[5])}
                              {this.generateFeedItem(this.state.feedItems[4])}
                              {this.generateFeedItem(this.state.feedItems[5])}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
