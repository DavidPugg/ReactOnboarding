import CrewItem from "../../atoms/CrewItem";
import React from "react";
import styles from "./CrewList.module.scss";

type Props = {
  crew: Array<{
    id: number,
    name: string,
    job: string
  }>
}

export default function CrewList({ crew }: Props) {
  return (
    <div className={styles.crew}>
      {crew.map(({ id, name, job}) => (
        <CrewItem
          key={`${id}-${Math.random()}`}
          id={id}
          name={name}
          job={job}
        />
      ))}
    </div>
  );
}
