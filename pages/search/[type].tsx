import PageSelector from '../../components/molecules/PageSelector';
import Footer from '../../components/organisms/Footer/Footer';
import MainMenu from '../../components/organisms/MainMenu/MainMenu';
import SearchContent from '../../components/organisms/SearchContent/SearchContent';
import SearchSidebar from '../../components/organisms/SearchSidebar/SearchSidebar';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import { Movie, Tv, Person, Company, Keyword, Collection } from '../../interfaces/Movies';
import React, { useCallback, useEffect, useMemo } from 'react';
import { MoviesAPI } from '../../utils/MoviesAPI';
import { useRouter } from 'next/router';
import { SearchResponse } from 'interfaces/API';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import useMap, { MapOrEntries } from '@components/hooks/useMap';
import { useIsMount } from '@components/hooks/isMount';

const types = ['movie', 'tv', 'person', 'company', 'keyword', 'collection'];

const moviesAPI = new MoviesAPI();

interface Props {
    initialItems: MapOrEntries<string, MainObject<any>>;
}

export interface MainObject<T> {
    results: Array<T>;
    count: number;
    totalPages: number;
}

const SearchPage = ({ initialItems }: Props) => {
    const router = useRouter();
    const { page, q, type } = router.query;
    const [items, itemActions] = useMap<string, MainObject<any>>(initialItems);
    const isMount = useIsMount();

    useEffect(() => {
        itemActions.setAll(initialItems);
    }, []);

    useEffect(() => {
        if (isMount) return;
        moviesAPI.fetchAllSearchMovies(q as string, types).then((res) => {
            itemActions.setAll(res as MapOrEntries<string, MainObject<any>>);
        });
    }, [q]);

    useEffect(() => {
        if (isMount) return;
        window.scrollTo(0, 0);
        getItems<any>(Number(page), type as string);
    }, [page, type]);

    const handlePageChange = useCallback(
        (p: number) => {
            router.push(`/search/${type}?q=${q}&page=${p}`, undefined, { shallow: true });
        },
        [type, q, page],
    );

    const getItems = async <T,>(page: number, type: string) => {
        const { results, total_pages, total_results } = await moviesAPI.fetchSearchMovies<T>({
            page,
            query: q as string,
            type,
        });
        if ((results[0] as any).id == (items.get(type) as MainObject<any>).results[0].id) {
            return;
        }
        itemActions.set(type, { results, count: total_results, totalPages: total_pages });
    };

    const getCounts = useMemo(() => {
        return types.map((e) => (items.get(e) as MainObject<any>).count);
    }, [items]);

    return (
        <>
            <Head>
                <title>Movie App - Search</title>
            </Head>
            <MainTemplate
                header={<MainMenu />}
                sidebar={<SearchSidebar counts={getCounts} types={types} />}
                footer={<Footer />}
            >
                <SearchContent items={items} />
                <PageSelector
                    totalPages={(items.get(type as string) as MainObject<any>).totalPages}
                    onPageChange={handlePageChange}
                    currentPage={Number(page)}
                />
            </MainTemplate>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { page, q } = query;

    const getItems = async <T,>(type: string) => {
        const { results, total_pages, total_results }: SearchResponse<T> = await moviesAPI.fetchSearchMovies<T>({
            type,
            page: Number(page),
            query: q as string,
        });
        return {
            results,
            count: total_results,
            totalPages: total_pages,
        } as MainObject<T>;
    };
    const moviesMap = ['movie', await getItems<Movie>('movie')];
    const showsMap = ['tv', await getItems<Tv>('tv')];
    const peopleMap = ['person', await getItems<Person>('person')];
    const companiesMap = ['company', await getItems<Company>('company')];
    const keywordsMap = ['keyword', await getItems<Keyword>('keyword')];
    const collectionsMap = ['collection', await getItems<Collection>('collection')];

    return { props: { initialItems: [moviesMap, showsMap, peopleMap, companiesMap, keywordsMap, collectionsMap] } };
};

export default SearchPage;
