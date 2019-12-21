import React, { Component } from "react";

export class TableHeader extends Component {
  render() {
    return (
      <div className="table-header">
        {this.props.header.map(head => (
          <div className="cell cell-header">{head}</div>
        ))}
      </div>
    );
  }
}

export default TableHeader;
