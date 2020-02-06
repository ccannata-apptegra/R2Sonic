import React, { Component } from "react";
import { Row, Col, Card, Form, Button, Modal } from "react-bootstrap";

import Aux from "../hoc/_Aux";

class IndividualCase extends Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Case #123456789</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Receiver SN</dt>
                      <dd className="col-sm-8">4162</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Projector SN</dt>
                      <dd className="col-sm-8">4162-AA</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">SIM SN</dt>
                      <dd className="col-sm-8">79A46794CC</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">IMU SN</dt>
                      <dd className="col-sm-8">3339</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Incident Date</dt>
                      <dd className="col-sm-8">11/14/19</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">System Type</dt>
                      <dd className="col-sm-8">2026</dd>
                    </dl>
                  </Col>
                  <Col md={6}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Returning Distributor</dt>
                      <dd className="col-sm-8">Magellan, Inc.</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Returning End User</dt>
                      <dd className="col-sm-8">Magellan, Inc.</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Contact First Name</dt>
                      <dd className="col-sm-8">Ryan</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Contact Last Name</dt>
                      <dd className="col-sm-8">Cooper</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Contact Email</dt>
                      <dd className="col-sm-8">coop@magellan.com</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Contact Phone Number</dt>
                      <dd className="col-sm-8">213-565-7779</dd>
                    </dl>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={12}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Type of Return</dt>
                      <dd className="col-sm-8">Sonar Performance Issue</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Detailed Reason for Return</dt>
                      <dd className="col-sm-8">
                        Our R2Sonic 2026 stopped rendering graphics. It’s almost
                        as if the optics lense is damaged. Possibly due to
                        general wear and tear.
                      </dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">
                        Evaluations Performed To Date
                      </dt>
                      <dd className="col-sm-8">None</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">
                        Is this an intermittent issue?
                      </dt>
                      <dd className="col-sm-8">No</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Is this a new installation?</dt>
                      <dd className="col-sm-8">No</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">
                        Has the issue become worse over time?
                      </dt>
                      <dd className="col-sm-8">Yes</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">
                        Other than the issue described above, has the system
                        been performing to your satisfaction?
                      </dt>
                      <dd className="col-sm-8">Yes</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">
                        Are you upgrading to a penetrator connector?
                      </dt>
                      <dd className="col-sm-8">No</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Do you need a new deck lead?</dt>
                      <dd className="col-sm-8">Yes</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">If so, what length?</dt>
                      <dd className="col-sm-8">50M</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">
                        Will firmware be automatically updated?
                      </dt>
                      <dd className="col-sm-8">Yes</dd>
                    </dl>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={6}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Return Address 1</dt>
                      <dd className="col-sm-8">9400 S Normandie Ave</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Return City</dt>
                      <dd className="col-sm-8">Los Angeles</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Return Country</dt>
                      <dd className="col-sm-8">United States</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Shipping Carrier</dt>
                      <dd className="col-sm-8">FedEx</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Shipping Account</dt>
                      <dd className="col-sm-8">CB-123456789</dd>
                    </dl>
                  </Col>
                  <Col md={6}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Return Address 1</dt>
                      <dd className="col-sm-8">Suite #14</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Return State</dt>
                      <dd className="col-sm-8">CA</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Return Zip Code</dt>
                      <dd className="col-sm-8">90044</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-4">Shipping Method</dt>
                      <dd className="col-sm-8">FedEx Ground</dd>
                    </dl>
                  </Col>
                </Row>
                <hr className="thick"></hr>
                <Row>
                  <Col md={12}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>R2Sonic Comments</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="9"
                          placeholder="Please enter your somments here"
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="case-buttons">
                    <Button variant="primary">Submit Comments</Button>
                    <Button variant="primary">Issue Refund</Button>
                    <Button variant="primary">Create Return Label</Button>
                    <Button variant="primary">Close Case</Button>
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

export default IndividualCase;
