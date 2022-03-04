import { CrewMember, Details } from 'interfaces/Details';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesAPI } from '../../../utils/MoviesAPI';
import Footer from '../../organisms/Footer/Footer';
import MainMenu from '../../organisms/MainMenu/MainMenu';
import MovieDetails from '../../organisms/MovieDetails/MovieDetails';
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate';

const moviesAPI = new MoviesAPI();

export default function DetailsPage() {
    const [details, setDetails] = useState<Details>({} as Details);
    const [crew, setCrew] = useState<Array<CrewMember>>([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            const { details, crew } = await moviesAPI.fetchMovieDetails<Details, CrewMember>(movieId as string);
            setDetails(details);
            setCrew(crew);
        };
        fetchDetails();
    }, []);

    return (
        <HomeTemplate header={<MainMenu />} footer={<Footer />}>
            <MovieDetails details={details} crew={crew.slice(0, 6)} />
        </HomeTemplate>
    );
}
