import React, { Component } from "react";
import axios from "axios";
import Cardcomponent from "./Cardcomponent";
import Searchbox from "./Searchbox";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

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
      searchtype: " "
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

  handlInput = (e) => {
    console.log(e.target.value);
    this.setState({
      searchtype: e.target.value,
    });
  };

  render() {
    let filtertype = this.state.res.filter((s)=>{
      return s.details.type.toLowerCase().includes(this.state.searchtype.toLowerCase())
    })
    return (
      <div>
        <Searchbox handlInput={this.handlInput} />
        <div>
          <Container>
            <Row>
              {filtertype.map((x) => (
                <Col sm={4}>
                  <Cardcomponent
                    id={x.id}
                    src={x.details.image}
                    name={x.name}
                    size={x.details.size}
                    price={x.details.price}
                    tag={x.details.tag}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Homepage;
