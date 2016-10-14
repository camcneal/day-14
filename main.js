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
$(div1).text('The average price is $23.63');

//Answer2
var costs=items.filter(function(item, i, arr) {
  return item.price > 14 && item.price < 18;

});
// console.log(costs);
var medianPrice =costs.map(function(item, i, arr ) {
return item.title;


});
console.log(medianPrice);
$(div2).text('1970s Coors Banquet Glass Beer Pitcher The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug Hand Painted Colorful Feather Glass');
//Answer3
var currency_code=items.filter(function(item, i, arr){
  return item.currency_code === 'GBP';
});
var itemg=currency_code.map(function(item, i, arr){
  return item.price + ' ' + item.title;
});
// console.log(currency_code);
console.log(itemg);
$(div3).text(' 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18');
//Answer4
var wood = items.filter(function(item,i,arr){
  return (item.materials.indexOf('wood') !== -1);
});
  var woodName = wood.map(function(item,i,arr) {
    return item.title;

});
console.log(woodName);
$(div4).text('SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood. Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.');
//Answer5
var multi = items.filter(function(item,i,arr){
  return item.materials.length >= 8;

});
var objects = multi.map(function(item,i,arr){
  return item.title + ' is made of ' + item.materials.length + ' materials: ' + item.materials.join(', ') ;
});
console.log(objects);
$(div5).text(' Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials: wall mount bottle opener wedding man cave christmas gift guy gift fathers day home bar beer bar The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials: glass sandblast cabinet vinyl beer glass pint glass etched pint glass etched glass etched beer glass 16 oz pint beer gift etched harry potter glass the three broomsticks glass personalized harry potter glass');
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
$(div6).text('18 were made by their sellers');
