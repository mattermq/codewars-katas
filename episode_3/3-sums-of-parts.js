// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/javascript

function partsSums(ls) {
  const result = [];
  
  let totalSum = ls.reduce((acc, el) => acc + el, 0);
  
  for (let i = 0; i <= ls.length; i++) {  
    result.push(totalSum);
    
    totalSum -= ls[i];
  }
  
  return result;
}
