import React, { useState } from "react";

const IterationSample = () => {
  // let arr = [];
  // arr.map((a, b, c) => "");

  // var number = [1, 2, 3, 4, 5];
  // var processed = number.map(function (num) {
  //   return num * num;
  // });

  const obj = [
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ];
  const [names, setNames] = useState(obj);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  const onRemove = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextName = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextName);
    setInputText("");
  };
  return (
    <>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
