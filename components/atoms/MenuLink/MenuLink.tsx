import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import styles from './MenuLink.module.scss';

interface Props {
    label: string;
    url: string;
}

const MenuLink = ({ label, url }: Props) => {
    return (
        <Link href={url}>
            <a className={styles.link}>{label}</a>
        </Link>
    );
};

MenuLink.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default MenuLink;
