/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function shuffle(cards = []) {
  let suffledCards = [...cards]
  const n = cards.length
  for (let i = 0; i < 100; i++) {
    const shuffle = [getRandomInt(n), getRandomInt(n)].sort((a, b) => a - b)
    suffledCards = [
      ...suffledCards.slice(shuffle[0], shuffle[1] + 1),
      ...suffledCards.slice(0, shuffle[0]),
      ...suffledCards.slice(shuffle[1] + 1, n)
    ]
  }
  return suffledCards
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
