import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import Aux from "../hoc/_Aux";

class AdvancedSearch extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Advanced Search</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Search by Key Word</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter a key word"
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Search by Receiver SN</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter a receiver SN"
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Search by Projector SN</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter a projector SN"
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Search by SIM SN</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter a SIM SN"
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Search by IMU SN</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter a IMU SN"
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Search by Incident Date</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter an incident date"
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Search by System Type</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Please enter a system type"
                        />
                      </Form.Group>

                      <Button variant="primary">Search</Button>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Search by Case Worker</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter a case worker"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Search by Returning Distributor</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter a returning distributor"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Search by Returning End User</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter a returning end user"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Search by Contact First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter a contact's first name"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Search by Contact Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter a contact's last name"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Search by Contact Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter a contact's email"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Search by Contact Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter a contact's phone number"
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

export default AdvancedSearch;
