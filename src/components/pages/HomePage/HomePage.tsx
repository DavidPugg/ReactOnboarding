import React from 'react';
import Footer from '../../organisms/Footer/Footer';
import MainMenu from '../../organisms/MainMenu/MainMenu';
import Popular from '../../organisms/Popular/Popular';
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate';

import { MoviesAPI, PopularSearchResponse } from '../../../utils/MoviesAPI';
import { Movie, Tv } from 'interfaces/Movies';

const moviesAPI = new MoviesAPI();

export default function HomePage() {
    const fetchItems = async (type: string): Promise<PopularSearchResponse<Movie | Tv>> => {
        return type == 'tv'
            ? ((await moviesAPI.fetchPopularMovies<Tv>({ type })) as PopularSearchResponse<Tv>)
            : ((await moviesAPI.fetchPopularMovies<Movie>({ type })) as PopularSearchResponse<Movie>);
    };

    return (
        <HomeTemplate header={<MainMenu />} footer={<Footer />}>
            <Popular dataSrc={(type) => fetchItems(type)} />
        </HomeTemplate>
    );
}
