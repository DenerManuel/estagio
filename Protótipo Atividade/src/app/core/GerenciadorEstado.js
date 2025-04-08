/**
 * Sistema centralizado de gerenciamento de estado do jogo.
 * Implementa o padrão Observer para notificação de mudanças
 */
export class GerenciadorEstado {
  /**
   * @param {Object} estadoInicial - Estado inicial do jogo
   */
  constructor(estadoInicial = {}) {
    /** @type {Object} - Estado atual do jogo */
    this._estado = estadoInicial;
    
    /** @type {Array<Function>} - Lista de ouvintes de mudanças */
    this._ouvintes = [];
  }

  /**
   * Obtém o valor atual de uma propriedade
   * @param {string} chave - Chave da propriedade
   * @returns {any} Valor atual
   */
  obter(chave) {
    return this._estado[chave];
  }

  /**
   * Atualiza o estado e notifica os ouvintes
   * @param {Object} atualizacoes - Novos valores a serem mesclados
   */
  atualizar(atualizacoes) {
    this._estado = { ...this._estado, ...atualizacoes };
    this._notificarOuvintes();
  }

  /**
   * Registra um ouvinte para mudanças de estado
   * @param {Function} callback - Função a ser executada nas mudanças
   * @returns {Function} Função para cancelar a inscrição
   */
  inscrever(callback) {
    this._ouvintes.push(callback);
    return () => {
      this._ouvintes = this._ouvintes.filter(ouvinte => ouvinte !== callback);
    };
  }

  /**
   * Notifica todos os ouvintes sobre mudanças
   * @private
   */
  _notificarOuvintes() {
    this._ouvintes.forEach(ouvinte => ouvinte(this._estado));
  }
}

/**
 * Tipos de Estado Padrão
 * @typedef {Object} EstadoJogo
 * @property {string} telaAtual - Tela atualmente visível
 * @property {boolean} jogoPausado - Se o jogo está em pausa
 * @property {number} progressoCarregamento - Progresso de carregamento (0-100)
 */