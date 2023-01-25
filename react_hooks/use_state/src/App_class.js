import React from "react";
import Greeting from "./Greeting";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    //state 초기값 설정
    this.state = {
      name: "",
      isInput: false,
    };
  }

  //input text내 event 함수
  onChange = (e) => {
    //setState 함수
    this.setState({
      name: e.target.value,
      isInput: true,
    });
  };

  render() {
    return (
      <div>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.onChange} />
        </label>
        {this.state.isInput ? <Greeting name={this.state.name} /> : null}
      </div>
    );
  }
}

export default App2;
