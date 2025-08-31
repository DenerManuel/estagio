import { Heart } from "../../components/game-screen-components.js"

export function createHearts(heartsQuantity) {
  let hearts = []
  for (let i = 0; i < heartsQuantity; i++) {
    const heart = new Heart(i)
    hearts.push(heart)
  }
  return hearts
}
