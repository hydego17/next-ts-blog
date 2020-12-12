import React, { ReactElement } from "react";
import { PageHeader } from "../components/Atom/PageHeader";
import Layout from "../components/Layout";
import Wrapper from "../styles/wrapper";

interface AboutProps {}

export default function about({}: AboutProps): ReactElement {
  return (
    <Layout pageTitle="About">
      <PageHeader>
        <h1>About Me</h1>
      </PageHeader>

      <Wrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          dolorum mollitia voluptatem autem incidunt excepturi? Soluta numquam
          voluptatibus velit magnam dolorem inventore maxime accusamus ex rem.
          Earum non a iure!
        </p>
      </Wrapper>
    </Layout>
  );
}
