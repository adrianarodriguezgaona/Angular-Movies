import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDto } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: actorCreationDto ={ name: 'Tom Holland', dateOfBirth: new Date()}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{

    });
  }

  saveChanges( actorCreationDto: actorCreationDto){
    console.log(actorCreationDto);
  }

}
