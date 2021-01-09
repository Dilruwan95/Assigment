import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Card from "react-bootstrap/Card";

class Cardcomponent extends Component {
  render() {
    return (
      <div>
              <Card kye={this.props.id} style={{ width: "18rem" }}>
              <Card.Text>{this.props.tag} </Card.Text>
                <Card.Img variant="top" src={this.props.src} />
                <Card.Body>
                  <Card.Title>{this.props.name}</Card.Title>
                  <Card.Text>
                    {this.props.size}   
                  </Card.Text>
                  <Card.Text>
                  {this.props.price}
                  </Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
      </div>
    );
  }
}

export default Cardcomponent;
