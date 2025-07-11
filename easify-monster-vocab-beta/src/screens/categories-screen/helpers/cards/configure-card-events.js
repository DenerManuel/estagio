import { DefaultTooltipContent } from "../../components/categories-screen-components.js"
import { TooltipContent } from "../../components/tooltip/tooltip-content.js"

export function configureCardEvents(card, tooltipContainer, app) {
  const category = card.category

  enableCardInteraction(card)
  addCardEvents(card, category, tooltipContainer, app)
}

function enableCardInteraction(card) {
  card.eventMode = 'dynamic'
  card.cursor = 'pointer'
}
function addCardEvents(card, category, tooltipContainer, app) {
  card.on('pointertap', () => handleCardClick(category, app, tooltipContainer))
  card.on('pointerover', () => showTooltip(card, tooltipContainer))
  card.on('pointerout', () => showDefaultTooltip(tooltipContainer))
}
function handleCardClick(category, app, tooltipContainer) {
  const context = app.context

  const screen = context === 'review'
    ? 'reviewScreen'
    : context === 'game'
      ? 'preGameScreen'
      : null

  if (screen) {
    app.screenManager.displayScreen(screen, category)
  }

  showDefaultTooltip(tooltipContainer)
}
function showTooltip(card, tooltipContainer) {
  const category = card.category
  const tooltipContent = new TooltipContent(category)

  tooltipContainer.removeChildren(1)
  tooltipContainer.addChild(
    tooltipContent.tooltipTitle,
    tooltipContent.tooltipItemTexts
  )
}
function showDefaultTooltip(tooltipContainer) {
  const defaultTooltip = DefaultTooltipContent.getInstance(tooltipContainer)
  defaultTooltip.addToTooltipContainer(tooltipContainer)
}