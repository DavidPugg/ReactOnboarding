import axios from 'axios';

interface FetchMovies {
    page: number;
    filters: Array<number>;
    sort: string;
}

interface FetchSearchMovies {
    page: number;
    query: string | null;
    type: string;
}

export interface SearchResponse<T> {
    total_pages: number;
    total_results: number;
    results: Array<T>;
}

export interface PopularSearchResponse<T> {
    results: Array<T>;
}

export class MoviesAPI {
    fetchMovies = async ({ page, filters, sort }: FetchMovies) => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${
                process.env.API_KEY
            }&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_genres=${filters.join(
                ',',
            )}`,
        );
        return data;
    };

    fetchSearchMovies = async <T>({ page, type, query }: FetchSearchMovies) => {
        const { data } = await axios.get<SearchResponse<T>>(
            `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.API_KEY}&query=${query}&page=${page}`,
        );
        return data;
    };

    fetchPopularMovies = async <T>({ type }: { type: string }) => {
        const { data } = await axios.get<PopularSearchResponse<T>>(
            `https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
        );
        return data;
    };

    fetchMovieDetails = async <T1, T2>(id: string) => {
        const details = await axios.get<T1>(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`,
        );

        const crew = await axios.get<{crew: Array<T2>}>(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`,
        );
        return { details: details.data, crew: crew.data.crew };
    };
}
