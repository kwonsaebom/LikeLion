const selectNode = document.getElementById("dropdown");
const container = document.getElementById("container");
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

function goPay() {
  window.open("pay.html", "_blank", "left=100, top=100, width=500, height=400");
}

function getPayInformation(payNumber) {
  document.querySelector("#payNumber").textContent = payNumber;
}

products.forEach((product) => {
  let optionNode = document.createElement("option");
  optionNode.textContent = `${product.name} - ${product.price}`;
  optionNode.value = product.name;
  selectNode.appendChild(optionNode);
});

buyButton.addEventListener("click", () => {
  const selectedOptions = Array.from(selectNode.selectedOptions);

  if (selectedOptions.length === 0) {
    alert("결제할 상품을 선택해야 합니다.");
    return;
  }

  // container 초기화 --> 결제 버튼 여러번 누르면 초기화 해야되므로
  container.innerHTML = "";

  // 선택된 상품과 가격 표시
  const chooseNode = document.createElement("h1");
  chooseNode.textContent = "선택한 상품";
  container.appendChild(chooseNode);

  const listNode = document.createElement("ul");
  let totalPrice = 0; // 총액 계산 변수

  selectedOptions.forEach((option) => {
    // 조건을 만족하는 상품을 배열로 반환 --> 만족시키는 모든 상품을 배열로 반환하는 것이 아니라, 만족시키는 상품의 정보의 배열을 반환하는 것
    // 하나의 상품 정보이므로 중첩되어야하는 것이다.
    // 각 상품마다 이 반복문을 도는 것임.

    const selectedProduct = products.filter(
      (product) => product.name === option.value
    );
    // 상품이 존재할 경우 처리
    selectedProduct.forEach((selectedProduct) => {
      // 선택한 상품의 가격을 총액에 더하기
      totalPrice += selectedProduct.price;

      // 상품을 리스트에 추가
      const listItem = document.createElement("li");
      listItem.textContent = `${selectedProduct.name} - ${selectedProduct.price}`;
      listNode.appendChild(listItem);
    });
  });

  container.appendChild(listNode);

  // 총액 표시
  const priceNode = document.createElement("h2");
  priceNode.textContent = `총액: ${totalPrice} 원`;
  container.appendChild(priceNode);

  localStorage.setItem("totalPrice", totalPrice);

  goPay();
});
