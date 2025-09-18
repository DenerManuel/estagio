import { App } from "../../app/App.js"

/**
 * Calcula a posição X pra que **o centro** do componente fique no meio da tela.
 *
 * @param {number} width - Largura do componente.
 * @returns {number} - Posição X do ponto médio do componente.
 */
export const calculateCenteredXPosition = (width) => {
  return (App.getInstance().renderer.width / 2) - (width / 2)
}
/**
 * Calcula a posição Y pra que **o centro** do componente fique no meio da tela.
 *
 * @param {number} height - Altura do componente.
 * @returns {number} - Posição Y do ponto médio do componente.
 */
export const calculateCenteredYPosition = (height) => {
  return (App.getInstance().renderer.height / 2) - (height / 2)
}

/**
 * Calcula a posição X pra que **a borda direita** do componente fique alinhada ao centro da tela.
 *
 * Exemplo: se width for 100, a função retorna (screenWidth/2 - 100),
 * então o ponto final (direito) do componente fica em screenWidth/2.
 *
 * @param {number} width - Largura do componente.
 * @returns {number} - Posição X do canto direito do componente.
 */
export const calculateRightCenteredXPosition = (width) => {
  return (App.getInstance().renderer.width / 2) - width
}

/**
 * Retorna a posição X pra que **a borda esquerda** do componente fique alinhada ao centro da tela.
 *
 * Exemplo: a função retorna screenWidth/2, então o canto inicial (esquerdo) do componente fica em screenWidth/2.
 *
 * @returns {number} - Posição X do canto esquerdo do componente.
 */
export const calculateLeftCenteredXPosition = () => {
  return App.getInstance().renderer.width / 2
}

/**
 * Calcula a posição Y pra que **a borda inferior** do componente fique alinhada ao centro da tela.
 *
 * Exemplo: se height for 50, a função retorna (screenHeight/2 - 50),
 * então o canto de baixo do componente fica em screenHeight/2.
 *
 * @param {number} height - Altura do componente.
 * @returns {number} - Posição Y do canto inferior do componente.
 */
export const calculateBottomCenteredYPosition = (height) => {
  return (App.getInstance().renderer.height / 2) - height
}

/**
 * Retorna a posição Y pra que **a borda superior** do componente fique alinhada ao centro da tela.
 *
 * Exemplo: a função retorna screenHeight/2, então o canto de cima do componente fica em screenHeight/2.
 *
 * @returns {number} - Posição Y do canto superior do componente.
 */
export const calculateTopCenteredYPosition = () => {
  return App.getInstance().renderer.height / 2
}
