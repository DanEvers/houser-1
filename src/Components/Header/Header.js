import React, { Component } from "react";
import "./Header.css";
import icon from "./icon.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <div>
          <img src={icon} alt="logo" />
          <h1>Houser</h1>
        </div>
      </header>
    );
  }
}

export default Header;
