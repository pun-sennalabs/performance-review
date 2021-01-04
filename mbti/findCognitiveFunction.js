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

  throw new Error('Not implemented')
}
