import React from "react";

import styles from './CrewItem.module.scss';

export default function CrewItem({ id, name, job }) {
  return (
    <div key={`${id}-${Math.random()}`}>
      <p className={styles.name}>{name}</p>
      <p className={styles.job}>{job}</p>
    </div>
  );
}
