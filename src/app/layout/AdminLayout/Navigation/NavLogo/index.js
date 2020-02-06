import React from "react";
import DEMO from "./../../../../../store/constant";
import Aux from "../../../../../hoc/_Aux";

import { ReactComponent as Logo } from "../../../../../assets/images/logo.svg";

const navLogo = props => {
  let toggleClass = ["mobile-menu"];
  if (props.collapseMenu) {
    toggleClass = [...toggleClass, "on"];
  }

  return (
    <Aux>
      <div className="navbar-brand header-logo">
        <a href={DEMO.BLANK_LINK} className="b-brand">
          <Logo />
        </a>
      </div>
    </Aux>
  );
};

export default navLogo;
