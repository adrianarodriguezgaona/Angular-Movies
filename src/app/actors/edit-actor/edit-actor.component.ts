import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDto, actorDto } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: actorDto ={ name: 'Tom Holland', dateOfBirth: new Date(), 
  biography: 'default',
  picture: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{

    });
  }

  saveChanges( actorCreationDto: actorCreationDto){
    console.log(actorCreationDto);
  }

}
