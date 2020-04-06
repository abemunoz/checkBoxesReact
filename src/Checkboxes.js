import React from "react";
import Checkbox from "./Checkbox";
export default class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    const checkBoxState = {};
    this.checkboxes = ["bike", "car", "boat", "plane", "ALL"];
    this.checkboxes.forEach(checkbox => {
      checkBoxState[checkbox] = false;
    });
    this.state = { ...checkBoxState, count: 0 };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    if (name === "ALL") {
      this.checkboxes.forEach(checkbox => {
        this.setState(prevState => ({
          [checkbox]: !prevState["ALL"]
        }));
      });
      this.setState({
        count: 4
      });
    } else {
      let newCount = value ? this.state.count + 1 : this.state.count - 1;
      if (newCount === this.checkboxes.length - 1) {
        this.setState({
          [name]: value,
          count: newCount,
          ALL: true
        });
      } else {
        this.setState({
          [name]: value,
          count: newCount,
          ALL: false
        });
      }
    }
  };

  render() {
    return (
      <form>
        {this.checkboxes.map((checkbox, index) => (
          <div key={index}>
            <Checkbox
              key={checkbox}
              name={checkbox}
              checked={this.state[checkbox]}
              handleInputChange={this.handleInputChange}
            />
            <br />
          </div>
        ))}
      </form>
    );
  }
}
