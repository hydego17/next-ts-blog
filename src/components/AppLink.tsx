import React from "react";
import Link, { LinkProps } from "next/link";

interface AppLinkProps extends LinkProps {
  href: string;
  label: string;
}

export const AppLink = ({ href, label }: AppLinkProps) => {
  return (
    <Link href={href}>
      <a>{label} </a>
    </Link>
  );
};
