import React from "react";
import Checkbox from "./Checkbox";
export default class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    const checkBoxState = {};
    this.checkboxes = ["bike", "car", "boat", "plane", "selectUnselect"];
    this.checkboxes.forEach(checkbox => {
      checkBoxState[checkbox] = false;
    });
    this.state = { ...checkBoxState, count: 0 };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name + "";
    console.log(name);
    console.log(value);
    if (name === "selectUnselect") {
      this.setState(prevState => ({
        bike: !prevState.selectUnselect,
        car: !prevState.selectUnselect,
        boat: !prevState.selectUnselect,
        plane: !prevState.selectUnselect,
        count: 4
      }));
    } else {
      let newCount = value ? this.state.count + 1 : this.state.count - 1;
      console.log(newCount);
      if (newCount === 0) {
        this.setState({
          name: value,
          count: newCount,
          selectUnselect: false
        });
      } else if (newCount === 4) {
        this.setState({
          name: value,
          count: newCount,
          selectUnselect: true
        });
      } else {
        let tempObj = {
          name: value,
          count: newCount,
          selectUnselect: false
        };
        console.log(tempObj);
        this.setState({
          name: value,
          count: newCount,
          selectUnselect: false
        });
      }
    }
    setTimeout(() => {
      // console.log(this.state);
    }, 1000);
  };

  render() {
    return (
      <form>
        {this.checkboxes.map((checkbox, index) => (
          <div>
            <Checkbox
              key={index}
              name={checkbox}
              checked={this.state.checkbox}
              handleInputChange={this.handleInputChange}
            />
            <br />
          </div>
        ))}
      </form>
    );
  }
}
