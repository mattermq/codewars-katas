// https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

function dirReduc(arr) {
  const oppositeDirs = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  }
  
  return arr.reduce((acc, el) => {
    if (acc[acc.length - 1] === oppositeDirs[el])
      acc.pop();
    else
      acc.push(el);
    
    return acc;
  }, []);
}
