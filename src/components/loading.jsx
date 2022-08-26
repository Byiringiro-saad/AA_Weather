import React from "react";
import styled from "styled-components";
import loader from "../images/loader.svg";

const Loader = () => {
  return (
    <Container>
      <img src={loader} alt="loader" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  img {
    width: 100px;
  }
`;

export default Loader;
