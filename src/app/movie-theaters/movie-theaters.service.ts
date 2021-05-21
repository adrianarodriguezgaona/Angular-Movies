import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieCreationDTO } from '../movies/movies.model';
import { movieTheatersCreationDTO, movieTheatersDTO } from './movie-theaters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL +'/movieTheaters';
 
  public get(){
    return this.http.get<movieTheatersDTO[]>(`${this.apiURL}/GetMovieTheaters`);
  }

  public getById(id: number): Observable<movieTheatersDTO>{
    return this.http.get<movieTheatersDTO>(`${this.apiURL}/GetMovieTheater/${id}`);
  }
  
  public create(movieTheaterDTO: movieTheatersCreationDTO){
    return this.http.post(`${this.apiURL}/PostMovieTheater`, movieTheaterDTO);
  }

  public edit(id: number, movieTheaterDTO: movieTheatersCreationDTO){
    return this.http.put(`${this.apiURL}/EditMovieTheater/${id}`, movieTheaterDTO);
  }

  public delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`)

  }
}
