import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO, genreDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor( private formBuilder: FormBuilder ) { }

  @Input()
  model: genreDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreDTO>();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['',{
        validators: [Validators.required, Validators.minLength(3),firstLetterUppercase()]
      }],
      id: 0
    });

    // to inject the model in the form:

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }    

  }
  saveChanges(){
   this.onSaveChanges.emit(this.form.value);// I get acces to that final object that represents everything that the user has put into the form
  }
  getErrorMessageFieldName(){
    const field= this.form.get('name');
    if(field.hasError('required')){
      return 'The name field is required';
    }
    if(field.hasError('minlength')){
      return 'The minimum length is 3';
    }

    if(field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message; // this message comes from the validator
    }

    return '';
  }

}
