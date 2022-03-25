import { useRouter } from 'next/router';
import React, { memo } from 'react';
import Link from 'next/link';
import styles from './SearchSidebarItem.module.scss';

interface Props {
    label: string;
    to: string;
    count: number;
}

const SearchSidebarItem = ({ label, to, count }: Props) => {
    const router = useRouter();
    let { q, type } = router.query;
    return (
        <Link href={`/search/${to}?q=${q}&page=1`} shallow={true}>
            <a className={`${styles.label} ${type == `${to}` ? styles.selected : ''}`}>
                {label}
                <span className={styles.count}>{count || 0}</span>
            </a>
        </Link>
    );
};

export default memo(SearchSidebarItem);
