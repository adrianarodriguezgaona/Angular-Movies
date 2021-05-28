import { actorsMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheatersDTO } from "../movie-theaters/movie-theaters.model";

export interface movieCreationDTO{
    name: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[];
    movieTheatersIds: number[];
    actors
}

export interface movieDTO{

    name: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genres: genreDTO[];
    movieTheaters: movieTheatersDTO[];
    actors: actorsMovieDTO[];
}

export interface MoviePostGetDTO{
    genres: genreDTO[];
    movieTheaters: movieTheatersDTO[];
}
