import Footer from '../../components/organisms/Footer/Footer';
import MainMenu from '../../components/organisms/MainMenu/MainMenu';
import PopularContent from '../../components/organisms/PopularContent';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import MainButton from '../../components/atoms/MainButton';
import { getMovies, setMovies } from '../../redux/moviesSlice';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PopularSidebar from '../../components/organisms/PopularSidebar';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { MoviesAPI } from 'utils/MoviesAPI';
import { SearchResponse } from 'interfaces/API';
import { Movie } from 'interfaces/Movies';

interface Props {
    data: SearchResponse<Movie>;
}

const PopularPage = ({ data }: Props) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalResults = useSelector((state: RootStateOrAny) => state.movies.totalResults);

    useEffect(() => {
        dispatch(setMovies(data));
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, [currentPage]);

    const handler = () => {
        if (document.body.getClientRects()[0].bottom - window.innerHeight <= 0) {
            handleLoadMore();
        }
    };

    const handleLoadMore = () => {
        const page = currentPage + 1;
        setCurrentPage(page);
        dispatch(getMovies({ page, loadMore: true }));
    };

    return (
        <>
            <Head>
                <title>Movie App - Search</title>
            </Head>
            <MainTemplate header={<MainMenu />} sidebar={<PopularSidebar />} footer={<Footer />}>
                <>
                    <PopularContent />
                    {totalResults > 20 * currentPage && (
                        <MainButton label='Load More' updated onClick={() => handleLoadMore()} />
                    )}
                </>
            </MainTemplate>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const moviesAPI = new MoviesAPI();
    const data: SearchResponse<Movie> = await moviesAPI.fetchMovies({ page: 1, filters: [], sort: 'popularity.desc' });
    console.log('serverside')
    return { props: { data } };
};

export default PopularPage;
