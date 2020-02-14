import React, { Component } from "react";
import House from "../House/House.js";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }

  getHouses = () => {
    axios
      .get("/api/houses")
      .then(res => this.setState({ houses: res.data }))
      .catch(err => alert(err.response.request.response));
  };

  deleteHouse = id => {
    axios
      .delete(`/api/houses/${id}`)
      .then(() => {})
      .catch(err => alert(err.response.request.response));

    this.getHouses();
  };

  componentDidMount() {
    this.getHouses();
  }

  render() {
    const mappedHouses = this.state.houses.map(house => {
      return (
        <House key={house.id} house={house} deleteHouse={this.deleteHouse} />
      );
    });

    return (
      <div className="Dashboard">
        <div className="dashboard-container">
          <div className="dashboard-title">
            <h1 className="title">Dashboard</h1>
            <Link to="/wizard/step1">
              <button>Add New Property</button>
            </Link>
          </div>
          <div className="listings-container">
            <h2>Home Listings</h2>
            {mappedHouses}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
