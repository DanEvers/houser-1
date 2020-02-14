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
        <img src={house.img} alt="house" />
        <h4>Property Name: {house.name}</h4>
        <h4>Address: {house.address}</h4>
        <h4>City: {house.city}</h4>
        <h4>State: {house.state}</h4>
        <h4>Zip: {house.zip}</h4>
        <h4>Monthly Mortgage: {house.mortgage}</h4>
        <h4>Desired Rent: {house.rent}</h4>
        <button onClick={() => this.props.deleteHouse(house.id)}>Delete</button>
      </div>
    );
  }
}

export default House;
