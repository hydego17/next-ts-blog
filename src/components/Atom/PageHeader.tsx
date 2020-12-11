import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}

export const PageHeader = ({ children }: Props) => {
  return <StyledPageHeader>{children}</StyledPageHeader>;
};

const StyledPageHeader = styled("header")`
  padding: 1rem 0;

  h1 {
    font-size: clamp(1rem, 10vw, 2.5rem);
  }
`;
