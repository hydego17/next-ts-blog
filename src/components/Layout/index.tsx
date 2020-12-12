import { ReactNode } from "react";
import Head from "next/head";
import styled from "@emotion/styled";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title> Hydego | {pageTitle} </title>
      </Head>

      <Header />

      <LayoutMain className="container">{children}</LayoutMain>

      <Footer />
    </>
  );
};

const LayoutMain = styled("main")`
  min-height: 80vh;
`;

export default Layout;
