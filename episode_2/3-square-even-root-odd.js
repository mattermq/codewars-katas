// https://www.codewars.com/kata/5a4b16435f08299c7000274f/javascript

function sumSquareEvenRootOdd(arr) {
  const result = arr.map(el => {
    return el % 2 ? Math.sqrt(el) : el**2;
  });
  
  return +result
          .reduce((acc, el) => acc + el, 0)
          .toFixed(2);
};
