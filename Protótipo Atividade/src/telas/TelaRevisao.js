import { CartaoCategoria } from '../components/Cartao/CartaoCategoria.js';
import { BotaoEstilizado } from '../components/Botao/BotaoEstilizado.js';
import { ContainerPersonalizado } from '../components/Container/ContainerPersonalizado.js';

export class TelaRevisao extends PIXI.Container {
  constructor(app, categorias) {
    super();
    this.app = app;
    this.categorias = categorias;

    this.criarCartoes();
  }

  // Cria e posiciona os cartões em grid
  criarCartoes() {
    this.container = new PIXI.Container();
    
    this.containerCartoes = new PIXI.Container();
    this.addChild(this.containerCartoes);

    // Configurações do grid
    const larguraCartao = 85;
    const alturaCartao = 85;
    const margem = 5;
    const colunas = 8;

    // Posicionamento inicial
    let positionX = 0;
    let positionY = 0;

    // Cria cada cartão
    // this.categorias.forEach((categoria, indice) =>
    for (let i = 1; i <= 32; i++) {
      const cartao = new CartaoCategoria(this.categorias[0], {
        largura: larguraCartao,
        altura: alturaCartao,
        corFundo: 0xF5F5F5
      });

      cartao.position.set(
        positionX * (larguraCartao + margem),
        positionY * (alturaCartao + margem)
      );

      this.containerCartoes.addChild(cartao);

      // Atualiza posição para o próximo cartão
      positionX++;
      if (positionX >= colunas) {
        positionX = 0;
        positionY++;
      }
    };

    // Centraliza o grid horizontalmente
    this.containerCartoes.position.set(
      (this.app.screen.width - (colunas * larguraCartao + (colunas - 1) * margem)) / 2,
      150 // Abaixo do título
    );
  }

  adicionarBotaoVoltar() {
    this.botaoVoltar = new BotaoEstilizado('Voltar', {
      largura: 70,
      altura: 50,
      corFundo: 0xFB7302,
      corHover: 0xFCD2AE,
      tamanhoFonte: 18
    });

    this.botaoVoltar.position.set(
      20, // Margem esquerda
      this.app.screen.height - 530 // Margem inferior
    );
    this.botaoVoltar.fontSize = 12

    this.addChild(this.botaoVoltar);
    return this.botaoVoltar; // Retorna para permitir event listeners
  }
}