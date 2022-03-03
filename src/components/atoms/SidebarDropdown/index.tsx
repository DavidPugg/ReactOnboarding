import React, { PropsWithChildren } from 'react';
import styles from './SidebarDropdown.module.scss';

type Props = PropsWithChildren<{}>;

export default function SidebarDropdown({ children }: Props) {
    return <div className={styles.dropdown}>{children}</div>;
}
