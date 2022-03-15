import React from 'react';
import styles from './FooterTitle.module.scss';

interface Props {
    label: string;
}

const FooterTitle = ({ label }: Props) => {
    return <h4 className={styles.title}>{label}</h4>;
};
export default FooterTitle;
