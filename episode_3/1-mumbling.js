// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

function accum(s) {
  return s.split('')
          .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
          .join('-');
}
