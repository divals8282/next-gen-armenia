import styled from "styled-components";

export const Container = styled.div`
  .block {
    margin: 16px 0;
  }
  .block.forgot-password {
    margin: 8px 0px 24px 0px;
    display: flex;
    justify-content: flex-end;
    > a {
      text-decoration: underline;
      color: #194866;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  .sign-in-button {
    width: 100%;
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: #19486680;
    margin: 16px 0;
  }
  .register-title {
    margin-top: 280px;
    font-size: 28px;
    color: #194866;
    font-weight: 600;
    text-align: center;
  }
  .block-divided {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    > * {
      width: 100%;
      > button {
        width: 100%;
      }
    }
  }
  .head {
    text-align: center;
    color: #194866;
    .title {
      font-size: 32px;
      margin-bottom: 16px;
    }
    .descr {
      font-size: 18px;
    }
  }
`;
