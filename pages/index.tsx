import React from 'react';

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
    const fetchItems = async (type: string): Promise<PopularSearchResponse<Movie | Tv>> => {
        return type == 'tv'
            ? ((await moviesAPI.fetchPopularMovies<Tv>({ type })) as PopularSearchResponse<Tv>)
            : ((await moviesAPI.fetchPopularMovies<Movie>({ type })) as PopularSearchResponse<Movie>);
    };

    return (
        <HomeTemplate header={<MainMenu />} footer={<Footer />}>
            <Head>
                <title>Movie App</title>
            </Head>
            <Popular dataSrc={(type: string) => fetchItems(type)} />
        </HomeTemplate>
    );
};

export default HomePage;
