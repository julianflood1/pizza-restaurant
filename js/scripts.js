//Business Logic
function Pizza(size, sauce, toppingsTotal) {
  this.size = size;
  this.sauce = sauce;
  this.toppingsTotal = toppingsTotal;
}


Pizza.prototype.price = function() {
  return this.size + this.sauce + this.toppingsTotal;
}


//Front-end Logic

$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();

    var size = parseInt($("input[name='pizza-size']:checked").val());

    var sauce = parseInt($("input[name='sauce']:checked").val());

    var toppings = [];
     $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = parseInt($(this).val());
      toppings.push(inputtedToppings);
    });
    var toppingsTotal = 0;
    for(i = 0; i < toppings.length; i++){
      toppingsTotal += toppings[i]
    }

    var sides = [];
      $("input:checkbox[name=sides]:checked").each(function() {
      var inputtedSides = parseInt($(this).val());
      sides.push(inputtedSides);
    });
    var sidesTotal = 0;
    for(i = 0; i < sides.length; i++){
      sidesTotal += sides[i]
    }

    var newPizza = new Pizza(size, sauce, toppingsTotal);
    var pizzaTotal = newPizza.price();
    var foodTotal = (sidesTotal + pizzaTotal);

    $('#main').hide();

    $('#totalCost').fadeIn(500);
    $('.output').text(foodTotal);

  });
});
