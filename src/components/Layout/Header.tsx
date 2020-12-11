import React from "react";
import styled from "@emotion/styled";

import { AppLink } from "../Atom/AppLink";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <StyledHeader>
      <nav className="header_nav container">
        <AppLink href="/" label="Next.js" />

        <ul>
          <li>
            <AppLink href="/about" label="about" />
          </li>
          <li>
            <AppLink href="/contact" label="contact" />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  position: sticky;
  background: #ededed;

  .header_nav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;

      li {
        padding: 0 0.5rem;
      }
    }
  }
`;
