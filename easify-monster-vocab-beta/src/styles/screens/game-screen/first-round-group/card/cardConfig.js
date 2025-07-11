import { calculateCenteredXPosition, calculateLeftCenteredXPosition, calculateRightCenteredXPosition } from "../../../../../utils/position/calculateCenteredPosition.js"

const FIRST_GROUP_CARDS_GAP = 15
const SECOND_GROUP_CARDS_GAP = 30
const THIRD_GROUP_CARDS_GAP = 10

export const CardStyles = {
  width: 240,
  height: 240,
  backgroundColor: 0xF5F5F5,
  borderColor: 0xFB7302,
  borderHoverColor: 0x03BB85,
  borderSize: 5,
  borderRadius: 40,
  hover: true,
}

const CardSize = {
  firstGroupCardsSize: 240,
  secondGroupCardsSize: 170,
  thirdGroupCardsSize: 165
}

export const CardPosition = {
  firstGroupCards: {
    card1: {
      x: calculateCenteredXPosition(CardSize.firstGroupCardsSize) - (CardStyles.width + FIRST_GROUP_CARDS_GAP),
      y: 90
    },
    card2: {
      x: calculateCenteredXPosition(CardSize.firstGroupCardsSize),
      y: 50
    },
    card3: {
      x: calculateCenteredXPosition(CardSize.firstGroupCardsSize) + (CardStyles.width + FIRST_GROUP_CARDS_GAP),
      y: 90
    }
  },
  secondGroupCards: {
    card1: {
      x: calculateCenteredXPosition(CardSize.secondGroupCardsSize) - (CardSize.secondGroupCardsSize + SECOND_GROUP_CARDS_GAP),
      y: 200
    },
    card2: {
      x: calculateRightCenteredXPosition(CardSize.secondGroupCardsSize) - (SECOND_GROUP_CARDS_GAP / 2),
      y: 15
    },
    card3: {
      x: calculateCenteredXPosition(CardSize.secondGroupCardsSize),
      y: 210
    },
    card4: {
      x: calculateLeftCenteredXPosition() + (SECOND_GROUP_CARDS_GAP / 2),
      y: 15
    },
    card5: {
      x: calculateCenteredXPosition(CardSize.secondGroupCardsSize) + (CardSize.secondGroupCardsSize + SECOND_GROUP_CARDS_GAP),
      y: 200
    }
  },
  thirdGroupCards: {
    card1: {
      x: calculateRightCenteredXPosition(CardSize.thirdGroupCardsSize * 2) - (THIRD_GROUP_CARDS_GAP / 2) - (THIRD_GROUP_CARDS_GAP),
      y: 35
    },
    card2: {
      x: calculateCenteredXPosition(CardSize.thirdGroupCardsSize) - (CardSize.thirdGroupCardsSize + THIRD_GROUP_CARDS_GAP),
      y: 210
    },
    card3: {
      x: calculateRightCenteredXPosition(CardSize.thirdGroupCardsSize) - (THIRD_GROUP_CARDS_GAP / 2),
      y: 20
    },
    card4: {
      x: calculateCenteredXPosition(CardSize.thirdGroupCardsSize),
      y: 200
    },
    card5: {
      x: calculateLeftCenteredXPosition() + (THIRD_GROUP_CARDS_GAP / 2),
      y: 20
    },
    card6: {
      x: calculateCenteredXPosition(CardSize.thirdGroupCardsSize) + (CardSize.thirdGroupCardsSize + THIRD_GROUP_CARDS_GAP),
      y: 210
    },
    card7: {
      x: calculateLeftCenteredXPosition() + (THIRD_GROUP_CARDS_GAP / 2) + (CardSize.thirdGroupCardsSize) + (THIRD_GROUP_CARDS_GAP),
      y: 35
    },
  }
}

export const CardConfig = {
  styles: CardStyles,
  size: CardSize,
  position: CardPosition
}