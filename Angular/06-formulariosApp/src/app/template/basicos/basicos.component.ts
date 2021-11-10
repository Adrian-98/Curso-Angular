import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm; //copgemos la referencia local de miFormulario creado en html


  initForm = {
    producto: '',
    precio: 0.1,
    existencias: 0
  }
  constructor() { }

  ngOnInit(): void {
  }


  nombreValid(): boolean{
    return this.miFormulario?.controls.producto?.invalid && 
    this.miFormulario?.controls.producto?.touched;
  }

  precioValid(): boolean{
    return this.miFormulario?.controls.precio?.touched
          && this.miFormulario?.controls.precio?.value < 0;
  }

  guardar(){
    console.log(this.miFormulario.value);

    if (this.miFormulario.controls.precio.value < 0){
      console.log('No posteado');
      return;
    }
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }
}
