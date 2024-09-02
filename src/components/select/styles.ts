import styled from "styled-components";

export const Container = styled.div<{ error?: string }>`
  display: flex;
  cursor: pointer;
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 10px;
  border: 0.5px solid ${({ error }) => (error ? "red" : "#194866CC")};
  width: 100%;
  color: #194866;
  position: relative;
  label {
    padding-left: 16px;
  }
  .content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .chevron {
      margin-right: 16px;
    }
  }
  .list {
    display: none;
    &.open {
      display: block;
    }
    position: absolute;
    top: 50px;
    left: 0;
    background-color: white;
    max-height: 150px;
    overflow: auto;
    border: 1px solid #194866CC;
    border-radius: 10px;
    width: 100%;
    z-index:100;
    li {
      &:hover {
        background-color: #f5f5f5;
      }
      cursor: pointer;
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      padding-top: 5px;
      height: 40px;
      padding-left: 16px;
    }
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
