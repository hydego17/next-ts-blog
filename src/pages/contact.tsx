import React, { ReactElement } from "react";
import { PageHeader } from "../components/Atom/PageHeader";
import Layout from "../components/Layout";

interface ContactProps {}

export default function Contact({}: ContactProps): ReactElement {
  return (
    <Layout pageTitle="Contact">
      <PageHeader>
        <h1>Contact</h1>
      </PageHeader>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eveniet
        repudiandae, possimus, qui labore quia, eaque sit incidunt dolor maxime
        dolorem! Consequatur corporis est vitae voluptate corrupti laborum?
        Quaerat, nobis!
      </p>
    </Layout>
  );
}
