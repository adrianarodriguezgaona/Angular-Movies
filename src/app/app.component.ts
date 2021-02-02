import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99
     },
     {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99
     }
    ];
    this.moviesFutureReleases=[{
      title: 'Avengers',
      releaseDate: new Date(),
      price: 456.99
     },
     {
      title: 'Toy Story',
      releaseDate: new Date('2021-02-24'),
      price: 789.99
     }
    ];
    
  }
 moviesInTheaters;
 moviesFutureReleases;
}
