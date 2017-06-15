import React, { Component } from 'react';
import './feed.css';

let styles = {
  noHeight:0
}

export default class Feed extends Component {
  render() {
    return (
          <div className="portlet light portlet-fit bordered">
              <div className="portlet-title">
                  <div className="caption">
                      <i className=" icon-layers font-green"></i>
                      <span className="caption-subject font-green bold uppercase">To Do List</span>
                      <div className="caption-desc font-grey-cascade"> Default list element. Activate by adding <pre className="mt-code">.list-todo</pre> className to the <pre className="mt-code">ul</pre> element. </div>
                  </div>
              </div>
              <div className="portlet-body">
                  <div className="mt-element-list">
                      <div className="mt-list-head list-todo red">
                          <div className="list-head-title-container">
                              <h3 className="list-title">My Projects</h3>
                              <div className="list-head-count">
                                  <div className="list-head-count-item">
                                      <i className="fa fa-check"></i> 15</div>
                                  <div className="list-head-count-item">
                                      <i className="fa fa-cog"></i> 34</div>
                              </div>
                          </div>
                          <a href="javascript:;">
                              <div className="list-count pull-right red-mint">
                                  <i className="fa fa-plus"></i>
                              </div>
                          </a>
                      </div>
                      <div className="mt-list-container list-todo">
                          <div className="list-todo-line red"></div>
                          <ul>
                              <li className="mt-list-item">
                                  <div className="list-todo-icon bg-white font-blue-steel">
                                      <i className="fa fa-database"></i>
                                  </div>
                                  <div className="list-todo-item blue-steel">
                                      <a className="list-toggle-container font-white collapsed" data-toggle="collapse" href="#task-1-2" aria-expanded="false">
                                          <div className="list-toggle done uppercase">
                                              <div className="list-toggle-title bold">Metronic Database</div>
                                              <div className="badge badge-default pull-right bold">3</div>
                                          </div>
                                      </a>
                                      <div className="task-list panel-collapse collapse" id="task-1-2" aria-expanded="false">
                                          <ul>
                                              <li className="task-list-item done">
                                                  <div className="task-icon">
                                                      <a href="javascript:;">
                                                          <i className="fa fa-database"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-status">
                                                      <a className="done" href="javascript:;">
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                      <a className="pending" href="javascript:;">
                                                          <i className="fa fa-close"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-content">
                                                      <h4 className="uppercase bold">
                                                          <a href="javascript:;">Database Optimization</a>
                                                      </h4>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                                                  </div>
                                              </li>
                                              <li className="task-list-item">
                                                  <div className="task-icon">
                                                      <a href="javascript:;">
                                                          <i className="fa fa-table"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-status">
                                                      <a className="done" href="javascript:;">
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                      <a className="pending" href="javascript:;">
                                                          <i className="fa fa-close"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-content">
                                                      <h4 className="uppercase bold">
                                                          <a href="javascript:;">Table Sorting</a>
                                                      </h4>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                                                  </div>
                                              </li>
                                              <li className="task-list-item">
                                                  <div className="task-icon">
                                                      <a href="javascript:;">
                                                          <i className="fa fa-pencil"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-status">
                                                      <a className="done" href="javascript:;">
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                      <a className="pending" href="javascript:;">
                                                          <i className="fa fa-close"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-content">
                                                      <h4 className="uppercase bold">
                                                          <a href="javascript:;">Data Entry</a>
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
                              <li className="mt-list-item">
                                  <div className="list-todo-icon bg-white font-green-meadow">
                                      <i className="fa fa-paint-brush"></i>
                                  </div>
                                  <div className="list-todo-item green-meadow">
                                      <a className="list-toggle-container font-white" data-toggle="collapse" href="#task-2-2" aria-expanded="false">
                                          <div className="list-toggle done uppercase">
                                              <div className="list-toggle-title bold">Creative Artwork</div>
                                              <div className="badge badge-default pull-right bold">3</div>
                                          </div>
                                      </a>
                                      <div className="task-list panel-collapse collapse" id="task-2-2">
                                          <ul>
                                              <li className="task-list-item done">
                                                  <div className="task-icon">
                                                      <a href="javascript:;">
                                                          <i className="fa fa-file-image-o"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-status">
                                                      <a className="done" href="javascript:;">
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                      <a className="pending" href="javascript:;">
                                                          <i className="fa fa-close"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-content">
                                                      <h4 className="uppercase bold">
                                                          <a href="javascript:;">Concept Design</a>
                                                      </h4>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                                                  </div>
                                              </li>
                                              <li className="task-list-item done">
                                                  <div className="task-icon">
                                                      <a href="javascript:;">
                                                          <i className="fa fa-star-half-o"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-status">
                                                      <a className="done" href="javascript:;">
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                      <a className="pending" href="javascript:;">
                                                          <i className="fa fa-close"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-content">
                                                      <h4 className="uppercase bold">
                                                          <a href="javascript:;">Creative Optimization</a>
                                                      </h4>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                                                  </div>
                                              </li>
                                              <li className="task-list-item">
                                                  <div className="task-icon">
                                                      <a href="javascript:;">
                                                          <i className="fa fa-thumbs-o-up"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-status">
                                                      <a className="done" href="javascript:;">
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                      <a className="pending" href="javascript:;">
                                                          <i className="fa fa-close"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-content">
                                                      <h4 className="uppercase bold">
                                                          <a href="javascript:;">Visual Proofing</a>
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
                              <li className="mt-list-item">
                                  <div className="list-todo-icon bg-white font-yellow-crusta">
                                      <i className="fa fa-sticky-note-o"></i>
                                  </div>
                                  <div className="list-todo-item yellow-crusta">
                                      <a className="list-toggle-container" data-toggle="collapse" href="#task-3-2" aria-expanded="false">
                                          <div className="list-toggle done uppercase">
                                              <div className="list-toggle-title bold">Content Development</div>
                                              <div className="badge badge-default pull-right bold">2</div>
                                          </div>
                                      </a>
                                      <div className="task-list panel-collapse collapse" id="task-3-2">
                                          <ul>
                                              <li className="task-list-item done">
                                                  <div className="task-icon">
                                                      <a href="javascript:;">
                                                          <i className="fa fa-navicon"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-status">
                                                      <a className="done" href="javascript:;">
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                      <a className="pending" href="javascript:;">
                                                          <i className="fa fa-close"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-content">
                                                      <h4 className="uppercase bold">
                                                          <a href="javascript:;">Artwork Slicing</a>
                                                      </h4>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                                                  </div>
                                              </li>
                                              <li className="task-list-item">
                                                  <div className="task-icon">
                                                      <a href="javascript:;">
                                                          <i className="fa fa-cube"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-status">
                                                      <a className="done" href="javascript:;">
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                      <a className="pending" href="javascript:;">
                                                          <i className="fa fa-close"></i>
                                                      </a>
                                                  </div>
                                                  <div className="task-content">
                                                      <h4 className="uppercase bold">
                                                          <a href="javascript:;">Backend Integration</a>
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
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
