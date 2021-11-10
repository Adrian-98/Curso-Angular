import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
} 

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevojuego: string = '';

  persona: Persona = {
    nombre: 'Adrian',
    favoritos: [
      {id: 1, nombre: 'Death Stranding'},
      {id: 2, nombre: 'Metal Gear'},

    ]
  }

  guardar(){
    console.log('formulario posteado')
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregar(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevojuego,
    }
    this.persona.favoritos.push({...nuevoFavorito});
  }
}
