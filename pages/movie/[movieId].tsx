import Footer from '../../src/components/organisms/Footer/Footer';
import MainMenu from '../../src/components/organisms/MainMenu/MainMenu';
import MovieDetails from '../../src/components/organisms/MovieDetails/MovieDetails';
import HomeTemplate from '../../src/components/templates/HomeTemplate/HomeTemplate';
import { CrewMember, Details } from '../../src/interfaces/Details';
import React from 'react';
import { MoviesAPI } from '../../src/utils/MoviesAPI';

const moviesAPI = new MoviesAPI();

const DetailsPage = ({ details, crew }) => {
    return (
        <HomeTemplate header={<MainMenu />} footer={<Footer />}>
            <MovieDetails details={details} crew={crew.slice(0, 6)} />
        </HomeTemplate>
    );
};

export async function getServerSideProps({ query }) {
    const { details, crew } = await moviesAPI.fetchMovieDetails<Details, CrewMember>(query.movieId as string);
    return { props: { details, crew } };
}

export default DetailsPage;
