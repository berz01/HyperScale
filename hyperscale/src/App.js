import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let styles = {
  dropdownTemp: {
    height:250
  },
  dropdownTemp2: {
    height:275
  },
  progressBarPercentage: {
    width: '40%'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="page-container-bg-solid page-header-fixed page-sidebar-closed-hide-logo">
          <div className="page-header navbar navbar-fixed-top">
              <div className="page-header-inner ">
                  {/* BEGIN LOGO */}
                  <div className="page-logo">
                      <a href="index.html">
                          <img src="../assets/img/logo-light.png" alt="logo" className="logo-default" /> </a>
                      <div className="menu-toggler sidebar-toggler">
                          {/* DOC: Remove the above "hide" to enable the sidebar toggler button on header */}
                      </div>
                  </div>
                  {/* END LOGO */}
                  {/* BEGIN RESPONSIVE MENU TOGGLER */}
                  <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
                  {/* END RESPONSIVE MENU TOGGLER */}
                  {/* BEGIN PAGE ACTIONS */}
                  {/* DOC: Remove "hide" className to enable the page header actions */}
                  <div className="page-actions">
                      <div className="btn-group">
                          <button type="button" className="btn red-haze btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                              <span className="hidden-sm hidden-xs">Actions&nbsp;</span>
                              <i className="fa fa-angle-down"></i>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                              <li>
                                  <a href="javascript:;">
                                      <i className="icon-docs"></i> New Post </a>
                              </li>
                              <li>
                                  <a href="javascript:;">
                                      <i className="icon-tag"></i> New Comment </a>
                              </li>
                              <li>
                                  <a href="javascript:;">
                                      <i className="icon-share"></i> Share </a>
                              </li>
                              <li className="divider"> </li>
                              <li>
                                  <a href="javascript:;">
                                      <i className="icon-flag"></i> Comments
                                      <span className="badge badge-success">4</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="javascript:;">
                                      <i className="icon-users"></i> Feedbacks
                                      <span className="badge badge-danger">2</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  {/* END PAGE ACTIONS */}
                  {/* BEGIN PAGE TOP */}
                  <div className="page-top">
                      {/* BEGIN HEADER SEARCH BOX */}
                      {/* DOC: Apply "search-form-expanded" right after the "search-form" className to have half expanded search box */}
                      <form className="search-form" action="page_general_search_2.html" method="GET">
                          <div className="input-group">
                              <input type="text" className="form-control input-sm" placeholder="Search..." name="query"/>
                              <span className="input-group-btn">
                                  <a href="javascript:;" className="btn submit">
                                      <i className="icon-magnifier"></i>
                                  </a>
                              </span>
                          </div>
                      </form>
                      {/* END HEADER SEARCH BOX */}
                      {/* BEGIN TOP NAVIGATION MENU */}
                      <div className="top-menu">
                          <ul className="nav navbar-nav pull-right">
                              <li className="separator hide"> </li>
                              {/* BEGIN NOTIFICATION DROPDOWN */}
                              {/* DOC: Apply "dropdown-dark" className after below "dropdown-extended" to change the dropdown styte */}
                              {/* DOC: Apply "dropdown-hoverable" className after "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode */}
                              {/* DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle className */}
                              <li className="dropdown dropdown-extended dropdown-notification dropdown-dark" id="header_notification_bar">
                                  <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="icon-bell"></i>
                                      <span className="badge badge-success"> 7 </span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li className="external">
                                          <h3>
                                              <span className="bold">12 pending</span> notifications</h3>
                                          <a href="page_user_profile_1.html">view all</a>
                                      </li>
                                      <li>
                                          <ul className="dropdown-menu-list scroller" style={styles.dropdownTemp} data-handle-color="#637283">
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">just now</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-success">
                                                              <i className="fa fa-plus"></i>
                                                          </span> New user registered. </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">3 mins</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-danger">
                                                              <i className="fa fa-bolt"></i>
                                                          </span> Server #12 overloaded. </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">10 mins</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-warning">
                                                              <i className="fa fa-bell-o"></i>
                                                          </span> Server #2 not responding. </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">14 hrs</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-info">
                                                              <i className="fa fa-bullhorn"></i>
                                                          </span> Application error. </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">2 days</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-danger">
                                                              <i className="fa fa-bolt"></i>
                                                          </span> Database overloaded 68%. </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">3 days</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-danger">
                                                              <i className="fa fa-bolt"></i>
                                                          </span> A user IP blocked. </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">4 days</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-warning">
                                                              <i className="fa fa-bell-o"></i>
                                                          </span> Storage Server #4 not responding dfdfdfd. </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">5 days</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-info">
                                                              <i className="fa fa-bullhorn"></i>
                                                          </span> System Error. </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="time">9 days</span>
                                                      <span className="details">
                                                          <span className="label label-sm label-icon label-danger">
                                                              <i className="fa fa-bolt"></i>
                                                          </span> Storage server failed. </span>
                                                  </a>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              {/* END NOTIFICATION DROPDOWN */}
                              <li className="separator hide"> </li>
                              {/* BEGIN INBOX DROPDOWN */}
                              {/* DOC: Apply "dropdown-dark" className after below "dropdown-extended" to change the dropdown styte */}
                              <li className="dropdown dropdown-extended dropdown-inbox dropdown-dark" id="header_inbox_bar">
                                  <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="icon-envelope-open"></i>
                                      <span className="badge badge-danger"> 4 </span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li className="external">
                                          <h3>You have
                                              <span className="bold">7 New</span> Messages</h3>
                                          <a href="app_inbox.html">view all</a>
                                      </li>
                                      <li>
                                          <ul className="dropdown-menu-list scroller" style={styles.dropdownTemp2} data-handle-color="#637283">
                                              <li>
                                                  <a href="#">
                                                      <span className="photo">
                                                          <img src="../assets/layouts/layout3/img/avatar2.jpg" className="img-circle" alt="" /> </span>
                                                      <span className="subject">
                                                          <span className="from"> Lisa Wong </span>
                                                          <span className="time">Just Now </span>
                                                      </span>
                                                      <span className="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="#">
                                                      <span className="photo">
                                                          <img src="../assets/layouts/layout3/img/avatar3.jpg" className="img-circle" alt=""/> </span>
                                                      <span className="subject">
                                                          <span className="from"> Richard Doe </span>
                                                          <span className="time">16 mins </span>
                                                      </span>
                                                      <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="#">
                                                      <span className="photo">
                                                          <img src="../assets/layouts/layout3/img/avatar1.jpg" className="img-circle" alt=""/> </span>
                                                      <span className="subject">
                                                          <span className="from"> Bob Nilson </span>
                                                          <span className="time">2 hrs </span>
                                                      </span>
                                                      <span className="message"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="#">
                                                      <span className="photo">
                                                          <img src="../assets/layouts/layout3/img/avatar2.jpg" className="img-circle" alt=""/> </span>
                                                      <span className="subject">
                                                          <span className="from"> Lisa Wong </span>
                                                          <span className="time">40 mins </span>
                                                      </span>
                                                      <span className="message"> Vivamus sed auctor 40% nibh congue nibh... </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="#">
                                                      <span className="photo">
                                                          <img src="../assets/layouts/layout3/img/avatar3.jpg" className="img-circle" alt=""/> </span>
                                                      <span className="subject">
                                                          <span className="from"> Richard Doe </span>
                                                          <span className="time">46 mins </span>
                                                      </span>
                                                      <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                  </a>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              {/* END INBOX DROPDOWN */}
                              <li className="separator hide"> </li>
                              {/* BEGIN TODO DROPDOWN */}
                              {/* DOC: Apply "dropdown-dark" className after below "dropdown-extended" to change the dropdown styte */}
                              <li className="dropdown dropdown-extended dropdown-tasks dropdown-dark" id="header_task_bar">
                                  <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="icon-calendar"></i>
                                      <span className="badge badge-primary"> 3 </span>
                                  </a>
                                  <ul className="dropdown-menu extended tasks">
                                      <li className="external">
                                          <h3>You have
                                              <span className="bold">12 pending</span> tasks</h3>
                                          <a href="?p=page_todo_2">view all</a>
                                      </li>
                                      <li>
                                          <ul className="dropdown-menu-list scroller" style={styles.dropdownTemp2} data-handle-color="#637283">
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="task">
                                                          <span className="desc">New release v1.2 </span>
                                                          <span className="percent">30%</span>
                                                      </span>
                                                      <span className="progress">
                                                          <span style={styles.progressBarPercentage} className="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                              <span className="sr-only">40% Complete</span>
                                                          </span>
                                                      </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="task">
                                                          <span className="desc">Application deployment</span>
                                                          <span className="percent">65%</span>
                                                      </span>
                                                      <span className="progress">
                                                          <span style={styles.progressBarPercentage} className="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                              <span className="sr-only">65% Complete</span>
                                                          </span>
                                                      </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="task">
                                                          <span className="desc">Mobile app release</span>
                                                          <span className="percent">98%</span>
                                                      </span>
                                                      <span className="progress">
                                                          <span style={styles.progressBarPercentage} className="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                                              <span className="sr-only">98% Complete</span>
                                                          </span>
                                                      </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="task">
                                                          <span className="desc">Database migration</span>
                                                          <span className="percent">10%</span>
                                                      </span>
                                                      <span className="progress">
                                                          <span style={styles.progressBarPercentage} className="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                              <span className="sr-only">10% Complete</span>
                                                          </span>
                                                      </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="task">
                                                          <span className="desc">Web server upgrade</span>
                                                          <span className="percent">58%</span>
                                                      </span>
                                                      <span className="progress">
                                                          <span style={styles.progressBarPercentage} className="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                              <span className="sr-only">58% Complete</span>
                                                          </span>
                                                      </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="task">
                                                          <span className="desc">Mobile development</span>
                                                          <span className="percent">85%</span>
                                                      </span>
                                                      <span className="progress">
                                                          <span style={styles.progressBarPercentage} className="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                              <span className="sr-only">85% Complete</span>
                                                          </span>
                                                      </span>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="javascript:;">
                                                      <span className="task">
                                                          <span className="desc">New UI release</span>
                                                          <span className="percent">38%</span>
                                                      </span>
                                                      <span className="progress progress-striped">
                                                          <span style={styles.progressBarPercentage} className="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                              <span className="sr-only">38% Complete</span>
                                                          </span>
                                                      </span>
                                                  </a>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              {/* END TODO DROPDOWN */}
                              {/* BEGIN USER LOGIN DROPDOWN */}
                              {/* DOC: Apply "dropdown-dark" className after below "dropdown-extended" to change the dropdown styte */}
                              <li className="dropdown dropdown-user dropdown-dark">
                                  <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <span className="username username-hide-on-mobile"> Nick </span>
                                      {/* DOC: Do not remove below empty space(&nbsp;) as its purposely used */}
                                      <img alt="" className="img-circle" src="../assets/img/avatar9.jpg" /> </a>
                                  <ul className="dropdown-menu dropdown-menu-default">
                                      <li>
                                          <a href="page_user_profile_1.html">
                                              <i className="icon-user"></i> My Profile </a>
                                      </li>
                                      <li>
                                          <a href="app_calendar.html">
                                              <i className="icon-calendar"></i> My Calendar </a>
                                      </li>
                                      <li>
                                          <a href="app_inbox.html">
                                              <i className="icon-envelope-open"></i> My Inbox
                                              <span className="badge badge-danger"> 3 </span>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="app_todo_2.html">
                                              <i className="icon-rocket"></i> My Tasks
                                              <span className="badge badge-success"> 7 </span>
                                          </a>
                                      </li>
                                      <li className="divider"> </li>
                                      <li>
                                          <a href="page_user_lock_1.html">
                                              <i className="icon-lock"></i> Lock Screen </a>
                                      </li>
                                      <li>
                                          <a href="page_user_login_1.html">
                                              <i className="icon-key"></i> Log Out </a>
                                      </li>
                                  </ul>
                              </li>
                              {/* END USER LOGIN DROPDOWN */}
                              {/* BEGIN QUICK SIDEBAR TOGGLER */}
                              <li className="dropdown dropdown-extended quick-sidebar-toggler">
                                  <span className="sr-only">Toggle Quick Sidebar</span>
                                  <i className="icon-logout"></i>
                              </li>
                              {/* END QUICK SIDEBAR TOGGLER */}
                          </ul>
                      </div>
                      {/* END TOP NAVIGATION MENU */}
                  </div>
                  {/* END PAGE TOP */}
              </div>
              {/* END HEADER INNER */}
          </div>
          {/* END HEADER */}
        </div>
      </div>
    );
  }
}

export default App;
