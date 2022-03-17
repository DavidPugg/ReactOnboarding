import SearchMovieItem from '@components/molecules/SearchMovieItem';
import React from 'react';
import SearchCompanyItem from '../../molecules/SearchCompanyItem/SearchCompanyItem';
import SearchKeywordItem from '../../atoms/SearchKeywordItem/SearchKeywordItem';
import SearchPersonItem from '../../molecules/SearchPersonItem/SearchPersonItem';
import styles from './SearchContent.module.scss';
import { useRouter } from 'next/router';
import { MainObject } from 'pages/search/[type]';

interface Props {
    items: Omit<Map<string, MainObject<any>>, 'set' | 'clear' | 'delete'>;
}

const SearchContent = ({ items }: Props) => {
    const router = useRouter();
    const { type } = router.query;

    const getTitle = (known_for: Array<{ name: string; title: string }>) => {
        if (known_for.length != 0 && known_for[0].name != undefined) {
            return known_for[0].name;
        } else if (known_for.length != 0 && known_for[0].title != undefined) {
            return known_for[0].title;
        }
        return '';
    };

    const renderSwitch = (key: string, results: Array<any>) => {
        switch (key) {
            case 'movie':
                return results.map(({ id, poster_path, title, release_date }) => (
                    <SearchMovieItem key={id} id={id} img={poster_path} title={title} release={release_date} />
                ));
            case 'tv':
                return results.map(({ id, poster_path, name, first_air_date }) => (
                    <SearchMovieItem key={id} id={id} img={poster_path} title={name} release={first_air_date} />
                ));
            case 'person':
                return results.map(({ id, name, known_for_department, known_for, profile_path }) => (
                    <SearchPersonItem
                        key={id}
                        img={profile_path}
                        name={name}
                        known_for={known_for_department}
                        movie={getTitle(known_for)}
                    />
                ));
            case 'company':
                return results.map(({ id, name, logo_path, origin_country }) => (
                    <SearchCompanyItem key={id} name={name} img={logo_path} country={origin_country} />
                ));
            case 'keyword':
                return results.map(({ id, name }) => <SearchKeywordItem key={id} name={name} />);
            case 'collection':
                return results.map(({ id, poster_path, name }) => (
                    <SearchMovieItem key={id} id={id} img={poster_path} title={name} release={''} />
                ));
            default:
                '';
                break;
        }
    };

    return (
        <>
            {Array.from(items).map(
                ([key, { results }]) =>
                    type == key && (
                        <div key={key} className={styles.list}>
                            {results.length <= 0 && <p>There are no results that matched your query</p>}
                            {results.length > 0 && renderSwitch(key, results)}
                        </div>
                    ),
            )}
        </>
    );
};
export default SearchContent;
