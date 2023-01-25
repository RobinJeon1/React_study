import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    //mount
    console.log("created");

    //unmount
    return () => {
      console.log("destroyed");
    };
  }, []);

  return <h1>Hello!!</h1>;
}

function AppCleanup() {
  const [isShow, setIsShow] = useState(true);

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
