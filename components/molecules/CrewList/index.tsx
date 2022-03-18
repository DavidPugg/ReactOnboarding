import CrewItem from '../../atoms/CrewItem';
import React from 'react';
import styles from './CrewList.module.scss';
import { CrewMember } from 'interfaces/Details';

interface Props {
    crew: Array<CrewMember>;
}

const CrewList = ({ crew }: Props) => {
    return (
        <div className={styles.crew}>
            {crew.map(({ id, name, job }) => (
                <CrewItem key={`${id}-${Math.random()}`} id={id} name={name} job={job} />
            ))}
        </div>
    );
};
export default CrewList;
