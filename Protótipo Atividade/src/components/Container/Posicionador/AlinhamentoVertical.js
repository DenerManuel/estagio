import { Alinhamento } from './config.js';

export class AlinhamentoVertical {
  static calcular(posicao, alturaContainer, alturaElemento) {
    switch(posicao) {
      case Alinhamento.VERTICAL.TOPO:
        return 0;
      case Alinhamento.VERTICAL.MEIO:
        return (alturaContainer - alturaElemento) / 2;
      case Alinhamento.VERTICAL.BASE:
        return alturaContainer - alturaElemento;
      default:
        return 0;
    }
  }
}