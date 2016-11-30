var div1 = $('.answer1');
var div2 = $('.answer2');
var div3 = $('.answer3');
var div4 = $('.answer4');
var div5 = $('.answer5');
var div6 = $('.answer6');
//Answer1
var prices=items.map(function(item, i, arr) {
  return item.price;
});
var add=prices.reduce(function(returnValueSoFar, number, i, arr){
  return returnValueSoFar+ number;
},0);


var avg=(add/items.length);

console.log(avg);
$(div1).text('The average price is ' + avg);

//Answer2
var costs=items.filter(function(item, i, arr) {
  return item.price > 14 && item.price < 18;

});
// console.log(costs);
var medianPrice =costs.map(function(item, i, arr ) {
return item.title;


});
console.log(medianPrice);
$(div2).text(medianPrice);
//Answer3
var currency_code=items.filter(function(item, i, arr){
  return item.currency_code === 'GBP';
});
var itemg=currency_code.map(function(item, i, arr){
  return item.title + ' ' + item.price;
});
// console.log(currency_code);
console.log(itemg);
$(div3).text(itemg);
//Answer4
var wood = items.filter(function(item,i,arr){
  return (item.materials.indexOf('wood') !== -1);
});
  var woodName = wood.map(function(item,i,arr) {
    return item.title;

});
console.log(woodName);
$(div4).text(woodName);
//Answer5
var multi = items.filter(function(item,i,arr){
  return item.materials.length >= 8;

});
var objects = multi.map(function(item,i,arr){
  return item.title + ' is made of ' + item.materials.length + ' materials: ' + item.materials.join(', ') ;
});
console.log(objects);
$(div5).text(objects);
//Answer6
var sellers = items.filter(function(item,i,arr){
  return item.who_made === 'i_did' ;
});
console.log(sellers);


var idid = sellers.map(function(item,i,arr){
  return item.length;
});
console.log(sellers.length);

var bySellers = sellers.length;
console.log(bySellers);
$(div6).text(bySellers + ' were made by their sellers');
