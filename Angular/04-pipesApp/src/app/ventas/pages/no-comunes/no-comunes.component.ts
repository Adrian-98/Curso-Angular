import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string ='Susana';
  genero: string = 'femenino';

  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla',
  }
  // i18nPlural
  clientes: string [] = ['Maria', 'pedro', 'ana', 'adrian', 'carla'];
  clientesMap = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos 2 clientes esperando',
    'other' : 'tenemos # clientes esperando',
  }

  cambiarCliente(){
    this.nombre='Adrian';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

}
