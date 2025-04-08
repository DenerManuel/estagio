import { Alinhamento } from './config.js';
import { AlinhamentoHorizontal } from './AlinhamentoHorizontal.js';
import { AlinhamentoVertical } from './AlinhamentoVertical.js';

export class Posicionador {
  static posicionar(elemento, container, config) {
    const { 
      horizontal = Alinhamento.HORIZONTAL.CENTRO,
      vertical = Alinhamento.VERTICAL.MEIO,
      margem = 0
    } = config;

    elemento.position.set(
      AlinhamentoHorizontal.calcular(
        horizontal,
        container.width,
        elemento.width,
        margem
      ),
      AlinhamentoVertical.calcular(
        vertical,
        container.height,
        elemento.height,
        margem
      )
    );
  }
}