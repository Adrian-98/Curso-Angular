import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  constructor() { }

  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('Rtx 4080ti')
  });
}
