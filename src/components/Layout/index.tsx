import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";

import GlobalStyles from "../GlobalStyles";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
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
