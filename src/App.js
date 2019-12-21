import React, { Component } from "react";
import data from "./data.json";
import CustomerList from "./CustomerList";
import Header from "./Header";
import "./App.css";
import TableHeader from "./TableHeader.js";

export class App extends Component {
  state = { json: data };
  render() {
    return (
      <>
        <Header />
        <TableHeader
          style={headerStyle}
          header={Object.keys(this.state.json[0])}
        />
        <CustomerList json={this.state.json} />
      </>
    );
  }
}
const headerStyle = {
  fontSize: "1px"
};

export default App;
