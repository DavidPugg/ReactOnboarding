export interface FetchMovies {
    page: number;
    filters: Array<number>;
    sort: string;
}

export interface FetchSearchMovies {
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
