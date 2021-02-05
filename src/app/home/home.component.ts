import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99,
      poster:'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg'
     },
     {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99,
      poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
     }
    ];
    this.moviesFutureReleases=[];
    
  }

 moviesInTheaters;
 moviesFutureReleases;

}
