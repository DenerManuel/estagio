import { Text } from 'pixi.js';

/**
 * @extends Text
 *
 * @description
 * Componente de texto centralizado usando PIXI.Text.
 * Esse componente permite criar textos customizados com várias opções de estilo.
 * O ponto de ancoragem (anchor) já vem configurado para o centro (0.5, 0.5).
 *
 * @param {string} text - Texto que será exibido na tela.
 * @param {PIXI.TextStyleOptions} style - Objeto com as opções de estilo do texto (veja abaixo).
 *
 * @example
 * const myText = new CustomText('Hello World!', {
 *   fontFamily: 'Arial',          // Fonte usada
 *   fontSize: 26,                 // Tamanho da fonte
 *   fontWeight: 'bold',           // Peso da fonte (bold, normal, 400, etc)
 *   fill: 0xFFCC00,               // Cor do texto (em hexadecimal numérico)
 *   align: 'center',              // Alinhamento do texto
 *   stroke: 0x000000,             // Cor do contorno do texto
 *   strokeThickness: 0            // Espessura do contorno
 *   lineHeight: 36,               // Espaçamento entre linhas
 *   letterSpacing: 2,             // Espaço entre letras
 *   dropShadow: true,             // Ativa sombra
 *   dropShadowColor: 0x000000,    // Cor da sombra
 *   dropShadowBlur: 5,            // Nível de desfoque da sombra
 *   dropShadowDistance: 4,        // Distância da sombra
 *   dropShadowAngle: Math.PI / 4, // Ângulo da sombra
 *   wordWrap: false,              // Quebra automática de linha
 *   wordWrapWidth: 100,           // Largura máxima antes de quebrar linha
 *   padding: 0,                   // Espaço interno entre texto e borda
 * });
 */
export default class CustomText extends Text {
  /**
   * Cria um novo texto centralizado com estilo personalizado.
   *
   * @param {string} text – Texto a ser exibido.
   * @param {PIXI.TextStyleOptions} style – Estilos de texto baseados na classe PIXI.TextStyle.
   */
  constructor(text, style) {
    super(text, style);

    // Define o ponto de ancoragem para o centro (horizontal e vertical)
    this.anchor.set(0.5);
  }

  /**
   * Atualiza o estilo do texto com novas propriedades.
   * Apenas as propriedades fornecidas em `newStyle` serão alteradas.
   *
   * @param {Partial<PIXI.TextStyleOptions>} newStyle - Um objeto contendo as novas propriedades de estilo a serem aplicadas.
   * @example
   * myText.updateStyle({ fill: 0xff0000, fontSize: 30 }); // Muda a cor para vermelho e o tamanho da fonte
   */
  updateStyle(newStyle) {
    // Object.assign mescla o novo estilo com o estilo existente,
    // atualizando apenas as propriedades especificadas.
    this.style = Object.assign(this.style, newStyle);
  }
}
