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

  throw new Error('Not implemented')
}
