import React, { Component } from "react";
import axios from "axios";
import Cardcomponent from "./Cardcomponent";
import Filtercomponet from "./filtercomponent";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      res: [
        {
          id: "",
          name: "",
          details: {
            price: "",
            size: "",
            tag: "",
            image: "",
            type: "",
          },
        },
      ],
      itemtype: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          res: response.data,
        });
        console.log(this.state.res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    // const[res,itemtype] = this.state
    // const filtercloths = res.filter(cloth => (
    //     cloth.res.toLOwercase().include(itemtype.toLOwercase())
    // ))
    return (
      <div>
        {/* <Filtercomponet
          placeholder="enter type"
          handlechange={(e) => this.setState({ itemtype: e.target.value })}
        /> */}
      
          <div>
            <Container> 
              <Row>
                <Col>kbkbdbvb</Col>
              </Row>
              <Row>
              {this.state.res.map((x) => (
                <Col sm={4}>
                  <Cardcomponent
                    id={x.id}
                    src={x.details.image}
                    name={x.name}
                    size={x.details.size}
                    price={x.details.price}
                    tag = {x.details.tag}
                  />
                </Col> ))}
              </Row>  
            </Container>
          </div>
      
      </div>
    );
  }
}

export default Homepage;
