import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../hoc/_Aux";

import LineChart from "../components/Charts/Nvd3Chart/LineChart";

class Home extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Saved Search 1</Card.Title>
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </Card.Header>
              <Card.Body>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                      $249.95
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">50%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Saved Search 2</Card.Title>
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </Card.Header>
              <Card.Body>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-down text-c-red f-30 m-r-5" />{" "}
                      $2,942.32
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">36%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme2"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow="35"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Saved Search 3</Card.Title>
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </Card.Header>
              <Card.Body>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                      $8,638.32
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">70%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Sales</Card.Title>
              </Card.Header>
              <Card.Body>
                <div>
                  <LineChart />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Home;
