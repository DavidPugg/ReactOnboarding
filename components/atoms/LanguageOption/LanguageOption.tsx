import React from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageOption.module.scss';

interface Props {
    label: string;
    code?: string;
    onClick: () => void;
}

const LanguageOption = ({ label, code, onClick }: Props) => {
    return (
        <p data-testid='language-option' className={styles.option} onClick={() => onClick()}>
            {label} {code && `${code}-${code.toUpperCase()}`}
        </p>
    );
};

LanguageOption.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string,
};

export default LanguageOption;
