import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Card from "react-bootstrap/Card";

class Cardcomponent extends Component {
  render() {
    return (
      <div>
        <Card kye = {this.props.id}style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              <p>{this.props.size}</p>
              <p>{this.props.price}</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Button>Add to cart</Button>
        </Card>
      </div>
    );
  }
}

export default Cardcomponent;
