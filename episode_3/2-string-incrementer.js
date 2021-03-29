// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/javascript

function incrementString(str) {
  return str.replace(/[0-8]?9*$/, (match) => Number(match) + 1);
}
