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
        <div className="image-container">
          <img src={house.img} alt="house" />
        </div>
        <div className="text-container">
          <h4>Property Name: {house.name}</h4>
          <h4>Address: {house.address}</h4>
          <h4>City: {house.city}</h4>
          <h4>State: {house.state}</h4>
          <h4>Zip: {house.zip}</h4>
          <h4>Monthly Mortgage: {house.mortgage}</h4>
          <h4>Desired Rent: {house.rent}</h4>
        </div>
        <div className="delete-container">
          <button onClick={() => this.props.deleteHouse(house.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default House;
