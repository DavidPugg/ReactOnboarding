import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import styles from './MainMenuLink.module.scss';

interface Props {
    label: string;
    url: string;
    className?: string;
}

const MainMenuLink = ({ label, url, ...rest }: Props) => {
    return (
        <Link href={url}>
            <a className={styles.link} {...rest}>
                {label}
            </a>
        </Link>
    );
};

MainMenuLink.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string,
};

MainMenuLink.defaultProps = {
    url: '#',
};

export default MainMenuLink;
