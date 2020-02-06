import React from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";

import Aux from "../hoc/_Aux";
import ContactMenu from "../app/layout/AdminLayout/ContactMenu/index";

import Avatar1 from "../assets/images/user/avatar-1.jpg";

class ViewContacts extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col md={11}>
            <Card>
              <Card.Header id="A">
                <Card.Title as="h5">A</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header id="B">
                <Card.Title as="h5">B</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="C">
                <Card.Title as="h5">C</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="D">
                <Card.Title as="h5">D</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="E">
                <Card.Title as="h5">E</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="F">
                <Card.Title as="h5">F</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="G">
                <Card.Title as="h5">G</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="H">
                <Card.Title as="h5">H</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="I">
                <Card.Title as="h5">I</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="J">
                <Card.Title as="h5">J</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="K">
                <Card.Title as="h5">K</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="L">
                <Card.Title as="h5">L</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="M">
                <Card.Title as="h5">M</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="N">
                <Card.Title as="h5">N</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="O">
                <Card.Title as="h5">O</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="P">
                <Card.Title as="h5">P</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="Q">
                <Card.Title as="h5">Q</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="R">
                <Card.Title as="h5">R</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="S">
                <Card.Title as="h5">S</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="T">
                <Card.Title as="h5">T</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="U">
                <Card.Title as="h5">U</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="V">
                <Card.Title as="h5">V</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="W">
                <Card.Title as="h5">W</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="X">
                <Card.Title as="h5">X</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="Y">
                <Card.Title as="h5">Y</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header id="Z">
                <Card.Title as="h5">Z</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>View Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <img className="img-radius" src={Avatar1} alt="User" />
                      </th>
                      <th>Bill Bingham </th>
                      <td>
                        <a href="mailto:bbingham@nova.com">bbingham@nova.com</a>
                      </td>
                      <td>718-699-4254</td>
                      <td>
                        <Button variant="primary">View Contact</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}>
            <div>
              <ContactMenu />
            </div>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default ViewContacts;
