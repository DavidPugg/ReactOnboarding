import React from "react";

import styles from "./CrewList.module.scss";

import CrewItem from "@components/atoms/CrewItem";

export default function CrewList({ crew }) {
    
  return (
    <div className={styles.crew}>
      {crew.map(({ id, name, job }) => (
        <CrewItem id={id} name={name} job={job} />
      ))}
    </div>
  );
}
