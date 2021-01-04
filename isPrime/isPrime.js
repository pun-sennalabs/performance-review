export function isPrime(num) {
  if (num === 1) return false
  if (num === 2) return true
  if (!num) throw new Error('Number is required')
  if (parseInt(num) !== num || num <= 0)
    throw new Error('Number should be a positive integer')
  if (num > Number.MAX_SAFE_INTEGER)
    throw new Error('Number must less than or equal', Number.MAX_SAFE_INTEGER)

  const sqrtNum = Math.ceil(Math.sqrt(num))
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) return false
  }
  return true
}
