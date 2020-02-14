import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store, { STEPTHREE } from "../../store.js";
import "./StepThree.css";

class StepThree extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  dispatchState = () => {
    const { mortgage, rent } = this.state;
    store.dispatch({
      type: STEPTHREE,
      payload: {
        mortgage,
        rent
      }
    });
  };

  addNewHouse = e => {
    console.log("hit");
    e.preventDefault();

    const { name, address, city, state, zip, img } = store.getState();

    const { mortgage, rent } = this.state;

    axios
      .post("/api/houses", {
        name,
        address,
        city,
        state,
        zip: parseInt(zip),
        img,
        mortgage: parseInt(mortgage),
        rent: parseInt(rent)
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log("addNewHouse error: ", err));

    window.location = "/";
  };

  componentDidMount() {
    const reduxState = store.getState();
    store.subscribe(() => {
      this.setState({ mortgage: reduxState.mortgage, rent: reduxState.rent });
    });
  }

  render() {
    const { mortgage, rent } = this.state;

    return (
      <div>
        <form onSubmit={this.addNewHouse}>
          <label htmlFor="name">Monthly Mortgage Amount</label>
          <input
            type="text"
            id="mortgage"
            name="mortgage"
            value={mortgage}
            onChange={this.changeHandler}
          />
          <label htmlFor="address">Desired Monthly Rent</label>
          <input
            type="text"
            id="rent"
            name="rent"
            value={rent}
            onChange={this.changeHandler}
          />
          <Link to="/wizard/step2" onClick={this.dispatchState}>
            <button>Previous Step</button>
          </Link>
          <input type="submit" value="Complete" />
        </form>
      </div>
    );
  }
}

export default StepThree;
