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

export default Hello;
