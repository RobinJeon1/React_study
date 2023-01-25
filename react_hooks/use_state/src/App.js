import React from "react";
import Greeting from "./Greeting";

function App() {
  const [name, setName] = React.useState("");
  //const nameState = React.useState(0); //React.useState(0) 의 return 값 저장
  //const name = dataState[0];
  //const setName = dataState[1];
  const [isInput, setIsInput] = React.useState(false);

  //input text event 함수
  const onChange = (e) => {
    //setState
    setName(e.target.value);
    setIsInput(true);
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={onChange} />
      </label>
      {isInput ? <Greeting name={name} /> : null}
    </div>
  );
}

export default App;

/** 구조 분해 할당 */
// let numbers = [10, 20, 30];
// let number1 = numbers[0];
// let number2 = numbers[1];
// let number3 = numbers[3];

// let [number1, number2, number3] = numbers;

// console.log(number1, number2, number3);
// //10, 20, 30

// const obj = {
//   name: "Robin",
//   func: function() {
//     console.log("hello");
//   }
// }

// console.log(obj.name); // "Robin"
// obj.func(); //"hello"

// const {name, func} = obj;
// console.log(name); //"Robin"
// func(); //"hello"

// const {name: myName, func: myfunc} = obj; //새로운 변수 이름으로 할당
// console.log(myName); //"Robin"
// myfunc(); //"hello"

// function func(x) {
//   let name = x;
//   const greeting = function () {
//     return `hello ${name}!`;
//   };
//   return [name, greeting];
// }

// const myFunc = func("Robin");
// const myName = myFunc[0];
// const hello = myFunc[1];

// //const [myName, hello] = func("Robin");

// console.log(myName); //"Robin"
// console.log(hello()); //"hello Robin!"
