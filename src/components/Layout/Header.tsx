import styled from "@emotion/styled";

import { AppLink } from "../Atom/AppLink";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <StyledHeader>
      <nav className="header_nav container">
        <h1>
          <AppLink href="/" label="Next.js" />
        </h1>

        <ul>
          <li>
            <AppLink href="/about" label="About" />
          </li>
          <li>
            <AppLink href="/archive" label="Achive" />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  position: sticky;

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
