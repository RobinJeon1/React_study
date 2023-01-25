import { Component } from "react";

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      keyword: "",
    };
  }
  // counter 함수
  counter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // search bar 함수
  onChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  // Component가 모두 로딩 되었을때 실행
  componentDidMount() {
    console.log("Component 가 모두 로딩됨");
  }

  // Component의 props 나 state 값이 update 되었을 때 실행
  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyword !== this.state.keyword) {
      console.log("use input text:", this.state.keyword);
    } else if (prevState.count !== this.state.count) {
      console.log("use counter:", this.state.count);
    }
  }

  // Component가 제거될 때 실행
  componentWillUnmount() {}

  render() {
    console.log("render"); //state가 변경될 때마다
    return (
      <div>
        <input
          value={this.state.keyword}
          onChange={this.onChange}
          type="text"
          placeholder="Search here..."
        />
        <h1>{this.state.count}</h1>
        <button onClick={this.counter}>Click here!</button>
      </div>
    );
  }
}

export default AppClass;
