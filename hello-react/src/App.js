import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

//랜덤 색상을 생성합니다.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * Math.pow(2, 24)).toString(16);
}
class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
