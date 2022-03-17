import Footer from '../../components/organisms/Footer/Footer';
import MainMenu from '../../components/organisms/MainMenu/MainMenu';
import PopularContent from '../../components/organisms/PopularContent';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import MainButton from '../../components/atoms/MainButton';
import { getMovies, setMovies } from '../../redux/moviesSlice';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
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
    const currentPageRef = useRef(currentPage);
    const end: MutableRefObject<HTMLDivElement> = useRef({} as HTMLDivElement);
    let observer: IntersectionObserver = {} as IntersectionObserver;

    useEffect(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries[0].isIntersecting ? handleLoadMore() : '';
            },
            {
                threshold: 1,
                rootMargin: `150px`
            },
        );
        setTimeout(() => {
            observer.observe(end.current as Element);
        }, 100);

        dispatch(setMovies(data));
    }, []);

    useEffect(() => {
        currentPageRef.current = currentPage;
    }, [currentPage]);

    const handleLoadMore = () => {
        const page = currentPageRef.current + 1;
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
                        <>
                            <MainButton label='Load More' updated onClick={() => handleLoadMore()} />
                            <div ref={end}></div>
                        </>
                    )}
                </>
            </MainTemplate>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const moviesAPI = new MoviesAPI();
    const data: SearchResponse<Movie> = await moviesAPI.fetchMovies({ page: 1, filters: [], sort: 'popularity.desc' });
    return { props: { data } };
};

export default PopularPage;
