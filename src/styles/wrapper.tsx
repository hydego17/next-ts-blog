import { ReactElement, ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}

export default function Wrapper({ children }: Props): ReactElement {
  return <WrapperStyled>{children}</WrapperStyled>;
}

const WrapperStyled = styled("section")`
  max-width: 600px;
`;
