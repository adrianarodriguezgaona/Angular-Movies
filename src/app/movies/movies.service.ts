import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { homeDTO, movieCreationDTO, movieDTO, MoviePostGetDTO, MoviePutGetDTO } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + "/movies";

  public getHomePageMovies(): Observable<homeDTO>{
    return this.http.get<homeDTO>(`${this.apiURL}/GetMovies`);
  }

  public getById(id: number): Observable<movieDTO>{
    return this.http.get<movieDTO>(`${this.apiURL}/GetById/${id}`);
  }

  public filter(values: any): Observable<any>{
    const params = new HttpParams({fromObject: values});
    return this.http.get<movieDTO[]>(`${this.apiURL}/Filter`, {params, observe: 'response'});
  }

  public putGet(id:number): Observable<MoviePutGetDTO>{
    return this.http.get<MoviePutGetDTO>(`${this.apiURL}/PutGetById/${id}`);
  }

  public edit(id: number, movieCreationDTO: movieCreationDTO){
    const formData = this.BuildFormData(movieCreationDTO);
    return this.http.put(`${this.apiURL}/Edit/${id}`, formData);
  }

  public postGet(): Observable<MoviePostGetDTO>{
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/PostGet`);
  }

  public create(movieCreationDTO: movieCreationDTO): Observable<number>{
    const formData = this.BuildFormData(movieCreationDTO);
    return this.http.post<number>(`${this.apiURL}/PostMovie`, formData);
  }
  
  public delete(id: number){
    return this.http.delete(`${this.apiURL}/deleteMovie/${id}`);
  }

  private BuildFormData(movie: movieCreationDTO):FormData {
    const formData = new FormData();

    formData.append('name', movie.name);
    formData.append('summary', movie.summary);
    formData.append('trailer', movie.trailer);
    formData.append('inTheaters', String (movie.inTheaters));
    if (movie.releaseDate){
      formData.append('releaseDate', formatDateFormData(movie.releaseDate));
    }

    if (movie.poster){
      formData.append('poster', movie.poster);
    }

    formData.append('genresIds', JSON.stringify(movie.genresIds));
    formData.append('movieTheatersIds', JSON.stringify(movie.movieTheatersIds));
    formData.append('actors', JSON.stringify(movie.actors));

    return formData;
  }

}
