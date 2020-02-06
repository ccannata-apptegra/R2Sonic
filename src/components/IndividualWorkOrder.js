import React, { Component } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";

import Aux from "../hoc/_Aux";

class IndividualWorkOrder extends Component {
  render() {
    return (
      <Aux>
        <div className="work-order">
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Row>
                    <Col md={6}>
                      <Card.Title as="h5">Work Order - Magellan</Card.Title>
                    </Col>
                    <Col md={6}>
                      <Card.Title as="em" className="pull-right">
                        Case #123456789
                      </Card.Title>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <address>
                        <strong>R2Sonic</strong>
                        <br />
                        5307 Industrial Oaks Blvd #120
                        <br />
                        Austin, TX 78735
                        <br />
                        <div title="Phone">(512) 891-0000</div>
                      </address>
                    </Col>
                    <Col md={6}>
                      <h2 className="pull-right">12/30/2019</h2>
                    </Col>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col md={12}>
                      <Table responsive hover>
                        <thead>
                          <tr>
                            <th>Description</th>
                            <th>Part Number(s)</th>
                            <th>
                              <div className="pull-right">Amount</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>R2Sonic 2024 Multibeam Echosounder</td>
                            <td>
                              <em>#123456789</em>
                            </td>
                            <td>
                              <strong className="pull-right">$9,997.87</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>R2Sonic 2026 Multibeam Echosounder</td>
                            <td>
                              <em>#987654321</em>
                            </td>
                            <td>
                              <strong className="pull-right">$14,997.87</strong>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7}>
                      <dt>To:</dt>
                      <address>
                        <strong>Magellan</strong>
                        <br />
                        Ryan Cooper
                        <br />
                        2600 S Hoover St
                        <br />
                        Los Angeles, CA 90007
                        <br />
                        <div title="Phone">(213) 565-7779</div>
                      </address>
                    </Col>
                    <Col md={5}>
                      <dl className="dl-horizontal row">
                        <dt className="col-sm-6">Subtotal</dt>
                        <dd className="col-sm-6">
                          <div className="pull-right">$24,995.74</div>
                        </dd>
                      </dl>
                      <dl className="dl-horizontal row">
                        <dt className="col-sm-6">Tax</dt>
                        <dd className="col-sm-6">
                          <div className="pull-right">$1,999.66</div>
                        </dd>
                      </dl>
                      <dl className="dl-horizontal row">
                        <dt className="col-sm-6">Shipping</dt>
                        <dd className="col-sm-6">
                          <div className="pull-right">$600</div>
                        </dd>
                      </dl>
                      <dl className="dl-horizontal row">
                        <dt className="col-sm-6">Total</dt>
                        <dd className="col-sm-6">
                          <div className="pull-right total">$27,595.40</div>
                        </dd>
                      </dl>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7}>
                      <dt>Gateway</dt>
                    </Col>
                    <Col md={5}>
                      <dl className="dl-horizontal row">
                        <dt className="col-sm-6">Transaction ID</dt>
                        <dt className="col-sm-6">
                          <div className="pull-right">Amount Due</div>
                        </dt>
                      </dl>
                    </Col>
                  </Row>
                  <hr className="thick"></hr>
                  <Row>
                    <Col md={7}>
                      <dd>Cut Check</dd>
                    </Col>
                    <Col md={5}>
                      <dl className="dl-horizontal row">
                        <dd className="col-sm-6">
                          <em>#987654321</em>
                        </dd>
                        <dd className="col-sm-6">
                          <div className="pull-right total">$27,595.40</div>
                        </dd>
                      </dl>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Aux>
    );
  }
}

export default IndividualWorkOrder;
