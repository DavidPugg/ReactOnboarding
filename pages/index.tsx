import React, { useEffect, useState } from 'react';
import { Movie, Tv } from '../interfaces/Movies';
import Footer from '../components/organisms/Footer/Footer';
import MainMenu from '../components/organisms/MainMenu/MainMenu';
import HomeTemplate from '../components/templates/HomeTemplate/HomeTemplate';
import Popular from '../components/organisms/Popular/Popular';
import { MoviesAPI } from '../utils/MoviesAPI';
import { PopularSearchResponse } from 'interfaces/API';
import Head from 'next/head';

const moviesAPI = new MoviesAPI();

const HomePage = () => {
    const [items, setItems] = useState([] as Array<Movie | Tv>);
    const [type, setType] = useState('movie');

    const handleItems = async (type: string) => {
        setItems(await fetchItems(type));
        setType(type);
    };

    useEffect(() => {
        handleItems('movie')
    }, [])

    const fetchItems = async (type: string): Promise<Array<Movie | Tv>> => {
        const res: PopularSearchResponse<Movie | Tv> =
            type == 'tv'
                ? await moviesAPI.fetchPopularMovies<Tv>({ type })
                : await moviesAPI.fetchPopularMovies<Movie>({ type });
        return res.results;
    };

    return (
        <HomeTemplate header={<MainMenu />} footer={<Footer />}>
            <Head>
                <title>Movie App</title>
            </Head>
            <Popular
                items={items}
                type={type}
                onToggle={(type) => {
                    handleItems(type);
                }}
            />
        </HomeTemplate>
    );
};

export default HomePage;
