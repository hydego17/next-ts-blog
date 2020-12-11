import React from "react";
import styled from "@emotion/styled";

import { AppLink } from "./AppLink";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <StyledHeader>
      <AppLink href="/" label="Next.js" />

      <nav className="header_nav">
        <AppLink href="/about" label="about" />
        <AppLink href="/contact" label="contact" />
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  display: flex;
  justify-content: space-between;

  nav {
    a {
      padding: 0 0.5rem;
    }
  }
`;
