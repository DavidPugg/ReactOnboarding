import React from "react";
import FooterLink from "../../atoms/FooterLink/FooterLink";
import FooterTitle from "../../atoms/FooterTitle/FooterTitle";
import styles from "./FooterColumn.module.scss";

type Props = {
  label: string;
  links: Array<{
    label: string;
    url: string;
  }>;
};

export default function FooterColumn({ label, links }: Props) {
  return (
    <div className={styles.column}>
      <FooterTitle label={label} />
      {links.map(({ label, url }) => (
        <FooterLink key={label} label={label} url={url} />
      ))}
    </div>
  );
}
