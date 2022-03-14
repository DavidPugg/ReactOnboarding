import Footer from '../../components/organisms/Footer/Footer';
import MainMenu from '../../components/organisms/MainMenu/MainMenu';
import PopularContent from '../../components/organisms/PopularContent';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import MainButton from '../../components/atoms/MainButton';
import { getMovies } from '../../redux/moviesSlice';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PopularSidebar from '../../components/organisms/PopularSidebar';

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
