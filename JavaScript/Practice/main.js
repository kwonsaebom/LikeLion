const selectNode = document.getElementById("dropdown");

function Product(name, price) {
  this.name = name;
  this.price = price;
}

let products = [
  new Product("대뱃살", 3000),
  new Product("목살", 5000),
  new Product("배꼽살", 4000),
  new Product("중뱃살", 1000),
];

console.log(selectNode);

products.forEach((product) => {
  optionNode = document.createElement("option");
  optionNode.textContent = `${product.name} - ${product.price}`;
  selectNode.appendChild(optionNode);
});

console.log(products);
