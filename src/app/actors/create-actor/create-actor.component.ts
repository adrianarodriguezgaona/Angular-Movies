import { Component, OnInit } from '@angular/core';
import { actorCreationDto } from '../actors.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(actorCreationDto: actorCreationDto){
    console.log(actorCreationDto);
  }

}
