const selectNode = document.getElementById("dropdown");
const container = document.querySelector(".container");
const buyButton = document.getElementById("buy");

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
  let optionNode = document.createElement("option");
  optionNode.textContent = `${product.name} - ${product.price}`;
  optionNode.value = product.name;
  selectNode.appendChild(optionNode);
});

// 구매 버튼 클릭 시 선택된 상품을 출력
buyButton.addEventListener("click", () => {
  const selectedOption = selectNode.options[selectNode.selectedIndex];
  const selectedIndex = selectNode.selectedIndex;

  if (selectedIndex === -1) {
    alert("결제할 상품을 선택해야 합니다.");
    return;
  }

  const selectedProduct = products.find(
    (product) => product.name === selectedOption.value
  );

  if (selectedProduct) {
    const chooseNode = document.createElement("h1");
    chooseNode.textContent = "선택한 상품";
    container.appendChild(chooseNode);

    const listNode = document.createElement("ul");
    listNode.innerHTML = `
    <li>${selectedProduct.name} - ${selectedProduct.price}</li>`;
    container.appendChild(listNode);

    const priceNode = document.createElement("h1");
    priceNode.textContent = "총액: ";
    document.body.appendChild(priceNode);
  } else {
    console.log("No product selected");
  }
});
