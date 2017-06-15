import React, { Component } from 'react';
import './nav.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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


export default class Nav extends Component {
  render() {
    return (
      <div className="page-header navbar navbar-fixed-top">
          <div className="page-header-inner ">
              <div className="page-logo">
                <div className="menu-toggler sidebar-toggler">
                </div>
                <Link to="/">
                  <img src="../assets/img/logo-light-sf.png" alt="logo" className="logo-default" />
                </Link>
              </div>

              {/* END LOGO */}
              {/* BEGIN RESPONSIVE MENU TOGGLER */}
              <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
              {/* END RESPONSIVE MENU TOGGLER */}
              {/* BEGIN PAGE TOP */}
              <div className="page-top">
                  {/* BEGIN HEADER SEARCH BOX */}
                  {/* DOC: Apply "search-form-expanded" right after the "search-form" className to have half expanded search box */}
                  <form className="search-form" action="page_general_search_2.html" method="GET">
                      <div className="input-group">
                          <input type="text" className="form-control input-sm" placeholder="Search..." name="query"/>
                          <span className="input-group-btn">
                              <a href="javascript:;" className="btn submit" >
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
                          {/* BEGIN USER LOGIN DROPDOWN */}
                          {/* DOC: Apply "dropdown-dark" className after below "dropdown-extended" to change the dropdown styte */}
                          <li className="dropdown dropdown-user dropdown-dark">
                              <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                  <span className="username username-hide-on-mobile"> Barrett </span>
                                  {/* DOC: Do not remove below empty space(&nbsp;) as its purposely used */}
                                  <img alt="" className="img-circle" src="../assets/img/haha.jpg" /> </a>
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
        </div>
    );
  }
}
