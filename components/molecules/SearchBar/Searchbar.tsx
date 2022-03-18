import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchResult from '../../atoms/SearchResult/SearchResult';
import styles from './Searchbar.module.scss';

interface Props {
    onSubmit: () => void;
}

const Searchbar = React.forwardRef<HTMLDivElement,Props>(({onSubmit}, ref) => {
    const router = useRouter();

    const [items, setItems] = useState([]);

    const handleSubmit = (query: string) => {
        onSubmit();
        router.push(`/search/movie?q=${query}&page=1`);
    };
    const handleItems = (input: string) => {
        if (input == '') {
            setItems([]);
            return;
        }
        axios
            .get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${input}&page=1`)
            .then((res) => {
                setItems(res.data.results);
            });
    };
    return (
        <div ref={ref} className={styles.bar}>
            <SearchInput onInput={handleItems} onSubmit={handleSubmit} />
            {items.length > 0 &&
                items.map(({ title, id }) => {
                    if (title) {
                        return <SearchResult key={id} label={title} />;
                    }
                })}
        </div>
    );
});
export default Searchbar;
