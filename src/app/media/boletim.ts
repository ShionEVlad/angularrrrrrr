export enum Aprovação {
  APROVADO = 'Aprovado',
  REPROVADO = 'Reprovado'
}

export class Boletim {
  private __bim1: number;
  private __bim2: number;
  private __bim3: number;
  private __bim4: number;
  private aprovacao: Aprovação;

  constructor() {
    this.__bim1 = 0;
    this.__bim2 = 0;
    this.__bim3 = 0;
    this.__bim4 = 0;
    this.aprovacao = Aprovação.APROVADO;
  }

  set bim1(b1: number) {
    if (b1 >= 0 && b1 <= 100) {
      this.__bim1 = b1;
    }
  }

  get bim1() {
    return this.__bim1;
  }

  set bim2(b2: number) {
    if (b2 >= 0 && b2 <= 100) {
      this.__bim2 = b2;
    }
  }

  get bim2() {
    return this.__bim2;
  }

  set bim3(b3: number) {
    if (b3 >= 0 && b3 <= 100) {
      this.__bim3 = b3;
    }
  }

  get bim3() {
    return this.__bim3;
  }

  set bim4(b4: number) {
    if (b4 >= 0 && b4 <= 100) {
      this.__bim4 = b4;
    }
  }

  get bim4() {
    return this.__bim4;
  }

  calcularMedia() {
    return ((this.__bim1 * 2) + (this.__bim2 * 2) + (this.__bim3 * 3) + (this.__bim4 * 3))/ 10;
  }
}
