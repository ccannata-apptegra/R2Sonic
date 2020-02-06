import React from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";

import Aux from "../hoc/_Aux";

class SearchResults extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Search Results</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Search Result</th>
                      <th>Search Preview</th>
                      <th className="text-right">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td className="text-right">
                        <Button variant="primary" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td className="text-right">
                        <Button variant="primary" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td className="text-right">
                        <Button variant="primary" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default SearchResults;
