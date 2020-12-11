import React, { ReactElement } from "react";
import Layout from "../components/Layout";

interface ContactProps {}

export default function Contact({}: ContactProps): ReactElement {
  return (
    <Layout pageTitle="Contact">
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eveniet
        repudiandae, possimus, qui labore quia, eaque sit incidunt dolor maxime
        dolorem! Consequatur corporis est vitae voluptate corrupti laborum?
        Quaerat, nobis!
      </p>
    </Layout>
  );
}
