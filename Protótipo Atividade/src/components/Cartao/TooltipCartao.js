/**
 * Cria o tooltip que aparece ao passar o mouse
 */
export class TooltipCartao extends PIXI.Container {
  constructor(itens, larguraCartao) {
    super();
    this.visible = false;
    this.itens = itens;
    this.larguraCartao = larguraCartao;

    this.criarFundo();
    this.criarTitulo();
    this.criarTexto();
    this.posicionarTooltip();
  }

  criarFundo() {
    const fundo = new PIXI.Graphics()
      .beginFill(0xFFFFFF)
      .drawRect(0, 0, this.larguraCartao + 40, 100)
      .endFill();
    this.addChild(fundo);
  }

  criarTitulo() {
    const texto = new PIXI.Text(
      this.itens.titulo,
      {
        fontFamily: 'Arial',
        fontSize: 14,
        fill: 0x000000,
        align: 'center'
      }
    );
    texto.position.set(10, 30);
    this.addChild(texto);
  }

  criarTexto() {
    // const texto = new PIXI.Text(
    //   `${this.itens[0].nome}, `,
    //   { 
    //     fontFamily: 'Arial', 
    //     fontSize: 14, 
    //     fill: 0x000000, 
    //     wordWrap: true, 
    //     wordWrapWidth: this.larguraCartao 
    //   }
    // );
    // texto.position.set(10, 30);
    // this.addChild(texto);

  }

  posicionarTooltip() {
    this.y = -110;
    this.x = -20;
  }
}