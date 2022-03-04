export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: number;
}

export interface Tv {
    id: number;
    poster_path: string;
    name: string;
    first_air_date: string;
}

export interface Person {
    id: number;
    name: string;
    known_for_department: string;
    known_for: Array<{ name: string; title: string }>;
    profile_path: string;
}
export interface Company {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}
export interface Keyword {
    id: number;
    name: string;
}
export interface Collection {
    id: number;
    poster_path: string;
    name: string;
}
