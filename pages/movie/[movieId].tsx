import Footer from '../../components/organisms/Footer/Footer';
import MainMenu from '../../components/organisms/MainMenu/MainMenu';
import MovieDetails from '../../components/organisms/MovieDetails/MovieDetails';
import HomeTemplate from '../../components/templates/HomeTemplate/HomeTemplate';
import { CrewMember, Details } from '../../interfaces/Details';
import React, { memo } from 'react';
import { MoviesAPI } from '../../utils/MoviesAPI';
import { GetServerSideProps } from 'next';
import Head from 'next/head'

interface Props {
    details: Details;
    crew: CrewMember[];
}

const moviesAPI = new MoviesAPI();

const DetailsPage = ({ details, crew }: Props) => {
    return (
        <>
            <Head>
                <title>Movie App - {details.title}</title>
            </Head>
            <HomeTemplate header={<MainMenu />} footer={<Footer />}>
                <MovieDetails details={details} crew={crew.slice(0, 6)} />
            </HomeTemplate>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { details, crew } = await moviesAPI.fetchMovieDetails<Details, CrewMember>(query.movieId as string);
    return { props: { details, crew } };
};

export default memo(DetailsPage);
