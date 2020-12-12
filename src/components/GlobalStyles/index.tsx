import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          margin: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        body {
          font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        ul {
          list-style: none;
        }

        img {
          object-fit: cover;
          width: 100%;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
      `}
    />
  );
};

export default GlobalStyles;
