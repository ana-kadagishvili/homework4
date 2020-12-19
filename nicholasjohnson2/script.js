/* Arrays and Loops */

// 1
let products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss']; 
for(let i = 0; i < products.length; i++ ) {
    console.log(products[i]) ;  
}

//Same homework With functional loop
products.forEach(product => {
  console.log(product);
});

// 2
let toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];

function makePizza(topings) {
  let str = "A tasty pizza with";
  let result = str + ' ' +toppings.join(',').replaceAll(',', ' and ');
  return result;
}
let finalResult = makePizza(toppings);
console.log(finalResult);


// 3 

let prods = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
let newArray = [];
prods.map(product => {
  product = product.toUpperCase();
  newArray.push(product);
});
console.log(newArray);


