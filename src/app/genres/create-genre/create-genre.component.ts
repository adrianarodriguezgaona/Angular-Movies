import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';


@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router, private genresServices : GenresService ) { }

  ngOnInit(): void {
   

  }
  saveChanges(genreCreationDTO: genreCreationDTO){
    //...save the genre 
    this.genresServices.create(genreCreationDTO).subscribe(() =>{
      this.router.navigate(['/genres']);
    }, error => console.error(error));
     
  }

}
