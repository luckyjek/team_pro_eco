import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: conter;
  align-items: center;

  .modal-box {
    width: 390px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 0 15 rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 2px;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

const Modal = () => {
  return (
    <StyledModal>
      <div className="modal-box">
        <h3>Reactjs & Styled Component Animated modal</h3>
      </div>
    </StyledModal>
  );
};

export default Modal;
