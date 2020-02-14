import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import StepOne from "../StepOne/StepOne.js";
import StepTwo from "../StepTwo/StepTwo.js";
import StepThree from "../StepThree/StepThree.js";
import store, { CANCEL } from "../../store.js";
// import axios from "axios";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // address: "",
      // city: "",
      // state: "",
      // zip: ""
    };

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

  // addNewHouse = e => {
  //   console.log("hit");
  //   e.preventDefault();

  //   const { name, address, city, state, zip } = this.state;
  //   axios
  //     .post("/api/houses", { name, address, city, state, zip: parseInt(zip) })
  //     .then(() => {
  //       this.setState({ name: "", address: "", city: "", state: "", zip: "" });
  //     })
  //     .catch(err => console.log("addNewHouse error: ", err));

  //   window.location = "/";
  // };

  render() {
    // const { name, address, city, state, zip } = this.state;

    return (
      <div>
        <h1>Wizard</h1>
        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
        <Link to="/" onClick={this.clearItems}>
          <button>Cancel</button>
        </Link>

        {/* <form onSubmit={this.addNewHouse}> */}
        {/*   <label htmlFor="name">Name</label> */}
        {/*   <input */}
        {/*     type="text" */}
        {/*     id="name" */}
        {/*     name="name" */}
        {/*     value={name} */}
        {/*     onChange={this.changeHandler} */}
        {/*   /> */}
        {/*   <label htmlFor="address">Address</label> */}
        {/*   <input */}
        {/*     type="text" */}
        {/*     id="address" */}
        {/*     name="address" */}
        {/*     value={address} */}
        {/*     onChange={this.changeHandler} */}
        {/*   /> */}
        {/*   <label htmlFor="city">City</label> */}
        {/*   <input */}
        {/*     type="text" */}
        {/*     id="city" */}
        {/*     name="city" */}
        {/*     value={city} */}
        {/*     onChange={this.changeHandler} */}
        {/*   /> */}
        {/*   <label htmlFor="state">State</label> */}
        {/*   <input */}
        {/*     type="text" */}
        {/*     id="state" */}
        {/*     name="state" */}
        {/*     value={state} */}
        {/*     onChange={this.changeHandler} */}
        {/*   /> */}
        {/*   <label htmlFor="zip">Zip Code</label> */}
        {/*   <input */}
        {/*     type="text" */}
        {/*     id="zip" */}
        {/*     name="zip" */}
        {/*     value={zip} */}
        {/*     onChange={this.changeHandler} */}
        {/*   /> */}
        {/*   <Link to="/"> */}
        {/*     <button>Cancel</button> */}
        {/*   </Link> */}
        {/*   <input type="submit" value="Complete" /> */}
        {/* </form> */}
      </div>
    );
  }
}

export default Wizard;
