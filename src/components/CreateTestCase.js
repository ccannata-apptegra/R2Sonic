import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import Aux from "../hoc/_Aux";

class CreateTestCase extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Create a Test Case</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Receiver SN
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter receiver SN number"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Projector SN
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter projector SN number"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">SIM SN</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter SIM SN number"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">IMU SN</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter IMU SN number"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Incident Date
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please select date of incident"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          System Type
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter system type"
                          required
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">
                        Returning Distributor
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter name of returning distributor"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Returning End User</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter name of returning end user"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">
                        Contact First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter contact's first name"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">
                        Contact Last Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter contact's last name"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="required">
                        Contact Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Please enter contact's email"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">
                        Contact Phone Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter contact's phone number"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={9}>
                    <Form className="checkbox">
                      <Form.Label className="required">
                        Type of Return
                      </Form.Label>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox1"
                              label="Sonar Performance Issue"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox1"
                              label="Physical Damage"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox1"
                              label="Option Upgrades"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox1"
                              label="System Check-Up"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox1"
                              label="Trade-In"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="required">
                          Detailed Reason for Return
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="5"
                          placeholder="Please enter a reason for the return"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="required">
                          Evaluations Performed to Date
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="5"
                          placeholder="Please enter any evaluations performed to date"
                          required
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Form inline>
                      <Form.Label className="required">
                        Are you upgrading to a penetrator connector?
                      </Form.Label>
                      <Form.Group>
                        <Form.Check
                          custom
                          type="checkbox"
                          id="checkbox1"
                          label="Yes"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Check
                          custom
                          type="checkbox"
                          id="checkbox1"
                          label="No"
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>

                <Row>
                  <Col md={9}>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form inline>
                            <Form.Label className="required">
                              Do you need a new deck lead?
                            </Form.Label>
                            <Form.Group>
                              <Form.Check
                                custom
                                type="checkbox"
                                id="checkbox1"
                                label="Yes"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Check
                                custom
                                type="checkbox"
                                id="checkbox1"
                                label="No"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col md={6}>
                          <Form inline>
                            <Form.Label className="required">
                              If so, what length?
                            </Form.Label>
                            <Form.Group>
                              <Form.Check
                                custom
                                type="checkbox"
                                id="checkbox1"
                                label="15M"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Check
                                custom
                                type="checkbox"
                                id="checkbox1"
                                label="25M"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Check
                                custom
                                type="checkbox"
                                id="checkbox1"
                                label="50M"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Form inline>
                      <Form.Label className="required">
                        Will firmware be automatically updated?
                      </Form.Label>
                      <Form.Group>
                        <Form.Check
                          custom
                          type="checkbox"
                          id="checkbox1"
                          label="Yes"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Check
                          custom
                          type="checkbox"
                          id="checkbox1"
                          label="No"
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="required">
                          If you answered “No”, why not?
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="5"
                          placeholder="Please enter detailed reason why we won't be updating the firmware"
                          required
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Return Address 1
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter return address"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="required">
                          Return City
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter return city"
                          required
                        />
                      </Form.Group>

                      <div className="special-select">
                        <Form.Group
                          controlId="exampleForm.ControlSelect1"
                          className="styled-select"
                        >
                          <Form.Label className="required">
                            Return Country
                          </Form.Label>
                          <Form.Control as="select" required>
                            <option value="" disabled selected>
                              Select return country
                            </option>
                            <option>United States</option>
                            <option>Mexico</option>
                          </Form.Control>
                        </Form.Group>
                      </div>

                      <div className="special-select">
                        <Form.Group
                          controlId="exampleForm.ControlSelect1"
                          className="styled-select"
                        >
                          <Form.Label className="required">
                            Shipping Carrier
                          </Form.Label>
                          <Form.Control as="select" required>
                            <option value="" disabled selected>
                              Select shipping carrier
                            </option>
                            <option>DHL</option>
                            <option>FedEx</option>
                            <option>UPS</option>
                            <option>USPS</option>
                          </Form.Control>
                        </Form.Group>
                      </div>

                      <Button variant="primary">Create Test Case</Button>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Return Address 2</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter return address"
                      />
                    </Form.Group>

                    <div className="special-select">
                      <Form.Group
                        controlId="exampleForm.ControlSelect1"
                        className="styled-select"
                      >
                        <Form.Label className="required">
                          Return State
                        </Form.Label>
                        <Form.Control as="select" required>
                          <option value="" disabled selected>
                            Select return state
                          </option>
                          <option>Texas</option>
                          <option>Utah</option>
                        </Form.Control>
                      </Form.Group>
                    </div>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="required">
                        Return Zip Code
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter return zip code"
                        required
                      />
                    </Form.Group>

                    <div className="special-select">
                      <Form.Group
                        controlId="exampleForm.ControlSelect1"
                        className="styled-select"
                      >
                        <Form.Label className="required">
                          Shipping Method
                        </Form.Label>
                        <Form.Control as="select" required>
                          <option value="" disabled selected>
                            Select shipping method
                          </option>
                          <option>Ground</option>
                          <option>Express</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
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

export default CreateTestCase;
