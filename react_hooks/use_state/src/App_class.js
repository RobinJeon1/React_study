import React from "react";
import Greeting from "./Greeting";

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    //state 초기값 설정
    this.state = {
      name: "",
      isInput: false,
    };
  }

  //input text event handler
  changeInputText = (e) => {
    //setState 함수
    this.setState({
      name: e.target.value,
      isInput: true,
    });
  };

  clearInputText = () => {
    this.setState({
      name: "",
      isInput: false,
    });
  };

  render() {
    return (
      <div>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeInputText}
          />
          <button onClick={this.clearInputText}>clear</button>
        </label>
        {this.state.isInput ? <Greeting name={this.state.name} /> : null}
      </div>
    );
  }
}

export default AppClass;
