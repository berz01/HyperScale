import React, { Component } from 'react';
import './retention.css';

export default class Retention extends Component {
  render() {
    return (
      <div className="page-content">
          {/* BEGIN PAGE HEAD*/}
          <div className="page-head">
              {/* BEGIN PAGE TITLE */}
              <div className="page-title">
                  <h1>Retention
                      <small>statistics, charts, recent events and reports</small>
                  </h1>
              </div>
              {/* END PAGE TITLE */}
              {/* BEGIN PAGE TOOLBAR */}
              <div className="page-toolbar">
                  <div id="dashboard-report-range" data-display-range="0" className="pull-right tooltips btn btn-fit-height green" data-placement="left" data-original-title="Change dashboard date range">
                      <i className="icon-calendar"></i>&nbsp;
                      <span className="thin uppercase hidden-xs"></span>&nbsp;
                      <i className="fa fa-angle-down"></i>
                  </div>
                  {/* BEGIN THEME PANEL */}
                  <div className="btn-group btn-theme-panel">
                      <a href="javascript:;" className="btn dropdown-toggle" data-toggle="dropdown">
                          <i className="icon-settings"></i>
                      </a>
                      <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                          <div className="row">
                              <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h3>HEADER</h3>
                                  <ul className="theme-colors">
                                      <li className="theme-color theme-color-default active" data-theme="default">
                                          <span className="theme-color-view"></span>
                                          <span className="theme-color-name">Dark Header</span>
                                      </li>
                                      <li className="theme-color theme-color-light " data-theme="light">
                                          <span className="theme-color-view"></span>
                                          <span className="theme-color-name">Light Header</span>
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-8 col-sm-8 col-xs-12 seperator">
                                  <h3>LAYOUT</h3>
                                  <ul className="theme-settings">
                                      <li> Theme Style
                                          <select className="layout-style-option form-control input-small input-sm">
                                              <option value="square">Square corners</option>
                                              <option value="rounded" value="selected">Rounded corners</option>
                                          </select>
                                      </li>
                                      <li> Layout
                                          <select className="layout-option form-control input-small input-sm">
                                              <option value="fluid" value="selected">Fluid</option>
                                              <option value="boxed">Boxed</option>
                                          </select>
                                      </li>
                                      <li> Header
                                          <select className="page-header-option form-control input-small input-sm">
                                              <option value="fixed" value="selected">Fixed</option>
                                              <option value="default">Default</option>
                                          </select>
                                      </li>
                                      <li> Top Dropdowns
                                          <select className="page-header-top-dropdown-style-option form-control input-small input-sm">
                                              <option value="light">Light</option>
                                              <option value="dark" value="selected">Dark</option>
                                          </select>
                                      </li>
                                      <li> Sidebar Mode
                                          <select className="sidebar-option form-control input-small input-sm">
                                              <option value="fixed">Fixed</option>
                                              <option value="default" value="selected">Default</option>
                                          </select>
                                      </li>
                                      <li> Sidebar Menu
                                          <select className="sidebar-menu-option form-control input-small input-sm">
                                              <option value="accordion" value="selected">Accordion</option>
                                              <option value="hover">Hover</option>
                                          </select>
                                      </li>
                                      <li> Sidebar Position
                                          <select className="sidebar-pos-option form-control input-small input-sm">
                                              <option value="left" value="selected">Left</option>
                                              <option value="right">Right</option>
                                          </select>
                                      </li>
                                      <li> Footer
                                          <select className="page-footer-option form-control input-small input-sm">
                                              <option value="fixed">Fixed</option>
                                              <option value="default" value="selected">Default</option>
                                          </select>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* END THEME PANEL */}
              </div>
              {/* END PAGE TOOLBAR */}
          </div>
          {/* END PAGE HEAD*/}
          {/* BEGIN PAGE BREADCRUMB */}
          <ul className="page-breadcrumb breadcrumb">
              <li>
                  <a href="index.html">Home</a>
                  <i className="fa fa-circle"></i>
              </li>
              <li>
                  <span className="active">Dashboard</span>
              </li>
          </ul>
          {/* END PAGE BREADCRUMB */}
          {/* BEGIN PAGE BASE CONTENT */}
          {/* BEGIN DASHBOARD STATS 1*/}
          <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a className="dashboard-stat dashboard-stat-v2 blue" href="#">
                      <div className="visual">
                          <i className="fa fa-comments"></i>
                      </div>
                      <div className="details">
                          <div className="number">
                              <span data-counter="counterup" data-value="1349">0</span>
                          </div>
                          <div className="desc"> New Feedbacks </div>
                      </div>
                  </a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a className="dashboard-stat dashboard-stat-v2 red" href="#">
                      <div className="visual">
                          <i className="fa fa-bar-chart-o"></i>
                      </div>
                      <div className="details">
                          <div className="number">
                              <span data-counter="counterup" data-value="12,5">0</span>M$ </div>
                          <div className="desc"> Total Profit </div>
                      </div>
                  </a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a className="dashboard-stat dashboard-stat-v2 green" href="#">
                      <div className="visual">
                          <i className="fa fa-shopping-cart"></i>
                      </div>
                      <div className="details">
                          <div className="number">
                              <span data-counter="counterup" data-value="549">0</span>
                          </div>
                          <div className="desc"> New Orders </div>
                      </div>
                  </a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a className="dashboard-stat dashboard-stat-v2 purple" href="#">
                      <div className="visual">
                          <i className="fa fa-globe"></i>
                      </div>
                      <div className="details">
                          <div className="number"> +
                              <span data-counter="counterup" data-value="89"></span>% </div>
                          <div className="desc"> Brand Popularity </div>
                      </div>
                  </a>
              </div>
          </div>
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-lg-6 col-xs-12 col-sm-12">
                <div className="portlet light bordered">
                    <div className="portlet-title tabbable-line">
                        <div className="caption">
                            <i className="icon-bubbles font-dark hide"></i>
                            <span className="caption-subject font-dark bold uppercase">Comments</span>
                        </div>
                        <ul className="nav nav-tabs">
                            <li className="active">
                                <a href="#portlet_comments_1" data-toggle="tab"> Pending </a>
                            </li>
                            <li>
                                <a href="#portlet_comments_2" data-toggle="tab"> Approved </a>
                            </li>
                        </ul>
                    </div>
                    <div className="portlet-body">
                        <div className="tab-content">
                            <div className="tab-pane active" id="portlet_comments_1">
                                {/* BEGIN: Comments */}
                                <div className="mt-comments">
                                    <div className="mt-comment">
                                        <div className="mt-comment-img">
                                            <img src="../assets/pages/media/users/avatar1.jpg" /> </div>
                                        <div className="mt-comment-body">
                                            <div className="mt-comment-info">
                                                <span className="mt-comment-author">Michael Baker</span>
                                                <span className="mt-comment-date">26 Feb, 10:30AM</span>
                                            </div>
                                            <div className="mt-comment-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                            <div className="mt-comment-details">
                                                <span className="mt-comment-status mt-comment-status-pending">Pending</span>
                                                <ul className="mt-comment-actions">
                                                    <li>
                                                        <a href="#">Quick Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-comment">
                                        <div className="mt-comment-img">
                                            <img src="../assets/pages/media/users/avatar6.jpg" /> </div>
                                        <div className="mt-comment-body">
                                            <div className="mt-comment-info">
                                                <span className="mt-comment-author">Larisa Maskalyova</span>
                                                <span className="mt-comment-date">12 Feb, 08:30AM</span>
                                            </div>
                                            <div className="mt-comment-text"> It is a long established fact that a reader will be distracted. </div>
                                            <div className="mt-comment-details">
                                                <span className="mt-comment-status mt-comment-status-rejected">Rejected</span>
                                                <ul className="mt-comment-actions">
                                                    <li>
                                                        <a href="#">Quick Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-comment">
                                        <div className="mt-comment-img">
                                            <img src="../assets/pages/media/users/avatar8.jpg" /> </div>
                                        <div className="mt-comment-body">
                                            <div className="mt-comment-info">
                                                <span className="mt-comment-author">Natasha Kim</span>
                                                <span className="mt-comment-date">19 Dec,09:50 AM</span>
                                            </div>
                                            <div className="mt-comment-text"> The generated Lorem or non-characteristic Ipsum is therefore or non-characteristic. </div>
                                            <div className="mt-comment-details">
                                                <span className="mt-comment-status mt-comment-status-pending">Pending</span>
                                                <ul className="mt-comment-actions">
                                                    <li>
                                                        <a href="#">Quick Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-comment">
                                        <div className="mt-comment-img">
                                            <img src="../assets/pages/media/users/avatar4.jpg" /> </div>
                                        <div className="mt-comment-body">
                                            <div className="mt-comment-info">
                                                <span className="mt-comment-author">Sebastian Davidson</span>
                                                <span className="mt-comment-date">10 Dec, 09:20 AM</span>
                                            </div>
                                            <div className="mt-comment-text"> The standard chunk of Lorem or non-characteristic Ipsum used since the 1500s or non-characteristic. </div>
                                            <div className="mt-comment-details">
                                                <span className="mt-comment-status mt-comment-status-rejected">Rejected</span>
                                                <ul className="mt-comment-actions">
                                                    <li>
                                                        <a href="#">Quick Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END: Comments */}
                            </div>
                            <div className="tab-pane" id="portlet_comments_2">
                                {/* BEGIN: Comments */}
                                <div className="mt-comments">
                                    <div className="mt-comment">
                                        <div className="mt-comment-img">
                                            <img src="../assets/pages/media/users/avatar4.jpg" /> </div>
                                        <div className="mt-comment-body">
                                            <div className="mt-comment-info">
                                                <span className="mt-comment-author">Michael Baker</span>
                                                <span className="mt-comment-date">26 Feb, 10:30AM</span>
                                            </div>
                                            <div className="mt-comment-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </div>
                                            <div className="mt-comment-details">
                                                <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                                <ul className="mt-comment-actions">
                                                    <li>
                                                        <a href="#">Quick Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-comment">
                                        <div className="mt-comment-img">
                                            <img src="../assets/pages/media/users/avatar8.jpg" /> </div>
                                        <div className="mt-comment-body">
                                            <div className="mt-comment-info">
                                                <span className="mt-comment-author">Larisa Maskalyova</span>
                                                <span className="mt-comment-date">12 Feb, 08:30AM</span>
                                            </div>
                                            <div className="mt-comment-text"> It is a long established fact that a reader will be distracted by. </div>
                                            <div className="mt-comment-details">
                                                <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                                <ul className="mt-comment-actions">
                                                    <li>
                                                        <a href="#">Quick Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-comment">
                                        <div className="mt-comment-img">
                                            <img src="../assets/pages/media/users/avatar6.jpg" /> </div>
                                        <div className="mt-comment-body">
                                            <div className="mt-comment-info">
                                                <span className="mt-comment-author">Natasha Kim</span>
                                                <span className="mt-comment-date">19 Dec,09:50 AM</span>
                                            </div>
                                            <div className="mt-comment-text"> The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </div>
                                            <div className="mt-comment-details">
                                                <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                                <ul className="mt-comment-actions">
                                                    <li>
                                                        <a href="#">Quick Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-comment">
                                        <div className="mt-comment-img">
                                            <img src="../assets/pages/media/users/avatar1.jpg" /> </div>
                                        <div className="mt-comment-body">
                                            <div className="mt-comment-info">
                                                <span className="mt-comment-author">Sebastian Davidson</span>
                                                <span className="mt-comment-date">10 Dec, 09:20 AM</span>
                                            </div>
                                            <div className="mt-comment-text"> The standard chunk of Lorem Ipsum used since the 1500s </div>
                                            <div className="mt-comment-details">
                                                <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                                <ul className="mt-comment-actions">
                                                    <li>
                                                        <a href="#">Quick Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END: Comments */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xs-12 col-sm-12">
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
                                    <div className="mt-action">
                                        <div className="mt-action-img">
                                            <img src="../assets/pages/media/users/avatar10.jpg" /> </div>
                                        <div className="mt-action-body">
                                            <div className="mt-action-row">
                                                <div className="mt-action-info ">
                                                    <div className="mt-action-icon ">
                                                        <i className="icon-magnet"></i>
                                                    </div>
                                                    <div className="mt-action-details ">
                                                        <span className="mt-action-author">Natasha Kim</span>
                                                        <p className="mt-action-desc">Dummy text of the printing</p>
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
                                    <div className="mt-action">
                                        <div className="mt-action-img">
                                            <img src="../assets/pages/media/users/avatar3.jpg" /> </div>
                                        <div className="mt-action-body">
                                            <div className="mt-action-row">
                                                <div className="mt-action-info ">
                                                    <div className="mt-action-icon ">
                                                        <i className=" icon-bubbles"></i>
                                                    </div>
                                                    <div className="mt-action-details ">
                                                        <span className="mt-action-author">Gavin Bond</span>
                                                        <p className="mt-action-desc">pending for approval</p>
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
                                                        <i className="icon-call-in"></i>
                                                    </div>
                                                    <div className="mt-action-details ">
                                                        <span className="mt-action-author">Diana Berri</span>
                                                        <p className="mt-action-desc">Lorem Ipsum is simply dummy text</p>
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
                                    <div className="mt-action">
                                        <div className="mt-action-img">
                                            <img src="../assets/pages/media/users/avatar7.jpg" /> </div>
                                        <div className="mt-action-body">
                                            <div className="mt-action-row">
                                                <div className="mt-action-info ">
                                                    <div className="mt-action-icon ">
                                                        <i className=" icon-bell"></i>
                                                    </div>
                                                    <div className="mt-action-details ">
                                                        <span className="mt-action-author">John Clark</span>
                                                        <p className="mt-action-desc">Text of the printing and typesetting industry</p>
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
                                                        <i className="icon-magnet"></i>
                                                    </div>
                                                    <div className="mt-action-details ">
                                                        <span className="mt-action-author">Donna Clarkson </span>
                                                        <p className="mt-action-desc">Simply dummy text of the printing</p>
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
                                    <div className="mt-action">
                                        <div className="mt-action-img">
                                            <img src="../assets/pages/media/users/avatar9.jpg" /> </div>
                                        <div className="mt-action-body">
                                            <div className="mt-action-row">
                                                <div className="mt-action-info ">
                                                    <div className="mt-action-icon ">
                                                        <i className="icon-magnet"></i>
                                                    </div>
                                                    <div className="mt-action-details ">
                                                        <span className="mt-action-author">Tom Larson</span>
                                                        <p className="mt-action-desc">Lorem Ipsum is simply dummy text</p>
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
            </div>
          {/* END PAGE BASE CONTENT */}
          </div>
      </div>
    );
  }
}
