import { App } from '../../../../app/App.js';
import {
  calculateCenteredXPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../utils/position/calculateCenteredPosition.js';
import { componentsPositions } from '../../../components-positions/components-positions.js';
import { categoriesScreenPositions } from '../../../screens-components-positions/categories-screen/categories-screen-components-positions.js';
import { positionCards } from '../../../screens-components-positions/categories-screen/helpers/cards/position-cards.js';

export function changeComponentsPositions(components) {
  // POSITION_X
  components.categoriesContainer.x = categoriesScreenPositions.categoriesContainer.mobile.x;
  components.tooltipContainer.x = calculateCenteredXPosition(components.tooltipContainer.width);
  components.tooltipContainer.y = 120;
  components.cardsContainer.x = calculateCenteredXPosition(components.cardsContainer.width);
  components.previousButton.x = categoriesScreenPositions.previousButton.mobile.x
  components.nextButton.x = categoriesScreenPositions.nextButton.mobile.x

  // POSITION_Y
  components.categoriesContainer.y = categoriesScreenPositions.categoriesContainer.mobile.y;
  components.previousButton.y = categoriesScreenPositions.previousButton.mobile.y
  components.nextButton.y = categoriesScreenPositions.nextButton.mobile.y
  components.backButton.y = componentsPositions.backButton.mobile.y;
  components.backButton.x = componentsPositions.backButton.mobile.x;

  positionCards(components.cardGroups, 'mobile')
}
