export function positionThreeCards(selectedCards) {
  selectedCards.forEach((card) => {
    card.width = 230;
    card.width = 230;
  })
  const [card1, card2, card3] = selectedCards;

  card1.position.set(50, 90);
  card2.position.set(300, 50);
  card3.position.set(550, 90);
}

export function positionFiveCards(selectedCards) {
  selectedCards.forEach((card) => {
    card.width = 165;
    card.height = 165;
  });
  const [card1, card2, card3, card4, card5] = selectedCards;
  card1.position.set(130, 195);
  card2.position.set(230, 15);
  card3.position.set(330, 210);
  card4.position.set(430, 15);
  card5.position.set(530, 195);
}

export function positionSevenCards(selectedCards) {
  selectedCards.forEach((card) => {
    card.width = 165;
    card.height = 165;
  });
  const [card1, card2, card3, card4, card5, card6, card7] = selectedCards;

  card1.position.set(60, 35);
  card2.position.set(150, 210);
  card3.position.set(240, 20);
  card4.position.set(328, 200);
  card5.position.set(415, 20);
  card6.position.set(505, 210);
  card7.position.set(595, 35);
}