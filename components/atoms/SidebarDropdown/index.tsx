import React, { PropsWithChildren } from 'react';
import styles from './SidebarDropdown.module.scss';

type Props = PropsWithChildren<{}>;

const SidebarDropdown = ({ children }: Props) => {
    return <div className={styles.dropdown}>{children}</div>;
};
export default SidebarDropdown;
