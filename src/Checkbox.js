import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <label>
        I have a {this.props.name}
        <input
          key={this.props.name}
          name={this.props.name}
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.handleInputChange}
        />
      </label>
    );
  }
}
