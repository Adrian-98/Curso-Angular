import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  //keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //Json Pipe
  heroes = [
    {
      nombre :'Iron Man',
      value: 'volar',
      poder: 300
    },
    {
      nombre :'Spiderman',
      value: 'tela de araña',
      poder: 600
    },
    {
      nombre :'Captain America',
      value: 'Shield',
      poder: 450
    },
  ]


  //Async Pipe

  miobservable = interval(1000); //0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('tenemos data de promesa');
    }, 3500);
  })
}

