export default function juxt (...fns) {
  const fnsLength = fns.length

  return function (...args) {
    if (fns.length === 2) {
      // Most will probably be two functions long, so this is a nice performance
      // trick to use (prevents entering a loop, pushing to array, etc.)
      return [fns[0](...args), fns[1](...args)]
    }
    else {
      const results = []

      for (let x = 0; x < fnsLength; x++) {
        results.push(fns[x](...args))
      }

      return results
    }
  }
}
