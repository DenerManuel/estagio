import { Alinhamento } from './config.js';

export class AlinhamentoHorizontal {
  static calcular(posicao, larguraContainer, larguraElemento) {
    switch(posicao) {
      case Alinhamento.HORIZONTAL.INICIO:
        return 0;
      case Alinhamento.HORIZONTAL.CENTRO:
        return (larguraContainer - larguraElemento) / 2;
      case Alinhamento.HORIZONTAL.FIM:
        return larguraContainer - larguraElemento;   
      default:
        return 0;
    }
  }
}