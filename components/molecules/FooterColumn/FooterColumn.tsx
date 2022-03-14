import React from 'react';
import FooterLink from '../../atoms/FooterLink/FooterLink';
import FooterTitle from '../../atoms/FooterTitle/FooterTitle';
import styles from './FooterColumn.module.scss';

interface Link {
    label: string;
    url: string;
}

interface Props {
    label: string;
    links: Array<Link>;
}

export default function FooterColumn({ label, links }: Props) {
    return (
        <div className={styles.column}>
            <FooterTitle label={label} />
            {links.map(({ label, url }) => (
                <FooterLink key={label} label={label} url={url} />
            ))}
        </div>
    );
}
