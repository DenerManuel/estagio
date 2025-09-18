import { App } from "../../../../app/App.js";
import { categoriesScreenPositions } from "../../../screens-components-positions/categories-screen/categories-screen-components-positions.js";

export function getDefaultComponentsPositions(components) {
  return {
    categoriesContainer: {
      x: categoriesScreenPositions.categoriesContainer.desktop.x,
      y: categoriesScreenPositions.categoriesContainer.desktop.y
    },
    tooltipContainer: {
      x: categoriesScreenPositions.tooltipContainer.desktop.x,
      y: categoriesScreenPositions.tooltipContainer.desktop.y
    },
    cardsContainer: {
      x: categoriesScreenPositions.cardsContainer.desktop.x,
      y: categoriesScreenPositions.cardsContainer.desktop.y
    },
    previousButton: {
      x: categoriesScreenPositions.previousButton.desktop.x,
      y: categoriesScreenPositions.previousButton.desktop.y
    },
    nextButton: {
      x: categoriesScreenPositions.nextButton.desktop.x,
      y: categoriesScreenPositions.nextButton.desktop.y
    },
    backButton: {
      x: components.backButton.x,
      y: App.getInstance().renderer.height - 70
    }
  };
}