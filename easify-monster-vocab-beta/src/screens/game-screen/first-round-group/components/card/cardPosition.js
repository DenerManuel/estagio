import { CardConfig } from "../../../../../styles/screens/game-screen/first-round-group/card/cardConfig.js";

export function positionThreeCards(selectedCards) {
  selectedCards.forEach((card) => {
    card.width = CardConfig.size.firstGroupCardsSize;
    card.height = CardConfig.size.firstGroupCardsSize;
  })

  const [card1, card2, card3] = selectedCards;
  card1.position.set(
    CardConfig.position.firstGroupCards.card1.x,
    CardConfig.position.firstGroupCards.card1.y
  );
  card2.position.set(
    CardConfig.position.firstGroupCards.card2.x,
    CardConfig.position.firstGroupCards.card2.y
  );
  card3.position.set(
    CardConfig.position.firstGroupCards.card3.x,
    CardConfig.position.firstGroupCards.card3.y
  );
}

export function positionFiveCards(selectedCards) {
  if (!selectedCards || selectedCards.length < 5) {
    console.error("selectedCards precisa ter 5 elementos!", selectedCards);
    return;
  }
  selectedCards.forEach((card) => {
    card.width = CardConfig.size.secondGroupCardsSize;
    card.height = CardConfig.size.secondGroupCardsSize;
  });
  const [card1, card2, card3, card4, card5] = selectedCards;
  card1.position.set(
    CardConfig.position.secondGroupCards.card1.x,
    CardConfig.position.secondGroupCards.card1.y
  );
  card2.position.set(
    CardConfig.position.secondGroupCards.card2.x,
    CardConfig.position.secondGroupCards.card2.y
  );
  card3.position.set(
    CardConfig.position.secondGroupCards.card3.x,
    CardConfig.position.secondGroupCards.card3.y
  );
  card4.position.set(
    CardConfig.position.secondGroupCards.card4.x,
    CardConfig.position.secondGroupCards.card4.y
  );
  card5.position.set(
    CardConfig.position.secondGroupCards.card5.x,
    CardConfig.position.secondGroupCards.card5.y
  );
}

export function positionSevenCards(selectedCards) {
  selectedCards.forEach((card) => {
    card.width = 165;
    card.height = 165;
  });
  const [card1, card2, card3, card4, card5, card6, card7] = selectedCards;

  card1.position.set(
    CardConfig.position.thirdGroupCards.card1.x,
    CardConfig.position.thirdGroupCards.card1.y
  );
  card2.position.set(
    CardConfig.position.thirdGroupCards.card2.x,
    CardConfig.position.thirdGroupCards.card2.y
  );
  card3.position.set(
    CardConfig.position.thirdGroupCards.card3.x,
    CardConfig.position.thirdGroupCards.card3.y
  );
  card4.position.set(
    CardConfig.position.thirdGroupCards.card4.x,
    CardConfig.position.thirdGroupCards.card4.y
  );
  card5.position.set(
    CardConfig.position.thirdGroupCards.card5.x,
    CardConfig.position.thirdGroupCards.card5.y
  );
  card6.position.set(
    CardConfig.position.thirdGroupCards.card6.x,
    CardConfig.position.thirdGroupCards.card6.y
  );
  card7.position.set(
    CardConfig.position.thirdGroupCards.card7.x,
    CardConfig.position.thirdGroupCards.card7.y
  );
}