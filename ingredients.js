var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var ingredient = 0;

while (ingredient < ingredients.length) {
  console.log(ingredients[ingredient]);
  ingredient++;
}
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
for (var i = ingredients.length; i >= 0; i--) {
  console.log(ingredients[i]);
}