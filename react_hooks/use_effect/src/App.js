import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [keyword, setKeyword] = React.useState("");

  //counter event handler
  const counter = () => setCount(count + 1);

  // input text event handler
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  //component가 로딩될 때마다 실행
  console.log("render");

  //component가 모두 로딩되었을 때 한번만 실행
  React.useEffect(() => {
    console.log("Component가 모두 로딩됨");
  }, []);

  // keyword state가 바뀔 경우에만 실행
  React.useEffect(() => {
    console.log("use input text:", keyword);
  }, [keyword]);

  //count state가 바뀔 경우에만 실행
  React.useEffect(() => {
    console.log("use counter:", count);
  }, [count]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Input here..."
      />
      <h1>{count}</h1>
      <button onClick={counter}>Click here!</button>
    </div>
  );
}

export default App;
