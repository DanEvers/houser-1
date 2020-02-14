import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import StepOne from "../StepOne/StepOne.js";
import StepTwo from "../StepTwo/StepTwo.js";
import StepThree from "../StepThree/StepThree.js";
import store, { CANCEL } from "../../store.js";
import "./Wizard.css";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clearItems = () => {
    store.dispatch({ type: CANCEL });
  };

  render() {
    return (
      <div className="Wizard">
        <div className="wizard-container">
          <Route path="/wizard/step1" component={StepOne} />
          <Route path="/wizard/step2" component={StepTwo} />
          <Route path="/wizard/step3" component={StepThree} />
          <div id="special-button" className="wizard-button-container">
            <Link to="/" onClick={this.clearItems}>
              <button className="wizard-cancel-button">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
