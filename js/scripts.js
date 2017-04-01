//Business Logic
function Pizza(size, toppingsTotal) {
  this.size = size;
  this.toppingsTotal = toppingsTotal;
}


Pizza.prototype.price = function() {
  return this.size + this.toppingsTotal;
}


// Pizza.prototype.price = function() {
//   var pizzaTotal = 0;
//   (this.size + this.toppingsTotal = pizzaTotal);
// }
//Front-end Logic

$(document).ready(function() {



  $('form').submit(function(event) {
    event.preventDefault();


    var size = parseInt($("input[name='pizza-size']:checked").val());
    console.log(size);

    var toppings = [];
     $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = parseInt($(this).val());
      toppings.push(inputtedToppings);
    });
    var toppingsTotal = 0;
    for(i = 0; i < toppings.length; i++){
      toppingsTotal += toppings[i]
    }

console.log(toppingsTotal);

    var sides = [];
     $("input:checkbox[name=sides]:checked").each(function() {
      var inputtedSides = parseInt($(this).val());
      sides.push(inputtedSides);
    });
    var sidesTotal = 0;
    for(i = 0; i < sides.length; i++){
      sidesTotal += sides[i]
    }
    console.log(sidesTotal);


    newPizza = new Pizza(size, toppingsTotal);
    console.log(newPizza.price);

    // var foodTotal = sides + size + toppingsTotal;
    $('#totalCost').text();
  });


});
