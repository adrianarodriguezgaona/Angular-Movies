import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO;


  // model: movieDTO = {name: 'Maleficent', inTheaters: true, summary: "whatever",
  // releaseDate: new Date(), trailer:'link aqui', poster:'https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_UX182_CR0,0,182,268_AL_.jpg' }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{

    });
  }

  saveChanges(movieCreationDTO : movieCreationDTO){

  }
}
