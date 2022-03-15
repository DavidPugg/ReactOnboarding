import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import styles from './SearchSidebarItem.module.scss';

interface Props {
    label: string;
    to: string;
    count: number;
}

const SearchSidebarItem = ({ label, to, count }: Props) => {
    const router = useRouter();
    const { q, type } = router.query;
    return (
        <Link href={`/search/${to}?q=${q}&page=1`}>
            <a className={`${styles.label} ${type == `${to}` ? styles.selected : ''}`}>
                {label}
                <span className={styles.count}>{count || 0}</span>
            </a>
        </Link>
    );
};

SearchSidebarItem.propTypes = {
    label: PropTypes.string.isRequired,
    count: PropTypes.number,
};

export default SearchSidebarItem;
