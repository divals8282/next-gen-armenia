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
    .search-bar{
      cursor: initial;
      display: flex;
      align-items: center;
      height: 50px;
      background-color: white;
      border-bottom: 0.5px solid #19486680;
      .icon {
        padding: 11px 0px 11px 16px;
      }
      input {
        outline: 0;
        border-bottom: 1px solid #194866;
        border-top: none;
        border-left: none;
        font-size: 14px;
        border-right: none;
        font-family: "Assistant";
      }
      input::placeholder {
        font-size: 14px;
        font-weight: 400;
      }
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
