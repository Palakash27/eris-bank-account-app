import React, { Component } from "react";
import Customer from "./Customer";

export class CustomersList extends Component {
  render() {
    return (
      <ul className="customer-list">
        {this.props.json.map(customer => {
          return (
            <li className="customer-list-item">
              <Customer details={customer} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CustomersList;
