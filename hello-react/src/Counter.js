import { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //     super(props);
  //     //state의 초깃값 설정정하기
  //     this.state = {
  //         number: 0,
  //         fixedNumber: 0,
  //     };
  // }
  state = { number: 0, fixedNumber: 0 };
  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          //onClick을 통해 새로운 값을 넣을 수 있다
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
            //   this.setState((prevState) => {
            //     return { number: prevState.number + 1 };
            //   });
            //   this.setState((prevState) => {
            //     return { number: prevState.number + 1 };
            //   });
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출");
              console.log(this.setState);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
