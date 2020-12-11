import React, { ReactElement } from "react";
import { Layout } from "../components/Layout";

interface AboutProps {}

export default function about({}: AboutProps): ReactElement {
  return (
    <Layout pageTitle="About">
      <h1>About Us</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        dolorum mollitia voluptatem autem incidunt excepturi? Soluta numquam
        voluptatibus velit magnam dolorem inventore maxime accusamus ex rem.
        Earum non a iure!
      </p>
    </Layout>
  );
}
