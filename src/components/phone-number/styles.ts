import styled from "styled-components";

export const Container = styled.div<{ error?: string }>`
  display: flex;
  position: relative;
  .current-code {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    border-top: 0.5px solid ${({ error }) => (error ? "red" : "#194866CC")};
    border-left: 0.5px solid ${({ error }) => (error ? "red" : "#194866CC")};
    border-bottom: 0.5px solid ${({ error }) => (error ? "red" : "#194866CC")};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    color: #194866;
  }
  .code-list {
    position: absolute;
    top: 50px;
    max-width: 200px;

    > li {
      display: flex;
      align-items: center;
      padding-left:8px;
      &:hover {
        background-color: #34c88a;
        color: white;
      }
      background-color: white;
    }
    max-height: 150px;
    z-index: 100;
    overflow: auto;
    &.open {
      display: block;
    }
    &.close {
      display: none;
    }

    .item {
      height: 30px;
      cursor: pointer;
    }
  }
  > div:nth-child(3) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border: 0.5px solid ${({ error }) => (error ? "red" : "#194866CC")};
  }
  .error {
    position: absolute;
    border: none;
    top: -8px;
    background: white;
    left: 8px;
    color: red;
  }
`;
