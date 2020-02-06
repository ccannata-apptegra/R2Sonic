import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import windowSize from "react-window-size";

import Aux from "../../../../../../hoc/_Aux";
import NavIcon from "./../NavIcon";
import * as actionTypes from "../../../../../../store/actions";

class NavItem extends Component {
  render() {
    let itemTitle = this.props.item.title;
    if (this.props.item.icon) {
      itemTitle = <span className="pcoded-mtext">{this.props.item.title}</span>;
    }

    let itemTarget = "";
    if (this.props.item.target) {
      itemTarget = "_blank";
    }

    let subContent;
    if (this.props.item.external) {
      subContent = (
        <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
          <NavIcon items={this.props.item} />
          {itemTitle}
        </a>
      );
    } else {
      subContent = (
        <NavLink
          to={this.props.item.url}
          className="nav-link"
          exact={true}
          target={itemTarget}
        >
          <NavIcon items={this.props.item} />
          {itemTitle}
        </NavLink>
      );
    }
    let mainContent = "";
    if (this.props.windowWidth < 992) {
      mainContent = (
        <li
          className={this.props.item.classes}
          onClick={this.props.onItemClick}
        >
          {subContent}
        </li>
      );
    } else {
      mainContent = <li className={this.props.item.classes}>{subContent}</li>;
    }

    return <Aux>{mainContent}</Aux>;
  }
}

const mapStateToProps = state => {
  return {
    layout: state.layout,
    collapseMenu: state.collapseMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
    onItemLeave: () => dispatch({ type: actionTypes.NAV_CONTENT_LEAVE })
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(windowSize(NavItem))
);
