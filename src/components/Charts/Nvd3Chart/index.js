import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../../hoc/_Aux/index";
import LineChart from "./LineChart";

class Nvd3Chart extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Line Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <LineChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Nvd3Chart;
