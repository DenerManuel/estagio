import { FundoCartao } from './FundoCartao.js';
import { ImagemCartao } from './ImagemCartao.js';
import { TituloCartao } from './TituloCartao.js';
import { TooltipCartao } from './TooltipCartao.js';

export class CartaoCategoria extends PIXI.Container {
  constructor(dadosCategoria, opcoes = {}) {
    super();
    this.dadosCategoria = dadosCategoria;
    this.config = {
      largura: opcoes.largura || 150,
      altura: opcoes.altura || 150,
      corFundo: opcoes.corFundo || 0xFFFFFF
    };

    this.criarComponentes();
    this.configurarInteracao();
  }

  criarComponentes() {
    // 1. Fundo do cartão
    this.fundo = new FundoCartao(
      this.config.largura,
      this.config.altura,
      25, // Raio da borda
      this.config.corFundo,
      0xA9A9A9
    );
    this.addChild(this.fundo);

    // 2. Imagem da categoria
    this.imagem = new ImagemCartao(
      `../assets/categorias/${this.dadosCategoria.itens[0].imagem}`,
      this.config.largura,
      this.config.altura
    );
    this.imagem.scale.set(0.35, 0.35)
    this.addChild(this.imagem);

    // 3. Título da categoria
    this.titulo = new TituloCartao(
      this.dadosCategoria.titulo,
      this.config.largura,
      this.config.altura
    );
    this.addChild(this.titulo);

    // // 4. Tooltip
    // this.tooltip = new TooltipCartao(
    //   this.dadosCategoria.itens,
    //   this.config.largura
    // );
    // // this.tooltip.visible = false;
    // this.addChild(this.tooltip);
  }

  configurarInteracao() {
    this.eventMode = 'dynamic';
    this.cursor = 'pointer';

    this.on('pointerover', () => {
      // this.tooltip.visible = true;
      this.fundo.mudarCorBorda(0xFB7302);
    });

    this.on('pointerout', () => {
      // this.tooltip.visible = false;
      this.fundo.mudarCorBorda(0xA9A9A9);
    });
  }
}