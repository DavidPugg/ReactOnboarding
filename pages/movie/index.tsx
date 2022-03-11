import Footer from '../../src/components/organisms/Footer/Footer';
import MainMenu from '../../src/components/organisms/MainMenu/MainMenu';
import PopularContent from '../../src/components/organisms/PopularContent';
import MainTemplate from '../../src/components/templates/MainTemplate/MainTemplate';
import MainButton from '../../src/components/atoms/MainButton';
import { getMovies } from '../../src/app/moviesSlice';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PopularSidebar from '../../src/components/organisms/PopularSidebar';

export default function PopularPage() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalResults = useSelector((state: RootStateOrAny) => state.movies.totalResults);

    useEffect(() => {
        dispatch(getMovies({ page: currentPage, loadMore: false }));
    }, []);

    function handleLoadMore(page: number) {
        dispatch(getMovies({ page, loadMore: true }));
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
