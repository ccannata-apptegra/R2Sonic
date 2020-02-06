import React, { Component } from "react";
import { Nav, Card } from "react-bootstrap";

import Aux from "../../../../hoc/_Aux";

class ContactMenu extends Component {
  state = {
    listOpen: false
  };

  render() {
    return (
      <Aux>
        <Card className="contact-menu">
          <div>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#A">A</Nav.Link>
              <Nav.Link href="#B">B</Nav.Link>
              <Nav.Link href="#C">C</Nav.Link>
              <Nav.Link href="#D">D</Nav.Link>
              <Nav.Link href="#E">E</Nav.Link>
              <Nav.Link href="#F">F</Nav.Link>
              <Nav.Link href="#G">G</Nav.Link>
              <Nav.Link href="#H">H</Nav.Link>
              <Nav.Link href="#I">I</Nav.Link>
              <Nav.Link href="#J">J</Nav.Link>
              <Nav.Link href="#K">K</Nav.Link>
              <Nav.Link href="#L">L</Nav.Link>
              <Nav.Link href="#M">M</Nav.Link>
              <Nav.Link href="#N">N</Nav.Link>
              <Nav.Link href="#O">O</Nav.Link>
              <Nav.Link href="#P">P</Nav.Link>
              <Nav.Link href="#Q">Q</Nav.Link>
              <Nav.Link href="#R">R</Nav.Link>
              <Nav.Link href="#S">S</Nav.Link>
              <Nav.Link href="#T">T</Nav.Link>
              <Nav.Link href="#U">U</Nav.Link>
              <Nav.Link href="#V">V</Nav.Link>
              <Nav.Link href="#W">W</Nav.Link>
              <Nav.Link href="#X">X</Nav.Link>
              <Nav.Link href="#Y">Y</Nav.Link>
              <Nav.Link href="#Z">Z</Nav.Link>
            </Nav>
          </div>

          {/*<ul>
            <li>
              <a href="#A">A</a>
            </li>
            <li>
              <a href="#B">B</a>
            </li>
            <li>
              <a href="#C">C</a>
            </li>
            <li>
              <a href="#D">D</a>
            </li>
            <li>
              <a href="#E">E</a>
            </li>
            <li>
              <a href="#F">F</a>
            </li>
            <li>
              <a href="#G">G</a>
            </li>
            <li>
              <a href="#H">H</a>
            </li>
            <li>
              <a href="#I">I</a>
            </li>
            <li>
              <a href="#J">J</a>
            </li>
            <li>
              <a href="#K">K</a>
            </li>
            <li>
              <a href="#L">L</a>
            </li>
            <li>
              <a href="#M">M</a>
            </li>
            <li>
              <a href="#N">N</a>
            </li>
            <li>
              <a href="#O">O</a>
            </li>
            <li>
              <a href="#P">P</a>
            </li>
            <li>
              <a href="#Q">Q</a>
            </li>
            <li>
              <a href="#R">R</a>
            </li>
            <li>
              <a href="#S">S</a>
            </li>
            <li>
              <a href="#T">T</a>
            </li>
            <li>
              <a href="#U">U</a>
            </li>
            <li>
              <a href="#V">V</a>
            </li>
            <li>
              <a href="#W">W</a>
            </li>
            <li>
              <a href="#X">X</a>
            </li>
            <li>
              <a href="#Y">Y</a>
            </li>
            <li>
              <a href="#Z">Z</a>
            </li>
         </ul>*/}
        </Card>
      </Aux>
    );
  }
}

export default ContactMenu;
