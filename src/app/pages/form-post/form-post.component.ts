import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
// import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})


export class FormPostComponent implements OnInit {

  forma  = new FormGroup({});

  constructor(
    private fb: FormBuilder,
  ) {
    this.crearFormulario()

  }

  ngOnInit(): void {
  }
 
  crearFormulario() {
    this.forma = this.fb.group({
      texto  : ['', [ Validators.required, Validators.minLength(5) ]  ],
    });

  }

  guardar() {
    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
     
    }

  }

  
}
