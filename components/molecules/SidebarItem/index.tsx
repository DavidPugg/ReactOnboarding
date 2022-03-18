import React, { PropsWithChildren, useState } from 'react';
import SidebarButton from '../../atoms/SidebarButton';
import SidebarDropdown from '../../atoms/SidebarDropdown';
import styles from './SidebarItem.module.scss';

type Props = PropsWithChildren<{
    label: string;
}>;

const SidebarSort = ({ label, children }: Props) => {
    const [dropdown, setDropdown] = useState(false);

    const getStyle = () => {
        return dropdown ? { transform: `rotate(${90}deg)` } : { transform: `rotate(${0}deg)` };
    };

    return (
        <div className={styles.box}>
            <SidebarButton style={getStyle()} label={label} onClick={() => setDropdown(!dropdown)} />
            {dropdown && <SidebarDropdown>{children}</SidebarDropdown>}
        </div>
    );
};
export default SidebarSort;
