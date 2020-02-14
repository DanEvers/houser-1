import React from "react";
import Header from "./Components/Header/Header.js";
import routes from "./routes.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
