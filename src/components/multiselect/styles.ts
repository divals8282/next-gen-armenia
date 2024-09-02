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
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .chevron {
      margin-right: 16px;
    }
  }
  .dropdown {
    position: absolute;
    top: 50px;
    width: 100%;
    border: 1px solid #194866cc;
    border-radius: 10px;
    z-index: 100;
    overflow: hidden;
    &.open {
      display: block;
    }
    &.closed {
      display: none;
    }
    .list {
      background-color: white;
      max-height: 150px;
      overflow: auto;
      z-index: 100;
      li {
        &:hover {
          background-color: #f5f5f5;
        }
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        padding-top: 5px;
        height: 40px;
        padding-left: 16px;
        .checkbox-icon {
          display: flex;
        }
      }
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
