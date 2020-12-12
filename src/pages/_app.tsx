import { AppProps } from "next/app";
import GlobalStyle from "../styles/Global";

interface CustomAppProps extends AppProps {}

const App = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
