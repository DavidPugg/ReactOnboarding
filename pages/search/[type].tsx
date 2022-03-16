import SearchSidebarItem from '../../components/atoms/SearchSidebarItem/SearchSidebarItem';
import PageSelector from '../../components/molecules/PageSelector';
import Footer from '../../components/organisms/Footer/Footer';
import MainMenu from '../../components/organisms/MainMenu/MainMenu';
import SearchContent from '../../components/organisms/SearchContent/SearchContent';
import SearchSidebar from '../../components/organisms/SearchSidebar/SearchSidebar';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import { Movie, Tv, Person, Company, Keyword, Collection } from '../../interfaces/Movies';
import React, { useEffect, useState } from 'react';
import { MoviesAPI } from '../../utils/MoviesAPI';
import { useRouter } from 'next/router';
import { SearchResponse } from 'interfaces/API';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

const moviesAPI = new MoviesAPI();

interface Props {
    movieProps: MainObject<Movie>;
    tvProps: MainObject<Tv>;
    personProps: MainObject<Person>;
    companyProps: MainObject<Company>;
    keywordProps: MainObject<Keyword>;
    collectionProps: MainObject<Collection>;
}

interface MainObject<T> {
    results: Array<T>;
    count: number;
    totalPages: number;
}

const SearchPage = ({ movieProps, tvProps, personProps, companyProps, keywordProps, collectionProps }: Props) => {
    const router = useRouter();
    const { page, q, type } = router.query;

    const mainObject = {
        results: [],
        count: 0,
        totalPages: 0,
    } as MainObject<any>;

    const [movies, setMovies] = useState<MainObject<Movie>>(mainObject);
    const [shows, setShows] = useState<MainObject<Tv>>(mainObject);
    const [people, setPeople] = useState<MainObject<Person>>(mainObject);
    const [companies, setCompanies] = useState<MainObject<Company>>(mainObject);
    const [keywords, setKeywords] = useState<MainObject<Keyword>>(mainObject);
    const [collections, setCollections] = useState<MainObject<Collection>>(mainObject);

    useEffect(() => {
        setMovies(movieProps);
        setShows(tvProps);
        setPeople(personProps);
        setCompanies(companyProps);
        setKeywords(keywordProps);
        setCollections(collectionProps);
    }, []);

    useEffect(() => {
        switch (type) {
            case 'movie':
                getItems<Movie>(Number(page), 'movie', setMovies);
                break;
            case 'tv':
                getItems<Tv>(Number(page), 'tv', setShows);
                break;
            case 'person':
                getItems<Person>(Number(page), 'person', setPeople);
                break;
            case 'keyword':
                getItems<Keyword>(Number(page), 'keyword', setKeywords);
                break;
            case 'company':
                getItems<Company>(Number(page), 'company', setCompanies);
                break;
            case 'collection':
                getItems<Collection>(Number(page), 'collection', setCollections);
                break;
        }
        window.scrollTo(0, 0);
    }, [page, q, type]);

    const handlePageChange = (p: number) => {
        router.push(`/search/${type}?q=${q}&page=${p}`, undefined, { shallow: true });
    };

    const getPages = () => {
        switch (type) {
            case 'movie':
                return movies.totalPages;
            case 'tv':
                return shows.totalPages;
            case 'person':
                return people.totalPages;
            case 'company':
                return companies.totalPages;
            case 'keyword':
                return keywords.totalPages;
            case 'collection':
                return collections.totalPages;
            default:
                return 0;
        }
    };

    const getItems = async <T,>(page: number, type: string, func: (obj: MainObject<T>) => void) => {
        const { results, total_pages, total_results } = await moviesAPI.fetchSearchMovies<T>({
            page,
            query: q as string,
            type,
        });
        func({ results, count: total_results, totalPages: total_pages });
    };

    return (
        <>
            <Head>
                <title>Movie App - Search</title>
            </Head>
            <MainTemplate
                header={<MainMenu />}
                sidebar={
                    <SearchSidebar>
                        <SearchSidebarItem key={'Movies'} label={`Movies`} to={`movie`} count={movies.count} />
                        <SearchSidebarItem key={'Shows'} label={`Shows`} to={`tv`} count={shows.count} />
                        <SearchSidebarItem key={'People'} label={`People`} to={`person`} count={people.count} />
                        <SearchSidebarItem
                            key={'Companies'}
                            label={`Companies`}
                            to={`company`}
                            count={companies.count}
                        />
                        <SearchSidebarItem key={'Keywords'} label={`Keywords`} to={`keyword`} count={keywords.count} />
                        <SearchSidebarItem
                            key={'Collections'}
                            label={`Collections`}
                            to={`collection`}
                            count={collections.count}
                        />
                    </SearchSidebar>
                }
                footer={<Footer />}
            >
                <SearchContent
                    movies={movies.results}
                    shows={shows.results}
                    people={people.results}
                    companies={companies.results}
                    keywords={keywords.results}
                    collections={collections.results}
                />
                <PageSelector
                    totalPages={getPages()}
                    onPageChange={(p: number) => handlePageChange(p)}
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
    const movieProps = await getItems<Movie>('movie');
    const tvProps = await getItems<Tv>('tv');
    const personProps = await getItems<Person>('person');
    const companyProps = await getItems<Company>('company');
    const keywordProps = await getItems<Keyword>('keyword');
    const collectionProps = await getItems<Collection>('collection');

    return { props: { movieProps, tvProps, personProps, companyProps, keywordProps, collectionProps } };
};

export default SearchPage;
