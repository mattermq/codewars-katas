// https://www.codewars.com/kata/568d0dd208ee69389d000016/javascript

function rentalCarCost(days) {
  const costPerDay = 40;
  const discount = days >= 7 ? 50 : days >= 3 ? 20 : 0;
  
  return days * costPerDay - discount;
}
