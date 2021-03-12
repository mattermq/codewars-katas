// https://www.codewars.com/kata/54dc6f5a224c26032800005c/javascript

function stockList(listOfBooks, listOfCat) {
  if (!listOfBooks.length || !listOfCat.length)
    return '';
  
  const booksByCategory = {};
  
  listOfBooks.forEach(el => {
    const [category, amount] = el.split(' ');
    const catCode = category[0];
    
    booksByCategory[catCode] = (booksByCategory[catCode] || 0) + Number(amount);    
  });
  
  return listOfCat.map(el => {
    return `(${el} : ${booksByCategory[el] || 0})`
  }).join(' - ');
}
