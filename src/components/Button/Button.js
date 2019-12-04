import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    console.log(this.props); //object
  }

  componentDidMount() {
    console.log("didMount");
  }

  render() {
    const { btnName, btnText } = this.props;
    return (
      <div className={btnName} onClick={this.props.onClick}>
        {btnText}
      </div>
    );
  }
}

export default Button;
