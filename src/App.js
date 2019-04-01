import React, { useState } from "react";
import styled from "styled-components";

import { Modal, Button } from "antd";
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
      />
    </Wrapper>
  );
};

export default App;
