import { Component } from '@angular/core';
import { Localita } from '../localita';
import { LOCALITA } from './lista-localita.components';

@Component({
  selector: 'app-localita',
  templateUrl: './lista-localita-components.html',
  styleUrls: ['./lista-localita-components.css'],
})
export class LocalitaComponent {
  localita = LOCALITA;
  mostraImmagine: boolean = false;
  listFilter: string = '';

  mostraNascondi() {
    this.mostraImmagine = !this.mostraImmagine;
  }
}
