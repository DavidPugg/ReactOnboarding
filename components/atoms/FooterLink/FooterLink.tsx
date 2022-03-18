import React from 'react';
import styles from './FooterLink.module.scss';

interface Props {
    label: string;
    url: string;
}

const FooterLink = ({ label, url }: Props) => {
    return (
        <a className={styles.link} href={url}>
            {label}
        </a>
    );
};
export default FooterLink;
