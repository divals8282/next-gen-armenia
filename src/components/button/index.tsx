import styled from "styled-components";

export const Button = styled.button<{color?: "primary" | 'secondary'}>`
  height: 48px;
  padding: 12px 38px;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  background: ${({color}) => {
    const currentColor = !color ? "primary" : color

    return currentColor === "primary" ? '#34c88a' : "white"
  }};
  color: ${({color}) => {
    const currentColor = !color ? "primary" : color

    return currentColor === "primary" ? 'white' : "#194866"
  }};
  ${({color}) => {
    const currentColor = !color ? "primary" : color

    if(currentColor === "secondary") {
      return "border: 1px solid #19486629"
    }
  }};
  cursor: pointer;
`;
