const flippedLetterMapping = {
  I: 'E',
  E: 'I',
  S: 'N',
  N: 'S',
  T: 'F',
  F: 'T',
  J: 'P',
  P: 'J'
}

const flippedMarkMapping = {
  e: 'i',
  i: 'e'
}

function flipFunction(fn) {
  const [letter, mark] = [...fn]
  return flippedLetterMapping[letter] + flippedMarkMapping[mark]
}

/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */
export function findCognitiveFunction(mbti) {
  const [dominantMark, fn1, fn2, attitude] = [...mbti.toUpperCase()]

  const extroverted = `${attitude === 'P' ? fn1 : fn2}e`
  const introverted = `${attitude === 'P' ? fn2 : fn1}i`

  const dominant = dominantMark === 'E' ? extroverted : introverted
  const auxiliary = dominantMark === 'E' ? introverted : extroverted

  const tertiary = flipFunction(auxiliary)

  throw new Error('Not implemented')
}
