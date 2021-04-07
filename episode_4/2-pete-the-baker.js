// https://www.codewars.com/kata/525c65e51bf619685c000059/javascript

function cakes(recipe, available) {
  const cakesByIngridients = [];
  
  for (let key in recipe) {
    if (!available.hasOwnProperty(key))
      return 0;
    
    cakesByIngridients.push(Math.floor(available[key] / recipe[key]));
  }
  
  return Math.min(...cakesByIngridients);
}
