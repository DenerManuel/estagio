import { pickRandomItemsExcluding } from "../../../../../../utils/random/pick-random-from-array.js"

export function getNCardsExcludingOne(itemCards, numberOfItemsToPick, [itemCard]) {
  return pickRandomItemsExcluding(itemCards, numberOfItemsToPick, [itemCard])
}
