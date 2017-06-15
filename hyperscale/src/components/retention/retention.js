import React, { Component } from 'react';
import './retention.css';

import Conquer from '../conquer/conquer';
import Profile from '../profile/profile';

export default class Retention extends Component {
  render() {
    return (
      <div className="page-content">
          {/* BEGIN PAGE HEAD*/}
          <div className="page-head row">
              {/* BEGIN PAGE TITLE */}
              <div className="col-xs-6">
                <div className="page-title">
                    <h1>Retention    <small>reach out to our community</small> </h1>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="action-row">
                  <a href="javascript:;" className="btn btn-lg default blue space"> Call <i className="fa fa-user"></i></a>
                  <a href="javascript:;" className="btn btn-lg default red space"> Text <i className="fa fa-user"></i></a>
                  <a href="javascript:;" className="btn btn-lg default green space"> Email <i className="fa fa-user"></i></a>
                  <a href="javascript:;" className="btn btn-lg default purple space"> Note <i className="fa fa-user"></i></a>
                </div>
              </div>
              {/* END PAGE TITLE */}
          </div>
          {/* END PAGE HEAD*/}
          {/* BEGIN PAGE BASE CONTENT */}
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-lg-6 col-xs-12 col-sm-12">
                <Conquer />
            </div>
            <div className="col-lg-6 col-xs-12 col-sm-12">
              <div className="row">
                <Profile />
              </div>
            </div>
          {/* END PAGE BASE CONTENT */}
          </div>
      </div>
    );
  }
}
