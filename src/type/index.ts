export type ComponentParameters = {
    title?: string;
    fetchURL: string;
    isBackdrop: boolean; // 아이템을 옆으로 눕혀서 표시
};
export type ContentTypes = {
    // tmdb api request.data.results 구조
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
export type MousePoint = {
    x: number;
    y: number;
};
export type StyledProps = {
    imageURL: string;
};
