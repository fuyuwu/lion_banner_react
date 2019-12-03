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
    // console.log('btnText', this.props.btnText)//收合
    const { btnName, btnText, bannerClass } = this.props;
    // const up = <FontAwesomeIcon icon={up} />
    return (
      <div className={btnName} onClick={this.props.onClick}>
        {this.props.btnText}
      </div>
    );
  }
}

export default Button;
