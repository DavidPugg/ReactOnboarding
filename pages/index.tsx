import React from 'react';

import { Movie, Tv } from '../interfaces/Movies';
import Footer from '../components/organisms/Footer/Footer';
import MainMenu from '../components/organisms/MainMenu/MainMenu';
import HomeTemplate from '../components/templates/HomeTemplate/HomeTemplate';
import Popular from '../components/organisms/Popular/Popular';
import { MoviesAPI, PopularSearchResponse } from '../utils/MoviesAPI';

const moviesAPI = new MoviesAPI();

export default function HomePage() {
    const fetchItems = async (type: string): Promise<PopularSearchResponse<Movie | Tv>> => {
        return type == 'tv'
            ? ((await moviesAPI.fetchPopularMovies<Tv>({ type })) as PopularSearchResponse<Tv>)
            : ((await moviesAPI.fetchPopularMovies<Movie>({ type })) as PopularSearchResponse<Movie>);
    };

    return (
        <HomeTemplate header={<MainMenu />} footer={<Footer />}>
            <Popular dataSrc={(type: string) => fetchItems(type)} />
        </HomeTemplate>
    );
}
