import React from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

export const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title> Hydego | {pageTitle} </title>
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
