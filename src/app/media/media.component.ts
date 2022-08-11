import { Component, OnInit } from '@angular/core';
import { Aprovação, Boletim } from './boletim';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  boletim: Boletim;
  resultado: number;
  aprovacao: Aprovação;

  constructor() {}

  ngOnInit() {
    this.boletim = new Boletim();
    this.resultado = 0;
    this.aprovacao = Aprovação.APROVADO;
  }

  calcular() {
    this.resultado = this.boletim.calcularMedia();
    if (this.resultado <60){
      this.aprovacao = Aprovação.REPROVADO
    } else if (this.resultado >=60){
      this.aprovacao = Aprovação.APROVADO
    }
    return this.resultado, this.aprovacao
  }
  
}
