//Business Logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

// Pizza.prototype.price = function() {
//   var pizzaTotal = 0;
//   (this.size + this.topping = pizzaTotal);
// }
//Front-end Logic

$(document).ready(function() {



  $('form').submit(function(event) {
    event.preventDefault();

    var toppings = $("input:checkbox[name=toppings]:checked").val();
    console.log(toppings);

    var sides = $("input:checkbox[name=sides]:checked").val();
    console.log(sides);

  });
});
