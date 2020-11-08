import React, { Component } from "react";

export default class OutputArea extends Component {
  render() {
    return (
      <div>
        <br /> Output :
        <textarea rows={2} cols={50} value={this.props.output}>
          {this.props.output}
        </textarea>
      </div>
    );
  }
}
