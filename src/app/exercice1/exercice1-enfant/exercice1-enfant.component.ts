import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  //on définit l'attribut 'valeur' qui sera set à l'appelle du composant
  @Input() valeur: number;

  //on définit un event qui pouras être récupérer dans le composant parent
  @Output() eventmodifValeur: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  incrementation(){
    this.valeur = this.valeur + 1
    console.log(this.valeur);
    //eventmodifValeur emit => 'valeur'
    this.eventmodifValeur.emit(this.valeur);
  }

  decrementation(){
    this.valeur = this.valeur - 1
    console.log(this.valeur);
    this.eventmodifValeur.emit(this.valeur);
  }
}
