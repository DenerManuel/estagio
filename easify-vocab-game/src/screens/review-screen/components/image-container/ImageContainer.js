import { CustomContainer } from '../../../../components/container/CustomContainer.js';
import { CustomItemCard } from '../../../../components/item-card-refatored/CustomItemCard.js';
import { reviewScreenPositions } from '../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';

export class ImageContainer extends CustomItemCard {
  constructor(reviewScreen) {
    const category = reviewScreen.category;
    const item = category.items[reviewScreen.currentIndex];

    super(category, item, reviewScreenStyles.imageContainer.desktop);
    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.imageContainer.desktop.x;
    const positionY = reviewScreenPositions.imageContainer.desktop.y;

    this.position.set(positionX, positionY);
  }
}
