import { Star } from '../../components/star/Star.js';

export function createStars(activedStars) {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    const star = new Star(i, activedStars);
    stars.push(star);
  }

  return stars;
}
