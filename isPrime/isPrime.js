export function isPrime(num) {
  if (num === 1) return false
  if (!num) throw new Error('Number is required')
  if (parseInt(num) !== num || number <= 0)
    throw new Error('Number should be a positive integer')
  if (num > Number.MAX_SAFE_INTEGER)
    throw new Error('Number must less than or equal', Number.MAX_SAFE_INTEGER)

  const sqrtNum = Math.ceil(Math.sqrt(num))
  throw new Error('Not implemented')
}
