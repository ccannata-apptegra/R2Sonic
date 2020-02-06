import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import windowSize from "react-window-size";

import Aux from "../../../../../hoc/_Aux";
import NavGroup from "./NavGroup";
import DEMO from "../../../../../store/constant";
import * as actionTypes from "../../../../../store/actions";

import avatar1 from "../../../../../assets/images/user/avatar-1.jpg";

class NavContent extends Component {
  state = {
    scrollWidth: 0,
    prevDisable: true,
    nextDisable: false
  };

  scrollPrevHandler = () => {
    const wrapperWidth = document.getElementById("sidenav-wrapper").clientWidth;

    let scrollWidth = this.state.scrollWidth - wrapperWidth;
    if (scrollWidth < 0) {
      this.setState({ scrollWidth: 0, prevDisable: true, nextDisable: false });
    } else {
      this.setState({ scrollWidth: scrollWidth, prevDisable: false });
    }
  };

  render() {
    let searchClass = ["main-search"];

    const navItems = this.props.navigation.map(item => {
      switch (item.type) {
        case "group":
          return (
            <NavGroup layout={this.props.layout} key={item.id} group={item} />
          );
        default:
          return false;
      }
    });

    let mainContent = "";
    mainContent = (
      <div className="navbar-content r2-scroll">
        <div className="logged-user">
          <div className="media friendlist-box align-items-center justify-content-center m-b-20">
            <div className="m-r-10 photo-table">
              <a href={DEMO.BLANK_LINK}>
                <img
                  className="rounded-circle"
                  style={{ width: "40px" }}
                  src={avatar1}
                  alt="activity-user"
                />
              </a>
            </div>
            <div className="media-body">
              <p className="m-0 d-inline">Paul Ingram</p>
              <p className="m-0 d-inline">
                <a href="#">
                  <em>Log Out</em>
                </a>
              </p>
            </div>
          </div>
        </div>
        <PerfectScrollbar>
          <ul className="nav pcoded-inner-navbar">{navItems}</ul>
          <div id="main-search" className={searchClass.join(" ")}>
            <h5>Search</h5>
            <div className="input-group">
              <input
                type="text"
                id="m-search"
                className="form-control"
                placeholder="Search . . ."
                style={{ width: this.state.searchString }}
              />
              <span
                className="input-group-append search-btn btn btn-primary"
                onClick={this.searchOnHandler}
              >
                <i className="feather icon-search input-group-text" />
              </span>
            </div>
            <p>
              <a href="">Advanced Search</a>
            </p>
          </div>
          <div className="footer-copyright text-center fixed-bottom">
            <em>
              © 2020 <a href="https://www.r2sonic.com/">R2Sonic</a>. All rights
              reserved.
            </em>
          </div>
        </PerfectScrollbar>
      </div>
    );
    return <Aux>{mainContent}</Aux>;
  }
}

const mapStateToProps = state => {
  return {
    layout: state.layout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNavContentLeave: () => dispatch({ type: actionTypes.NAV_CONTENT_LEAVE })
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(windowSize(NavContent))
);
