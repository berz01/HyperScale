import React, { Component } from 'react';
import './sidebar.css';

import {
  Link
} from 'react-router-dom';

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
                      <h3 className="uppercase">Menu</h3>
                  </li>
                  <li className="nav-item start ">
                      <Link to="/" className="nav-link nav-toggle">
                            <i className="icon-feed"></i>
                            <span className="title">Workbench</span>
                            <span className="arrow"></span>
                        <ul className="sub-menu">
                            <li className="nav-item start ">
                                <a href="index.html" className="nav-link ">
                                    <i className="icon-bar-chart"></i>
                                    <span className="title">Others</span>
                                </a>
                            </li>
                        </ul>
                      </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/opportunity" className="nav-link">
                          <i className="icon-bulb"></i>
                          <span className="title">Potential</span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                      <Link to="/retention" className="nav-link">
                            <i className="icon-user"></i>
                            <span className="title">Existing</span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                      <Link to="/retention" className="nav-link">
                            <i className="icon-ghost"></i>
                            <span className="title">Expired</span>
                    </Link>
                  </li>
              </ul>
              {/* END SIDEBAR MENU */}
          </div>
          {/* END SIDEBAR */}
      </div>
    );
  }
};
