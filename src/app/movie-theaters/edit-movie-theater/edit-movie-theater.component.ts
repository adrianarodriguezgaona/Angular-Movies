import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheatersDTO = {name: 'Teatro Colon', latitude: 4.596738429045296, longitude: -74.07439470291139};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheater : movieTheatersCreationDTO){
    console.log(movieTheater);
  }

}
