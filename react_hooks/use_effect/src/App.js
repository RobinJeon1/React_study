import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [keyword, setKeyword] = React.useState("");

  const counter = () => setCount(count + 1);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  console.log("render");

  React.useEffect(() => {
    console.log("Component가 모두 로딩됨");
  }, []);

  React.useEffect(() => {
    console.log("use input text:", keyword);
  }, [keyword]);

  React.useEffect(() => {
    console.log("use counter:", count);
  }, [count]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{count}</h1>
      <button onClick={counter}>Click here!</button>
    </div>
  );
}

export default App;
