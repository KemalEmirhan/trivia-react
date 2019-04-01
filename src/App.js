import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

import { Modal, Button, message } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [questions, setQuestions] = useState([{}]);

  useEffect(() => {
    questionsFetch();
  }, []);

  const questionsFetch = () => {
    Axios.get(
      "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"
    )
      .then(response => {
        console.log(response.data.results);
        setQuestions(response.data.results);
      })
      .catch(error => {
        console.log(error);
        message.error(error);
      });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Wrapper>
      <Header>TRIVIA GAME</Header>
      <Button className="btn-start" type="primary" onClick={showModal}>
        Play Start
      </Button>

      <Modal
        title="Trivia Game"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        {questions[0].question}
      </Modal>
    </Wrapper>
  );
};

export default App;
