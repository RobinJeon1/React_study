import React from "react";
import Hello from "./Hello";

function AppCleanup() {
  const [isShow, setIsShow] = React.useState(true);

  const onClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <button onClick={onClick}>{isShow ? "Hide" : "Show"}</button>
      {isShow ? <Hello /> : null}
    </div>
  );
}

export default AppCleanup;
