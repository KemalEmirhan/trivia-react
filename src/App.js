import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1>TRIVIA REACT</h1>
      </Wrapper>
    );
  }
}

export default App;
