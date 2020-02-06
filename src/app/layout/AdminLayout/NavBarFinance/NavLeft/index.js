import React, { Component } from "react";
import { connect } from "react-redux";
import windowSize from "react-window-size";

import NavSearch from "./NavSearch";
import Aux from "../../../../../hoc/_Aux";
import * as actionTypes from "../../../../../store/actions";

class NavLeft extends Component {
  render() {
    let searchClass = ["financial-search"];

    return (
      <Aux>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div id="financial-search" className={searchClass.join(" ")}>
              <label>Search {document.title}</label>
              <div className="input-group">
                <input
                  type="text"
                  id="m-search"
                  className="form-control"
                  placeholder="Search . . ."
                />
                <span
                  className="input-group-append search-btn btn btn-primary"
                  onClick={this.searchOnHandler}
                >
                  <i className="feather icon-search input-group-text" />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFullScreen: state.isFullScreen,
    rtlLayout: state.rtlLayout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFullScreen: () => dispatch({ type: actionTypes.FULL_SCREEN })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(NavLeft));
