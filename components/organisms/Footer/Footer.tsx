import React from 'react';
import FooterColumn from '../../molecules/FooterColumn/FooterColumn';
import styles from './Footer.module.scss';
import { columns } from './columns';

const Footer = () => {
    return (
        <div className={styles.background}>
            <div className='container'>
                <div className={styles.content}>
                    {columns.map(({ label, links }) => (
                        <FooterColumn key={label} label={label} links={links} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Footer;
