import MainButton from '@components/atoms/MainButton';
import Footer from '@components/organisms/Footer/Footer';
import MainMenu from '@components/organisms/MainMenu/MainMenu';
import MainTemplate from '@components/templates/MainTemplate/MainTemplate';
import { getMovies, loadMore } from '../../../app/moviesSlice';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PopularContent from '../../organisms/PopularContent';
import PopularSidebar from '../../organisms/PopularSidebar';

export default function PopularPage() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalResults = useSelector((state: RootStateOrAny) => state.movies.totalResults);

    useEffect(() => {
        dispatch(getMovies({ page: currentPage }));
    }, []);

    function handleLoadMore(page: number) {
        dispatch(loadMore({ page }));
        setCurrentPage(currentPage + 1);
    }

    return (
        <MainTemplate header={<MainMenu />} sidebar={<PopularSidebar />} footer={<Footer />}>
            <>
                <PopularContent />
                {totalResults > 20 * currentPage && (
                    <MainButton label='Load More' updated onClick={() => handleLoadMore(currentPage + 1)} />
                )}
            </>
        </MainTemplate>
    );
}
