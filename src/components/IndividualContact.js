import React, { Component } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import Aux from "../hoc/_Aux";

class IndividualContact extends Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Contact - Tim Bradley</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">First Name</dt>
                      <dd className="col-sm-7">Tim</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Address 1</dt>
                      <dd className="col-sm-7">1251 Walnut Way</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">City</dt>
                      <dd className="col-sm-7">Austin</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Country</dt>
                      <dd className="col-sm-7">USA</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Phone Number</dt>
                      <dd className="col-sm-7">(512) 475-7367</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Billing Phone Number</dt>
                      <dd className="col-sm-7">(512) 475-7367</dd>
                    </dl>
                  </Col>
                  <Col md={6}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Last Name</dt>
                      <dd className="col-sm-7">Bradley</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Address 2</dt>
                      <dd className="col-sm-7">Suite 2</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">State</dt>
                      <dd className="col-sm-7">TX</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Zip Code</dt>
                      <dd className="col-sm-7">78652</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Email</dt>
                      <dd className="col-sm-7">tbradley@gmail.com</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Billing Email</dt>
                      <dd className="col-sm-7">tbradley@gmail.com</dd>
                    </dl>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={6}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Account Name</dt>
                      <dd className="col-sm-7">Bank of America</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Expiration Date</dt>
                      <dd className="col-sm-7">06/23</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Billing Zip Code</dt>
                      <dd className="col-sm-7">78652</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Cardholder First Name</dt>
                      <dd className="col-sm-7">Tim</dd>
                    </dl>
                  </Col>
                  <Col md={6}>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Credit Card Number</dt>
                      <dd className="col-sm-7">123456789123456789</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">CVC Number</dt>
                      <dd className="col-sm-7">123</dd>
                    </dl>

                    <dl className="dl-horizontal row">
                      <dt className="col-sm-5">Cardholder Last Name</dt>
                      <dd className="col-sm-7">Bradley</dd>
                    </dl>
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

export default IndividualContact;
