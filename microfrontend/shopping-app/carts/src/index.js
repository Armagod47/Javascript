import faker from "faker";

let cartString = "";
for (let i = 0; i < 5; i++) {
  cartString += `<div>${faker.commerce.productName()}</div>`;
}

document.querySelector("#cart-list").innerHTML = cartString;
