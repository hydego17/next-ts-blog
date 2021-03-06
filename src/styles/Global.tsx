import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
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

        h1,
        h2,
        h3 {
          padding: 1rem 0;
        }

        h2 {
          font-size: 2rem;
        }

        h3 {
          font-size: 1.5rem;
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
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .section_wrapper {
          max-width: 600px;
        }
      `}
    />
  );
};

export default GlobalStyle;
