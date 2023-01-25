/** Component 선언 ( class ) */
class App extends React.Component {
  render() {
    let hello = "Hello React!";
    return React.createElement("div", null, hello);
  }
}

/** Component 선언 ( function ) */
// function App() {
//   let hello = "Hello React!";
//   return React.createElement("div", null, hello);
// }

// React container 생성
const root = ReactDOM.createRoot(document.getElementById("root"));

//root에 Component render
root.render(React.createElement(App, null, null));
