import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNewHouse = e => {
    console.log("hit");
    const { name, address, city, state, zip } = this.state;
    axios
      .post("/api/houses", { name, address, city, state, zip: parseInt(zip) })
      .then(() => {
        this.setState({ name: "", address: "", city: "", state: "", zip: "" });
      })
      .catch(err => console.log("addNewHouse error: ", err));
    e.preventDefault();

    window.location = "/";
  };

  render() {
    const { name, address, city, state, zip } = this.state;

    return (
      <div>
        <h1>Wizard</h1>
        <form onSubmit={this.addNewHouse}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.changeHandler}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={this.changeHandler}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={this.changeHandler}
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={this.changeHandler}
          />
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={zip}
            onChange={this.changeHandler}
          />
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <input type="submit" value="Complete" />
        </form>
      </div>
    );
  }
}

export default Wizard;
