import React, { ReactElement } from "react";
import { PageHeader } from "../components/Atom/PageHeader";
import Layout from "../components/Layout";
import Wrapper from "../styles/wrapper";

interface AboutProps {}

export default function about({}: AboutProps): ReactElement {
  return (
    <Layout pageTitle="About">
      <PageHeader>
        <h1>About</h1>
        <Wrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eveniet repudiandae, possimus, qui labore quia, eaque sit incidunt
            dolor maxime dolorem! Consequatur corporis est vitae voluptate
            corrupti laborum? Quaerat, nobis!
          </p>
        </Wrapper>
      </PageHeader>
    </Layout>
  );
}
