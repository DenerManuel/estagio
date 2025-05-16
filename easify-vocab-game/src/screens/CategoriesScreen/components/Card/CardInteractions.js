import { createTooltipContent } from "../Tooltip/TooltipContent.js";
import { addDefaultTooltipContent } from "../Tooltip/DefaultTooltipContent.js";

export function configureCardEvents(card, tooltipContainer, app) {
  
  const category = card.category

  card.eventMode = 'dynamic';
  card.cursor = 'pointer';
  card.on('click', () => _handleCardClick(category, app, tooltipContainer));
  card.on('pointerover', () => {
    const [tooltipTitle, tooltipItemTexts] = createTooltipContent(category);

    tooltipContainer.removeChildren(1);
    tooltipContainer.addChild(tooltipTitle, tooltipItemTexts);
  });
  card.on('pointerout', () => addDefaultTooltipContent(tooltipContainer));
}
const _handleCardClick = (category, app, tooltipContainer) => {
  const context = app.context
  
  if (context === 'review') {
    app.screenManager.displayScreen('reviewScreen', category);
  } else if (context === 'game') {
    app.screenManager.displayScreen('preGameScreen', category)
  }
  addDefaultTooltipContent(tooltipContainer);
}