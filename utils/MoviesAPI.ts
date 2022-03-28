import axios from 'axios';
import { FetchMovies, FetchSearchMovies, PopularSearchResponse, SearchResponse } from 'interfaces/API';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export class MoviesAPI {
    fetchMovies = async ({ page, filters, sort }: FetchMovies) => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${
                publicRuntimeConfig.apiKey
            }&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_genres=${filters.join(
                ',',
            )}`,
        );
        return data;
    };

    fetchSearchMovies = async <T>({ page, type, query }: FetchSearchMovies) => {
        const { data } = await axios.get<SearchResponse<T>>(
            `https://api.themoviedb.org/3/search/${type}?api_key=${publicRuntimeConfig.apiKey}&query=${query}&page=${page}`,
        );
        return data;
    };

    fetchAllSearchMovies = async (query: string, types: string[]) => {
        let array = [];
        for (let type of types) {
            const { data } = await axios.get<SearchResponse<any>>(
                `https://api.themoviedb.org/3/search/${type}?api_key=${publicRuntimeConfig.apiKey}&query=${query}&page=1`,
            );
            const mapItemData = {
                results: data.results,
                count: data.total_results,
                totalPages: data.total_pages,
            };
            array.push([type, mapItemData]);
        }
        return array;
    };

    fetchPopularMovies = async <T>({ type }: { type: string }) => {
        const { data } = await axios.get<PopularSearchResponse<T>>(
            `https://api.themoviedb.org/3/${type}/popular?api_key=${publicRuntimeConfig.apiKey}&language=en-US&page=1`,
        );
        return data;
    };

    fetchMovieDetails = async <T1, T2>(id: string) => {
        const details = await axios.get<T1>(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${publicRuntimeConfig.apiKey}&language=en-US&page=1`,
        );

        const crew = await axios.get<{ crew: Array<T2> }>(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${publicRuntimeConfig.apiKey}&language=en-US`,
        );
        return { details: details.data, crew: crew.data.crew };
    };
}
