// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/javascript

function minValues(values) {
  return +([...new Set(values)].sort((a, b) => a - b).join(''));
}
