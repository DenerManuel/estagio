import { App } from "../../../../app/App.js"
import { ScreenManager } from "../../../../core/screen-manager/ScreenManager.js"
import {
  DefaultTooltipContent, TooltipContent
} from "../../components/categories-screen-components.js"

/**
 * Configura os eventos de interação para um card de categoria.
 * Habilita a interatividade e adiciona listeners para clique e hover.
 * @param {import('@pixi/display').DisplayObject & { category: object }} card - O card de categoria ao qual os eventos serão adicionados.
 * @param {import('@pixi/display').Container} tooltipContainer - O contêiner onde o tooltip será exibido.
 */
export function configureCardEvents(card, tooltipContainer) {
  const category = card.category

  enableCardInteraction(card)
  addCardEvents(card, category, tooltipContainer)
}

/**
 * Ativa o modo de evento e o cursor de ponteiro para um card, tornando-o interativo.
 * @private
 * @param {import('@pixi/display').DisplayObject} card - O card a ser tornado interativo.
 */
function enableCardInteraction(card) {
  card.eventMode = 'dynamic'
  card.cursor = 'pointer'
}

/**
 * Adiciona os listeners de evento a um card de categoria.
 * - 'pointertap': Navega para a tela correspondente (pré-jogo ou revisão).
 * - 'pointerover': Exibe o tooltip com informações da categoria.
 * - 'pointerout': Restaura o tooltip para o estado padrão.
 * @private
 * @param {import('@pixi/display').DisplayObject & { category: object }} card - O card de categoria.
 * @param {object} category - O objeto de dados da categoria associado ao card.
 * @param {import('@pixi/display').Container} tooltipContainer - O contêiner do tooltip.
 */
function addCardEvents(card, category, tooltipContainer) {
  card.on('pointertap', () => handleCardClick(category, tooltipContainer))
  card.on('pointerover', () => showTooltip(card, tooltipContainer))
  card.on('pointerout', () => showDefaultTooltip(tooltipContainer))
}

/**
 * Manipula o evento de clique em um card de categoria.
 * Navega para a tela apropriada ('reviewScreen' ou 'preGameScreen') com base no contexto atual da aplicação.
 * Após a navegação, o tooltip é resetado para o estado padrão.
 * @private
 * @param {object} category - A categoria do card que foi clicado.
 * @param {import('@pixi/display').Container} tooltipContainer - O contêiner do tooltip, para resetá-lo.
 */
function handleCardClick(category, tooltipContainer) {
  const context = App.getInstance().context

  const screen = context === 'review'
    ? 'reviewScreen'
    : context === 'game'
      ? 'preGameScreen'
      : null

  if (screen) {
    ScreenManager.getInstance().displayScreen(screen, category)
  }

  showDefaultTooltip(tooltipContainer)
}

/**
 * Exibe um tooltip customizado para a categoria quando o mouse passa sobre o card.
 * O conteúdo do tooltip é gerado dinamicamente com base na categoria do card.
 * @private
 * @param {import('@pixi/display').DisplayObject & { category: object }} card - O card sobre o qual o mouse está.
 * @param {import('@pixi/display').Container} tooltipContainer - O contêiner onde o tooltip será renderizado.
 */
function showTooltip(card, tooltipContainer) {
  const category = card.category
  const tooltipContent = new TooltipContent(category)

  tooltipContainer.removeChildren(1)
  tooltipContainer.addChild(
    tooltipContent.tooltipTitle,
    tooltipContent.tooltipItemTexts
  )
}

/**
 * Restaura o conteúdo do tooltip para o seu estado padrão.
 * @private
 * @param {import('@pixi/display').Container} tooltipContainer - O contêiner do tooltip a ser resetado.
 */
function showDefaultTooltip(tooltipContainer) {
  const defaultTooltip = DefaultTooltipContent.getInstance(tooltipContainer)
  defaultTooltip.addToTooltipContainer(tooltipContainer)
}
