import React from "react";

import styles from "./CrewItem.module.scss";

type Props = {
  id: number;
  name: string;
  job: string;
};

export default function CrewItem({ id, name, job }: Props) {
  return (
    <div key={`${id}-${Math.random()}`}>
      <p className={styles.name}>{name}</p>
      <p className={styles.job}>{job}</p>
    </div>
  );
}
