import { Container } from "./styles";
import { ComponentT } from "./types";

export const Paper: ComponentT = ({ children }) => {
  return <Container>{children}</Container>;
};
