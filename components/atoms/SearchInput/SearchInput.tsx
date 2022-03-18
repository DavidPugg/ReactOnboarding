import React, { useRef } from 'react';
import styles from './SearchInput.module.scss';

interface Props {
    onSubmit: (value: string) => void;
    onInput: (value: string) => void;
}

const SearchInput = ({ onSubmit, onInput }: Props) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit((inputEl.current as HTMLInputElement).value);
    };
    return (
        <div className={styles.border}>
            <div className='container'>
                <form
                    className={styles.box}
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <svg className={styles.svg}>
                        <use href={`/svgs.svg#icon-magnifying-glass`}></use>
                    </svg>
                    <input
                        ref={inputEl}
                        onInput={() => {
                            onInput((inputEl.current as HTMLInputElement).value);
                        }}
                        autoFocus
                        className={styles.input}
                        type='text'
                    />
                </form>
            </div>
        </div>
    );
};
export default SearchInput;
