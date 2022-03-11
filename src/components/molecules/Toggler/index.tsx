import classNames from 'classnames';
import { ToggleOption, TogglerStyles } from 'interfaces/Toggler';
import React, { useState, useEffect } from 'react';

import styles from './Toggler.module.scss';

interface Props {
    options: Array<ToggleOption>;
    func: (type: string) => void;
}

export default ({ options, func }: Props) => {
    const [currentType, setCurrentType] = useState<string>('');
    const [togglerStyles, setTogglerStyles] = useState<TogglerStyles>({} as TogglerStyles);

    useEffect(() => {
        setCurrentType(options[0].type);
        setTogglerStyles({
            width: document.getElementById('main')?.children[1].clientWidth as number,
            left: `0`,
        });
    }, []);

    const setStyles = (event: React.MouseEvent<HTMLDivElement>) => {
        setTogglerStyles({
            width: event.currentTarget.offsetWidth,
            left: `calc(${event.currentTarget.getClientRects()[0].left}px - ${
                document.getElementById('main')?.getClientRects()[0].left
            }px)`,
        });
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, type: string) => {
        setStyles(event);
        setCurrentType(type);
        func(type);
    };

    return (
        <div id='main' className={styles.select}>
            <div className={styles.toggler} style={togglerStyles}></div>
            {options.map(({ label, type }) => (
                <div
                    key={type}
                    onClick={(e) => handleClick(e, type)}
                    className={classNames(styles.option, type == currentType ? styles.selected : '')}
                >
                    {label}
                </div>
            ))}
        </div>
    );
};
