import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import store, { STEPONE } from "../../store.js";

class StepOne extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  nextStep = () => {
    window.location = "/wizard/step2";
  };

  dispatchState = () => {
    const { name, address, city, state, zip } = this.state;
    store.dispatch({
      type: STEPONE,
      payload: {
        name,
        address,
        city,
        state,
        zip
      }
    });
  };

  componentDidMount() {
    const reduxState = store.getState();
    store.subscribe(() => {
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      });
    });
  }

  render() {
    const { name, address, city, state, zip } = this.state;

    return (
      <div>
        <h1>Step 1</h1>
        <form onSubmit={this.nextStep}>
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
          {/* <input type="submit" value="Next Step" /> */}
          <Link to="/wizard/step2" onClick={this.dispatchState}>
            <button>Next Step</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default StepOne;
