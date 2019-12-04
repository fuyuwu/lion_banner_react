import React, { Component } from "react";
import "../../index";
import Button from "../Button/Button";
import Img from "./imgs/banner.png";

class Banner extends Component {
  static defaultProps = {
    openAtStart: true, // [boolean] true | false
    autoToggle: 3000, // [boolean|number] true | false | 3000
    button: {
      closeText: "收合",
      openText: "展開",
      class: "btn"
    },
    class: {
      closed: "closed",
      closing: "closing",
      opened: "opened",
      opening: "opening"
    },
    whenTransition: function() {
      console.log("whenTransition");
    },
    transition: true
  };

  state = {
    transTimes: 600,
    atStart: this.props.openAtStart ? 2 : 0, //開:關
    bannerClass: ["closed", "opening", "opened", "closing"], //0,1,2,3
    addedClass: [
      this.props.class.closed,
      this.props.class.opening,
      this.props.class.opened,
      this.props.class.closing
    ]
    //注意:由於動作事件和class綁定,一旦更名就會掛,所以要新增一組class來區分!!
  };

  timer = "";
  whenTrans = () => {
    this.timer = setInterval(() => {
      this.props.whenTransition();
    }, this.state.transTimes / 30);
    setTimeout(() => {
      this.clearTimer(this.timer);
      if (this.state.atStart < 3) {
        this.setState({ atStart: this.state.atStart + 1 });
      } else {
        this.setState({ atStart: 0 });
      }
    }, this.state.transTimes);
  };

  autoToggle = () => {
    let autoToggle = this.props.autoToggle;
    console.log(autoToggle);
    if (typeof autoToggle === "number") {
      setTimeout(() => {
        this.toggle();
      }, autoToggle);
    } else if (autoToggle === true) {
      setTimeout(() => {
        this.toggle();
      }, 2000);
    }
  };

  //設定autoToggle
  componentDidMount() {
    this.autoToggle();
  }

  toggle = () => {
    if (this.state.atStart === 0) {
      this.close();
    } else {
      this.open();
    }
  };

  //設定各個狀態
  open = () => {
    console.log("open");
    if (this.props.transition) {
      if (this.state.atStart === 2) {
        this.whenTrans(); //whentransition start
        this.setState({ atStart: this.state.atStart + 1 });
      }
    } else {
      this.setState({ atStart: 0 }); //更新state狀態值
    }
  };

  close = () => {
    console.log("close");
    if (this.props.transition) {
      if (this.state.atStart === 0) {
        this.whenTrans(); //whentransition start
        this.setState({ atStart: this.state.atStart + 1 });
      }
    } else {
      this.setState({ atStart: 2 }); //更新state狀態值
    }
  };

  clearTimer = timer => {
    clearInterval(timer);
    clearTimeout(timer);
  };

  render() {
    console.log("props", this.props);
    // console.log('bannerClass', this.state.bannerClass)//["closed", "opening", "opened", "closing"]
    let transition = this.props.transition ? "transition" : "";
    console.log("openAtStart=", this.state.atStart);
    const { bannerClass, addedClass, atStart } = this.state;
    return (
      <div
        className={`banner ${transition} ${bannerClass[atStart]} ${addedClass[atStart]}`}
      >
        <a className="wrap" href="#">
          <img
            className="img"
            src={Img}
            title="輸入廣告促銷說明文字"
            alt="輸入廣告促銷說明文字"
          />
        </a>
        <Button
          btnName={this.props.button.class}
          onClick={this.toggle}
          btnText={
            atStart === 0 || atStart === 3
              ? this.props.button.openText
              : this.props.button.closeText
          }
        ></Button>
        {/* 在組件的方法中使用屬性物件,使用this.props取得物件屬性 */}
      </div>
    );
  }
}
export default Banner;
