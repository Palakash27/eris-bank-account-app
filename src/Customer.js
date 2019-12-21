import React, { Component } from "react";

export class Customer extends Component {
  render() {
    const {
      "Account No": accountNo,
      Date: date,
      "Transaction Details": transactionDetails,
      "Value Date": valueDate,
      "Withdrawal AMT": withdrawalAMT,
      "Deposit AMT": depositAMT,
      "Balance AMT": balanceAMT
    } = this.props.details;
    return (
      <>
        <div className="cell">{accountNo}</div>
        <div className="cell">{date}</div>
        <div className="cell">{transactionDetails}</div>
        <div className="cell">{valueDate}</div>
        <div className="cell">{withdrawalAMT}</div>
        <div className="cell">{depositAMT}</div>
        <div className="cell">{balanceAMT}</div>
      </>
    );
  }
}

export default Customer;
