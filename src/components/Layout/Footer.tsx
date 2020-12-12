import styled from "@emotion/styled";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <FooterStyled>
      <p>&copy; Hydego {new Date().getFullYear()} </p>
    </FooterStyled>
  );
};

const FooterStyled = styled("footer")`
  padding: 2rem 0;
  text-align: center;
`;
