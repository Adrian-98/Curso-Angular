import { ɵBrowserPlatformLocation } from '@angular/common';
import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

 check: boolean = false;

 ordenarPor: string = '';

 heroe: Heroe [] = [{
   nombre: 'Superman',
   vuela: true,
   color: Color.azul
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Batman',
      vuela: true,
      color: Color.marron
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.azul
    }
  ]
 cambiarBoolean(){
  this.check = !this.check;
}
  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
}
