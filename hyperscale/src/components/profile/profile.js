import React, { Component } from 'react';
import './profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
                      <div className="tabbable-line tabbable-full-width">
                          <ul className="nav nav-tabs">
                              <li className="active">
                                  <a href="#tab_1_1" data-toggle="tab" aria-expanded="true"> Overview </a>
                              </li>
                              <li className="">
                                  <a href="#tab_1_3" data-toggle="tab" aria-expanded="false"> </a>
                              </li>
                              <li>
                                  <a href="#tab_1_6" data-toggle="tab"> </a>
                              </li>
                          </ul>
                          <div className="tab-content">
                              <div className="tab-pane active" id="tab_1_1">
                                  <div className="row">
                                      <div className="col-md-3">
                                          <ul className="list-unstyled profile-nav">
                                              <li>
                                                  <img src="../assets/pages/media/profile/people19.png" className="img-responsive pic-bordered" alt=""/>

                                              </li>

                                          </ul>
                                      </div>
                                      <div className="col-md-9">
                                          <div className="row">
                                              <div className="col-md-8 profile-info">
                                                  <h1 className="font-green sbold uppercase">John Doe</h1>
                                                  <p><b> Most recent notes: </b>He came by the office with his wife and had inquired about increasing his coverages
                                                      </p>
                                                  <p>

                                                  </p>
                                                  <ul className="list-inline">
                                                      <li>
                                                          <i className="fa fa-map-marker"></i> 123 Street </li>
                                                      <li>
                                                          <i className="fa fa-calendar"></i> 18 Jan 1982 </li>
                                                      <li>
                                                          <i className="fa fa-briefcase"></i> Engineer </li>
                                                      <li>
                                                          <i className="fa fa-star"></i> Multi-Policy </li>
                                                      <li>
                                                          <i className="fa fa-heart"></i> Good standing </li>
                                                  </ul>
                                              </div>
                                              <div className="col-md-4">
                                                  <div className="portlet sale-summary">
                                                      <div className="portlet-title">
                                                          <div className="caption font-red sbold"> Policy Summary </div>
                                                          <div className="tools">
                                                              <a className="reload" href="javascript:;" data-original-title="" title=""> </a>
                                                          </div>
                                                      </div>
                                                      <div className="portlet-body">
                                                          <ul className="list-unstyled">
                                                              <li>
                                                                  <span className="sale-info"> Auto
                                                                      <i className="fa fa-img-up"></i>
                                                                  </span>
                                                                  <span className="sale-num">07/13/2017 </span>
                                                              </li>
                                                              <li>
                                                                  <span className="sale-info"> Life
                                                                      <i className="fa fa-img-down"></i>
                                                                  </span>
                                                                  <span className="sale-num"> 07/13/2017 </span>
                                                              </li>
                                                              <li>
                                                                  <span className="sale-info"> Bank </span>
                                                                  <span className="sale-num">07/13/2017 </span>
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="tabbable-line tabbable-custom-profile">
                                              <ul className="nav nav-tabs">
                                                  <li className="active">
                                                      <a href="#tab_1_11" data-toggle="tab" aria-expanded="true"> Latest Customers </a>
                                                  </li>
                                                  <li>
                                                      <a href="#tab_1_22" data-toggle="tab" aria-expanded="true"> Feeds </a>
                                                  </li>
                                              </ul>
                                              <div className="tab-content">
                                                  <div className="tab-pane active" id="tab_1_11">
                                                      <div className="portlet-body">
                                                          <table className="table table-striped table-bordered table-advance table-hover">
                                                              <thead>
                                                                  <tr>
                                                                      <th>
                                                                          <i className="fa fa-sitemap"></i> Lead Type </th>
                                                                      <th className="hidden-xs">
                                                                          <i className="fa fa-question"></i> Status </th>
                                                                      <th>
                                                                          <i className="fa fa-phone-square"></i> Contacted By </th>
                                                                      <th> </th>
                                                                  </tr>
                                                              </thead>
                                                              <tbody>
                                                                  <tr>
                                                                      <td>
                                                                          <a href="javascript:;"> Internet Lead </a>
                                                                      </td>
                                                                      <td className="hidden-xs"> Potential </td>
                                                                      <td> Carol Barber
                                                                          <span className="label label-success label-sm">SMS text </span>
                                                                      </td>

                                                                  </tr>

                                                              </tbody>
                                                          </table>
                                                      </div>
                                                  </div>
                                                  <div className="tab-pane" id="tab_1_22">
                                                      <div className="tab-pane active" id="tab_1_1_1">
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane" id="tab_1_3">
                                  <div className="row profile-account">
                                      <div className="col-md-3">
                                          <ul className="ver-inline-menu tabbable margin-bottom-10">
                                              <li className="active">
                                                  <a data-toggle="tab" href="#tab_1-1" aria-expanded="false">
                                                      <i className="fa fa-cog"></i> Personal info </a>
                                                  <span className="after"> </span>
                                              </li>
                                              <li>
                                                  <a data-toggle="tab" href="#tab_2-2" aria-expanded="false">
                                                      <i className="fa fa-picture-o"></i> Change Avatar </a>
                                              </li>
                                              <li>
                                                  <a data-toggle="tab" href="#tab_3-3" aria-expanded="false">
                                                      <i className="fa fa-lock"></i> Change Password </a>
                                              </li>
                                              <li>
                                                  <a data-toggle="tab" href="#tab_4-4" aria-expanded="false">
                                                      <i className="fa fa-eye"></i> Privacity Settings </a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="col-md-9">
                                          <div className="tab-content">
                                              <div id="tab_1-1" className="tab-pane active">

                                              </div>
                                              <div id="tab_2-2" className="tab-pane">
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                      </p>
                                                  <form action="#" role="form">

                                                      <div className="margin-top-10">
                                                          <a href="javascript:;" className="btn green"> Submit </a>
                                                          <a href="javascript:;" className="btn default"> Cancel </a>
                                                      </div>
                                                  </form>
                                              </div>
                                              <div id="tab_3-3" className="tab-pane">
                                                  <form action="#">

                                                  </form>
                                              </div>
                                              <div id="tab_4-4" className="tab-pane">
                                                  <form action="#">
                                                      <table className="table table-bordered table-striped">
                                                          <tbody><tr>
                                                              <td> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus.. </td>
                                                              <td>
                                                                  <div className="mt-radio-inline">

                                                                  </div>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                                                              <td>
                                                                  <div className="mt-radio-inline">

                                                                  </div>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                                                              <td>
                                                                  <div className="mt-radio-inline">

                                                                  </div>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                                                              <td>
                                                                  <div className="mt-radio-inline">

                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                      <div className="margin-top-10">
                                                          <a href="javascript:;" className="btn green"> Save Changes </a>
                                                          <a href="javascript:;" className="btn default"> Cancel </a>
                                                      </div>
                                                  </form>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane" id="tab_1_6">
                                  <div className="row">
                                      <div className="col-md-2">
                                          <ul className="ver-inline-menu tabbable margin-bottom-10">
                                              <li className="active">
                                                  <a data-toggle="tab" href="#tab_1">
                                                      <i className="fa fa-briefcase"></i> General Questions </a>
                                                  <span className="after"> </span>
                                              </li>
                                              <li>
                                                  <a data-toggle="tab" href="#tab_2">
                                                      <i className="fa fa-group"></i> Membership </a>
                                              </li>
                                              <li>
                                                  <a data-toggle="tab" href="#tab_3">
                                                      <i className="fa fa-leaf"></i> Terms Of Service </a>
                                              </li>
                                              <li>
                                                  <a data-toggle="tab" href="#tab_1">
                                                      <i className="fa fa-info-circle"></i> License Terms </a>
                                              </li>
                                              <li>
                                                  <a data-toggle="tab" href="#tab_2">
                                                      <i className="fa fa-tint"></i> Payment Rules </a>
                                              </li>
                                              <li>
                                                  <a data-toggle="tab" href="#tab_3">
                                                      <i className="fa fa-plus"></i> Other Questions </a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="col-md-10">
                                          <div className="tab-content">
                                              <div id="tab_1" className="tab-pane active">
                                                  <div id="accordion1" className="panel-group">
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_1"> 1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion1_1" className="panel-collapse collapse in">
                                                              <div className="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                                  laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                                  anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                                  heard of them accusamus labore sustainable VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_2"> 2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion1_2" className="panel-collapse collapse">
                                                              <div className="panel-body"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Anim pariatur cliche reprehenderit,
                                                                  enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                                                  VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-success">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_3"> 3. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion1_3" className="panel-collapse collapse">
                                                              <div className="panel-body"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Anim pariatur cliche reprehenderit,
                                                                  enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                                                  VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-warning">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_4"> 4. Wolf moon officia aute, non cupidatat skateboard dolor brunch ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion1_4" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-danger">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_5"> 5. Leggings occaecat craft beer farm-to-table, raw denim aesthetic ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion1_5" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_6"> 6. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion1_6" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_7"> 7. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion1_7" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div id="tab_2" className="tab-pane">
                                                  <div id="accordion2" className="panel-group">
                                                      <div className="panel panel-warning">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#accordion2_1"> 1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion2_1" className="panel-collapse collapse in">
                                                              <div className="panel-body">
                                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                                      laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                                                      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                                      haven't heard of them accusamus labore sustainable VHS. </p>
                                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                                      laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                                                      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                                      haven't heard of them accusamus labore sustainable VHS. </p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-danger">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#accordion2_2"> 2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion2_2" className="panel-collapse collapse">
                                                              <div className="panel-body"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Anim pariatur cliche reprehenderit,
                                                                  enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                                                  VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-success">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#accordion2_3"> 3. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion2_3" className="panel-collapse collapse">
                                                              <div className="panel-body"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Anim pariatur cliche reprehenderit,
                                                                  enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                                                  VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#accordion2_4"> 4. Wolf moon officia aute, non cupidatat skateboard dolor brunch ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion2_4" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#accordion2_5"> 5. Leggings occaecat craft beer farm-to-table, raw denim aesthetic ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion2_5" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#accordion2_6"> 6. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion2_6" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#accordion2_7"> 7. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion2_7" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div id="tab_3" className="tab-pane">
                                                  <div id="accordion3" className="panel-group">
                                                      <div className="panel panel-danger">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#accordion3_1"> 1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion3_1" className="panel-collapse collapse in">
                                                              <div className="panel-body">
                                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                                      laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. </p>
                                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                                      laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. </p>
                                                                  <p> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                                                      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                                                      you probably haven't heard of them accusamus labore sustainable VHS. </p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-success">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#accordion3_2"> 2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion3_2" className="panel-collapse collapse">
                                                              <div className="panel-body"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Anim pariatur cliche reprehenderit,
                                                                  enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                                                  VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#accordion3_3"> 3. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion3_3" className="panel-collapse collapse">
                                                              <div className="panel-body"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Anim pariatur cliche reprehenderit,
                                                                  enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                                                  VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#accordion3_4"> 4. Wolf moon officia aute, non cupidatat skateboard dolor brunch ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion3_4" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#accordion3_5"> 5. Leggings occaecat craft beer farm-to-table, raw denim aesthetic ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion3_5" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#accordion3_6"> 6. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion3_6" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                      <div className="panel panel-default">
                                                          <div className="panel-heading">
                                                              <h4 className="panel-title">
                                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#accordion3_7"> 7. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft ? </a>
                                                              </h4>
                                                          </div>
                                                          <div id="accordion3_7" className="panel-collapse collapse">
                                                              <div className="panel-body"> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
    );
  }
}
