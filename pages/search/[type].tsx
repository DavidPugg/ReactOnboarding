import SearchSidebarItem from '../../components/atoms/SearchSidebarItem/SearchSidebarItem';
import PageSelector from '../../components/molecules/PageSelector';
import Footer from '../../components/organisms/Footer/Footer';
import MainMenu from '../../components/organisms/MainMenu/MainMenu';
import SearchContent from '../../components/organisms/SearchContent/SearchContent';
import SearchSidebar from '../../components/organisms/SearchSidebar/SearchSidebar';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import { Movie, Tv, Person, Company, Keyword, Collection } from '../../interfaces/Movies';
import React, { useEffect, useState } from 'react';
import { FetchSearchMovies, MoviesAPI } from '../../utils/MoviesAPI';
import { useRouter } from 'next/router';

const moviesAPI = new MoviesAPI();

interface MainObject<T> {
    results: Array<T>;
    count: number;
    totalPages: number;
}

export default function SearchPage() {
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
        switch (type) {
            case 'movie':
                return getItems<Movie>(Number(page), type, setMovies);
            case 'tv':
                return getItems<Tv>(Number(page), type, setShows);
            case 'person':
                return getItems<Person>(Number(page), type, setPeople);
            case 'company':
                return getItems<Company>(Number(page), type, setCompanies);
            case 'keyword':
                return getItems<Keyword>(Number(page), type, setKeywords);
            case 'collection':
                return getItems<Collection>(Number(page), type, setCollections);
        }
        window.scrollTo(0, 0);
    }, [type, page, q]);

    useEffect(() => {
        if(!router.isReady) return; 
        getItems<Movie>(Number(page), 'movie', setMovies);
        getItems<Tv>(Number(page), 'tv', setShows);
        getItems<Person>(Number(page), 'person', setPeople);
        getItems<Company>(Number(page), 'company', setCompanies);
        getItems<Keyword>(Number(page), 'keyword', setKeywords);
        getItems<Collection>(Number(page), 'collection', setCollections);
    }, [router.isReady]);

    function handlePageChange(p: number) {
        router.push(`/search/${type}?q=${q}&page=${p}`);
    }

    function getPages() {
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
    }

    const getItems = <T,>(page: number, type: string, func: (obj: MainObject<T>) => void) => {
        let searchParams: FetchSearchMovies = {
            page,
            query: q as string,
            type,
        };
        moviesAPI.fetchSearchMovies<T>(searchParams).then(({ results, total_pages, total_results }) => {
            const resObject = {
                results,
                count: total_results,   
                totalPages: total_pages,
            } as MainObject<T>;
            func(resObject);
        });
    };

    return (
        <MainTemplate
            header={<MainMenu />}
            sidebar={
                <SearchSidebar>
                    <SearchSidebarItem key={'Movies'} label={`Movies`} to={`movie`} count={movies.count} />
                    <SearchSidebarItem key={'Shows'} label={`Shows`} to={`tv`} count={shows.count} />
                    <SearchSidebarItem key={'People'} label={`People`} to={`person`} count={people.count} />
                    <SearchSidebarItem key={'Companies'} label={`Companies`} to={`company`} count={companies.count} />
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
    );
}