import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import styles from './MenuLink.module.scss';

type Props = {
    label: string;
    url: string;
};

function MenuLink({ label, url }: Props) {
    return (
        <span className={styles.link}>
            <Link href={url}>{label}</Link>
        </span>
    );
}

MenuLink.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default MenuLink;
