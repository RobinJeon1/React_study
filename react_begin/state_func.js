function Greeting(props) {
  let name = props.name;
  return <h1>Hello, {name}!</h1>;
}

function App() {
  //state 초기값 설정
  const [name, setName] = React.useState("");

  //input text내 event 함수
  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={onChange} />
      </label>
      <Greeting name={name} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
