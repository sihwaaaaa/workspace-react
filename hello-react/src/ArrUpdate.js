import React from "react";

const ArrUpdate = () => {
  //객체다루기
  const object = { a: 1, b: 2, c: 3 };
  const nextObject = { ...object, b: 5 };
  console.log(nextObject);

  return <div>안녕</div>;
};
//배열다루기
// const array = [
//   { id: 1, value: true },
//   { id: 2, value: true },
//   { id: 3, value: false },
// ];
// let nextArray = array.concat({ id4: 4 }); //새 항목 추가
// nextArray.filter((i) => i.id !== 2).map(i => i.id === 1 ? {...}); //id 2인 항목 제거

export default ArrUpdate;
