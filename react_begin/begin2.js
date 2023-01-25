/** Component 선언 ( class ) */
// class App extends React.Component {
//   render() {
//     let hello = "Hello React!";
//     // JSX 적용
//     return <div>{hello}</div>;
//   }
// }

/** Component 선언 ( function ) */
function App() {
  let hello = "Hello React!";
  //JSX 적용
  return <div>{hello}</div>;
}

// React container 생성
const root = ReactDOM.createRoot(document.getElementById("root"));

//root에 Component render
root.render(React.createElement(App, null, null));
