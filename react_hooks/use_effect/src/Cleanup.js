import React from "react";

function Hello() {
  React.useEffect(() => {
    //Did mount
    console.log("created");

    //Will unmount
    return () => {
      console.log("destroyed");
    };
  }, []);

  return <h1>Hello!!</h1>;
}

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
