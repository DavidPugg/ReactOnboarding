import Footer from '../../components/organisms/Footer/Footer';
import MainMenu from '../../components/organisms/MainMenu/MainMenu';
import MovieDetails from '../../components/organisms/MovieDetails/MovieDetails';
import HomeTemplate from '../../components/templates/HomeTemplate/HomeTemplate';
import { CrewMember, Details } from '../../interfaces/Details';
import React from 'react';
import { MoviesAPI } from '../../utils/MoviesAPI';

interface Props {
    details: Details;
    crew: CrewMember[];
}

const moviesAPI = new MoviesAPI();

const DetailsPage = ({ details, crew }: Props) => {
    return (
        <HomeTemplate header={<MainMenu />} footer={<Footer />}>
            <MovieDetails details={details} crew={crew.slice(0, 6)} />
        </HomeTemplate>
    );
};

export async function getServerSideProps({ query }: { query: { movieId: string } }) {
    const { details, crew } = await moviesAPI.fetchMovieDetails<Details, CrewMember>(query.movieId as string);
    return { props: { details, crew } };
}

export default DetailsPage;
