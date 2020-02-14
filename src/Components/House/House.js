import React, { Component } from "react";
import "./House.css";

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { house } = this.props;
    return (
      <div className="House">
        <h4>Property Name: {house.name}</h4>
        <h4>Address: {house.address}</h4>
        <h4>City: {house.city}</h4>
        <h4>State: {house.state}</h4>
        <h4>Zip: {house.zip}</h4>
        <button onClick={() => this.props.deleteHouse(house.id)}>Delete</button>
      </div>
    );
  }
}

export default House;
