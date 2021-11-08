import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {


  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    },
  ]

  heroe: Heroe = {

    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters:       '',
	  alt_img: '',
  }
    

  constructor(private heroeService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
    if (this.router.url.includes('editar')){
      
      this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.heroeService.getHeroePorId(id))
        )
        .subscribe(heroe => this.heroe = heroe)
    }
    
  }


  guardar(){
    if (this.heroe.superhero.trim().length === 0)
      return;

    if (this.heroe.id){
      this.heroeService.actualizarHeroe(this.heroe)
      .subscribe(heroe => console.log('Actualizando', heroe))
    }
    else {
      this.heroeService.agregarHeroe(this.heroe)
      .subscribe(resp => {
        this.router.navigate(['/heroes/editar', resp.id]);
      })
    }
  }
}
