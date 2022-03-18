import { useRouter } from 'next/router';
import React from 'react';
import styles from './SearchResult.module.scss';

interface Props {
    label: string;
}

const SearchResult = ({ label }: Props) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/search/movie?q=${label}`);
    };

    return (
        <div className={styles.item} onClick={handleClick}>
            <div className='container'>
                <span className={styles.link}>{label}</span>
            </div>
        </div>
    );
};
export default SearchResult;