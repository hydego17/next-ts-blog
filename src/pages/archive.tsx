import React, { ReactElement } from "react";
import { PageHeader } from "../components/Atom/PageHeader";
import Layout from "../components/Layout";
import Wrapper from "../styles/wrapper";

interface ArchiveProps {}

export default function Archive({}: ArchiveProps): ReactElement {
  return (
    <Layout pageTitle="Archive">
      <PageHeader>
        <h1>Archive</h1>
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
