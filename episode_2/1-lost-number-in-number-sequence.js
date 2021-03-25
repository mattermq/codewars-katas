// https://www.codewars.com/kata/595aa94353e43a8746000120/javascript

function findDeletedNumber(arr, mixArr) {
  return arr.filter(el => !mixArr.includes(el))[0] || 0;
}
