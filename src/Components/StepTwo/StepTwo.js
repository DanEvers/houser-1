import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import store, { STEPTWO } from "../../store.js";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      img: reduxState.img
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  nextStep = () => {
    window.location = "/wizard/step3";
  };

  dispatchState = () => {
    const { img } = this.state;
    store.dispatch({
      type: STEPTWO,
      payload: {
        img
      }
    });
  };

  componentDidMount() {
    const reduxState = store.getState();
    store.subscribe(() => {
      this.setState({
        img: reduxState.img
      });
    });
  }

  render() {
    const { img } = this.state;

    return (
      <div>
        <h1>Step 2</h1>
        <form onSubmit={this.nextStep}>
          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            id="img"
            name="img"
            value={img}
            onChange={this.changeHandler}
          />
          <Link to="/wizard/step1" onClick={this.dispatchState}>
            <button>Previous Step</button>
          </Link>
          {/* <input type="submit" value="Next Step" /> */}
          <Link to="/wizard/step3" onClick={this.dispatchState}>
            <button>Next Step</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default StepTwo;
