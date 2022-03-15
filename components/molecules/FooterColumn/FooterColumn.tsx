import { MenuLinkType } from 'interfaces/Main';
import React from 'react';
import FooterLink from '../../atoms/FooterLink/FooterLink';
import FooterTitle from '../../atoms/FooterTitle/FooterTitle';
import styles from './FooterColumn.module.scss';

interface Props {
    label: string;
    links: Array<MenuLinkType>;
}

const FooterColumn = ({ label, links }: Props) => {
    return (
        <div className={styles.column}>
            <FooterTitle label={label} />
            {links.map(({ label, url }) => (
                <FooterLink key={label} label={label} url={url} />
            ))}
        </div>
    );
};
export default FooterColumn;
