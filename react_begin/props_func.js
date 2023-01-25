function Greeting(props) {
  //props 객체에 name 속성 정의
  let name = props.name;
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      {/* 정의된 props 사용으로 Component 재활용 */}
      <Greeting name="Robin" />
      <Greeting name="Sam" />;
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
