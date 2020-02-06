import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import Aux from "../hoc/_Aux";

class UpdateContactInfo extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Update Contact</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter contact's first name"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">Address 1</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter contact's address"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter contact's city"
                          required
                        />
                      </Form.Group>

                      <div className="special-select">
                        <Form.Group
                          controlId="exampleForm.ControlSelect1"
                          className="styled-select"
                        >
                          <Form.Label className="required">Country</Form.Label>
                          <Form.Control as="select" required>
                            <option value="" disabled selected>
                              Select contact's country
                            </option>
                            <option>United States</option>
                            <option>Mexico</option>
                          </Form.Control>
                        </Form.Group>
                      </div>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter contact's phone number"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Billing Phone Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter contact's billing phone number"
                          required
                        />
                      </Form.Group>

                      <Button variant="primary">Update</Button>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter contact's last name"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter contact's address"
                      />
                    </Form.Group>

                    <div className="special-select">
                      <Form.Group
                        controlId="exampleForm.ControlSelect1"
                        className="styled-select"
                      >
                        <Form.Label className="required">State</Form.Label>
                        <Form.Control as="select" required>
                          <option value="" disabled selected>
                            Select contact's state
                          </option>
                          <option>Texas</option>
                          <option>Utah</option>
                        </Form.Control>
                      </Form.Group>
                    </div>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">Zip Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter contact's zip code"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="required">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Please enter contact's email"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="required">
                        Billing Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Please enter contact's billing email"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Update Payment Info</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <div className="special-select">
                        <Form.Group
                          controlId="exampleForm.ControlSelect1"
                          className="styled-select"
                        >
                          <Form.Label>Account Name</Form.Label>
                          <Form.Control as="select">
                            <option value="" disabled selected>
                              Select an existing account
                            </option>
                            <option>Frost</option>
                            <option>Bank of America</option>
                          </Form.Control>
                        </Form.Group>
                      </div>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Expiration Date
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter contact's card expiration date as MM/YY"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Billing Zip Code
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter contact's card billing zip code"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter the last name on contact's card"
                          required
                        />
                      </Form.Group>

                      <Button variant="primary">Update</Button>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">
                        Credit Card Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter contact's credit card number"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="exampleForm.ControlInput1"
                      className="cvc"
                    >
                      <Form.Label className="required">CVC Number</Form.Label>
                      <span>
                        <a href="#">What's this?</a>
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Please enter contact's card cvc number"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter the first name on contact's card"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Name This Account</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter a name for this account"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default UpdateContactInfo;
