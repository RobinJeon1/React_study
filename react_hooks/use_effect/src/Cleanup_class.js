import { Component } from "react";

class Hello extends Component {
  componentDidMount() {
    console.log("created");
  }

  componentWillUnmount() {
    console.log("destroyed");
  }

  render() {
    return <h1>Hello!!</h1>;
  }
}

class AppCleanupClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  onClick = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>
          {this.state.isShow ? "Hide" : "Show"}
        </button>
        {this.state.isShow ? <Hello /> : null}
      </div>
    );
  }
}

export default AppCleanupClass;
