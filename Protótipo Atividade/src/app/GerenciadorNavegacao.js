import { GerenciadorTelas } from './GerenciadorTelas.js';
import { GerenciadorEstado } from './core/GerenciadorEstado.js'

/**
 * Gerenciador de navegação entre telas
 * Responsável por:
 * - Configurar eventos de transição entre telas
 * - Gerenciar interações de UI relacionadas a navegação
 * - Centralizar lógica de mudança de telas
 */

export class GerenciadorNavegacao {
  /**
   * @param {GerenciadorTelas} gerenciadorTelas - Instância do gerenciador de telas
   * @param {GerenciadorEstado} [gerenciadorEstado] - Opcional para rastreamento de estado
   */
  constructor(gerenciadorTelas, gerenciadorEstado = null) {
    /** @type {GerenciadorTelas} */
    this.gerenciadorTelas = gerenciadorTelas;

    /** @type {GerenciadorEstado|null} */
    this.estado = gerenciadorEstado;

    /** @type {Object} - Callbacks de navegação */
    this.callbacks = {
      antesDeSairDaTela: null,
      depoisDeEntrarNaTela: null
    };
  }

  /**
   * Configura todos os eventos de navegação
   */
  configurar() {
    this._configurarBotaoRevisao();
    this._configurarBotaoVoltar();
    
    // Configuração opcional para outras telas
    this._configurarEventosGenericos();
  }

  /**
   * Configura callback para eventos de navegação
   * @param {'antesDeSairDaTela'|'depoisDeEntrarNaTela'} tipo 
   * @param {Function} callback 
   */
  configurarCallback(tipo, callback) {
    if (this.callbacks[tipo]) {
      console.warn(`Substituindo callback existente para ${tipo}`);
    }
    this.callbacks[tipo] = callback;
  }

  /**
   * Navega para uma tela específica
   * @param {string} nomeTela - Nome da tela de destino
   * @param {Object} [dados] - Dados adicionais para a tela
   */
  navegarPara(nomeTela, dados = {}) {
    // Executa callback antes de sair da tela atual
    if (this.callbacks.antesDeSairDaTela) {
      this.callbacks.antesDeSairDaTela(this.gerenciadorTelas.telaAtual, nomeTela);
    }

    this.gerenciadorTelas.carregarTela(nomeTela, dados);

    // Executa callback após entrar na nova tela
    if (this.callbacks.depoisDeEntrarNaTela) {
      this.callbacks.depoisDeEntrarNaTela(nomeTela);
    }

    // Atualiza estado se existir
    if (this.estado) {
      this.estado.atualizar({ 
        telaAnterior: this.estado.obter('telaAtual'),
        telaAtual: nomeTela,
        ...dados
      });
    }
  }

  /**
   * Configura eventos do botão de revisão
   * @private
   */
  _configurarBotaoRevisao() {
    const botao = this.gerenciadorTelas.telas.inicial?.botaoRevisao;
    if (!botao) {
      console.warn('Botão de revisão não encontrado na tela inicial');
      return;
    }

    botao.on('click', () => {
      this.navegarPara('revisao', { origem: 'botaoRevisao' });
    });
  }

  /**
   * Configura eventos do botão voltar
   * @private
   */
  _configurarBotaoVoltar() {
    const telaRevisao = this.gerenciadorTelas.telas.revisao;
    if (!telaRevisao) return;

    const botao = telaRevisao.adicionarBotaoVoltar?.();
    if (!botao) {
      console.warn('Botão voltar não encontrado na tela de revisão');
      return;
    }

    botao.on('click', () => {
      this.navegarPara('inicial', { origem: 'botaoVoltar' });
    });
  }

  /**
   * Configura eventos genéricos de navegação
   * @private
   */
  _configurarEventosGenericos() {
    // Exemplo: pode adicionar eventos de teclado
    // window.addEventListener('keydown', (e) => { ... });
  }

  /**
   * Remove todos os eventos de navegação
   */
  destruir() {
    // Limpeza de event listeners se necessário
  }
}