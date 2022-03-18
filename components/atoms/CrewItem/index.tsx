import React from "react";
import styles from "./CrewItem.module.scss";

interface Props {
  id: number;
  name: string;
  job: string;
};

const CrewItem = ({ id, name, job }: Props) => {
  return (
    <div key={`${id}-${Math.random()}`}>
      <p className={styles.name}>{name}</p>
      <p className={styles.job}>{job}</p>
    </div>
  );
}
export default CrewItem;