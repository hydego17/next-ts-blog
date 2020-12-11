import React from "react";

interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <footer>
      <p>&copy; Hydego {new Date().getFullYear()} </p>
    </footer>
  );
};
