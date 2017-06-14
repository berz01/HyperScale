import React, { Component } from 'react';
import './sidebar.css';

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

export default class Sidebar extends Component {
  render() {
    return (
      <div className="page-sidebar-wrapper">
          {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
          {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
          <div className="page-sidebar navbar-collapse collapse">
              {/* DOC: Apply "page-sidebar-menu-light" className right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
              {/* DOC: Apply "page-sidebar-menu-hover-submenu" className right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
              {/* DOC: Apply "page-sidebar-menu-closed" className right after "page-sidebar-menu" to collapse("page-sidebar-closed" className must be applied to the body element) the sidebar sub menu mode */}
              {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
              {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
              {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
              <ul className="page-sidebar-menu   " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                  <li className="heading">
                      <h3 className="uppercase">Stuff If you want it</h3>
                  </li>
                  <li className="nav-item start ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                          <i className="icon-feed"></i>
                          <span className="title">Feed</span>
                          <span className="arrow"></span>
                      </a>
                      <ul className="sub-menu">
                          <li className="nav-item start ">
                              <a href="index.html" className="nav-link ">
                                  <i className="icon-bar-chart"></i>
                                  <span className="title">Dashboard 1</span>
                              </a>
                          </li>
                          <li className="nav-item start ">
                              <a href="dashboard_2.html" className="nav-link ">
                                  <i className="icon-bulb"></i>
                                  <span className="title">Dashboard 2</span>
                                  <span className="badge badge-success">1</span>
                              </a>
                          </li>
                          <li className="nav-item start ">
                              <a href="dashboard_3.html" className="nav-link ">
                                  <i className="icon-graph"></i>
                                  <span className="title">Dashboard 3</span>
                                  <span className="badge badge-danger">5</span>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li className="nav-item ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                          <i className="icon-bulb"></i>
                          <span className="title">Opportunity</span>
                          <span className="arrow"></span>
                      </a>
                      <ul className="sub-menu">
                          <li className="nav-item start ">
                              <a href="index.html" className="nav-link ">
                                  <i className="icon-bar-chart"></i>
                                  <span className="title">Dashboard 1</span>
                              </a>
                          </li>
                          <li className="nav-item start ">
                              <a href="dashboard_2.html" className="nav-link ">
                                  <i className="icon-bulb"></i>
                                  <span className="title">Dashboard 2</span>
                                  <span className="badge badge-success">1</span>
                              </a>
                          </li>
                          <li className="nav-item start ">
                              <a href="dashboard_3.html" className="nav-link ">
                                  <i className="icon-graph"></i>
                                  <span className="title">Dashboard 3</span>
                                  <span className="badge badge-danger">5</span>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li className="nav-item ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                          <i className="icon-user"></i>
                          <span className="title">Retention</span>
                          <span className="arrow"></span>
                      </a>
                      <ul className="sub-menu">
                          <li className="nav-item start ">
                              <a href="index.html" className="nav-link ">
                                  <i className="icon-bar-chart"></i>
                                  <span className="title">Dashboard 1</span>
                              </a>
                          </li>
                          <li className="nav-item start ">
                              <a href="dashboard_2.html" className="nav-link ">
                                  <i className="icon-bulb"></i>
                                  <span className="title">Dashboard 2</span>
                                  <span className="badge badge-success">1</span>
                              </a>
                          </li>
                          <li className="nav-item start ">
                              <a href="dashboard_3.html" className="nav-link ">
                                  <i className="icon-graph"></i>
                                  <span className="title">Dashboard 3</span>
                                  <span className="badge badge-danger">5</span>
                              </a>
                          </li>
                      </ul>
                  </li>
              </ul>
              {/* END SIDEBAR MENU */}
          </div>
          {/* END SIDEBAR */}
      </div>
    );
  }
};
