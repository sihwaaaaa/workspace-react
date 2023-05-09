import React, { useCallback, useMemo, useRef, useState } from "react";
const getAverage = (numbers) => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b); // a=sum변수역할 b=i번째 값 (합계값 더하기) (b를 돌면서 더하고 중간값을 a에 저장 최종연산결과는 sum에 담아짐)
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); //number,list변경시에만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li> //jsx문자열 반환
        ))}
      </ul>
      <div>
        <b>평균값</b> {avg}
      </div>
    </div>
  );
};

export default Average;
