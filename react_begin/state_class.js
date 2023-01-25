class Greeting extends React.Component {
  render() {
    let name = this.props.name;
    return <h1>Hello, {name}!</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    //state 초기값 설정
    this.state = {
      name: "",
    };
  }

  //input text내 event 함수
  onChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.onChange} />
        </label>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
