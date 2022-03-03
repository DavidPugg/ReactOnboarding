import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchResult from '../../atoms/SearchResult/SearchResult';
import styles from './Searchbar.module.scss';

const Searchbar = React.forwardRef<HTMLDivElement>((_, ref) => {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);

    function handleSubmit(query: string) {
        navigate(`/search/movie?q=${query}&page=1`);
    }
    function handleItems(input: string) {
        if (input == '') {
            setItems([]);
            return;
        }
        axios
            .get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${input}&page=1`)
            .then((res) => {
                setItems(res.data.results);
            });
    }
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
