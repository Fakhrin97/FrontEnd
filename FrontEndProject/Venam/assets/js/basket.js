let products = JSON.parse(localStorage.getItem("products"));
let productList = document.querySelector("#tbody");
let basketCount = document.querySelector("#shopping-count");
function updateBasketCount() {
  let products = JSON.parse(localStorage.getItem("products"));
  basketCount.innerText = products.length;
}

function showProdact() {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products.length === 0) {
    document.querySelector(".full-basket").classList.add("d-none");
    document.querySelector(".empty-basket").classList.remove("d-none");
  } else {
    document.querySelector(".full-basket").classList.remove("d-none");
    document.querySelector(".empty-basket").classList.add("d-none");
  }
}
function updateTotalCount() {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += +product.price * product.count;
  });
  document.querySelector(".sumPrice").innerText = totalPrice;
  document.querySelector(".totalPrice").innerText = totalPrice;
  showProdact();
  updateBasketCount();
}
updateTotalCount();
function removeProduct(el, productId) {
  let productIndex = products.findIndex((p) => p.id == productId);
  products.splice(productIndex, 1);
  localStorage.setItem("products", JSON.stringify(products));
  el.parentElement.parentElement.parentElement.remove();
  updateTotalCount();
}

function minsusPrdoactCount(el, productId) {
  console.log("hello");
}

products.forEach((product) => {
  let price = +product.price.split("AZN")[0];

  productList.innerHTML += `
          <tr>
              <td>
                  <button id="rmvbtn"
                  onclick="removeProduct(event.target, ${product.id})">
                  <i class="fa-solid fa-trash-can"></i>
                  </button>
              </td>
              <td>
                  <img src="${product.image}"/>
              </td>
              <td>${product.title}</td>
              <td>${product.price} <span>AZN</span></td>
              <td>
              <div class="qualty-chance d-flex align-items-center">
                  <div class="quality-minus"
                  click="minsusPrdoactCount(event.target, ${product.id})"
                  >-</div>
                  <input type="number"
                  min="1" 
                  value="${product.count}"
                //   onchange="updateProductCount(event.target, ${product.id})">
                  <div class="quality-plus">+</div>                                                                           
              </div>
            </td>
              <td>
               <span class="total-price">
                   ${product.price * product.count} AZN
                 </span>
              </td>
             
          </tr>
      `;
});
// var minus = document.querySelector(".");

// function updateProductCount(el, productId) {
//     let currentCount = el.value;
//     if(currentCount>1){
//         currentCount--;
//         console.log(currentCount);
//     }

//   productu silmek ucun istifade etdik
// if (currentCount == 0) {
//   el.parentElement.parentElement.querySelector(".remove-product").click();
// }

// if (currentCount < 0) {
//   alert("Ismayilin qazabina ugradiniz!");
//   el.value = 1;
//   return;
// }

// let product = products.find((p) => p.id == productId);

// let price = +product.price.split("AZN")[0];
// price *= currentCount;

// product.count = currentCount;

// localStorage.setItem("products", JSON.stringify(products));

// let totalPrice = el.parentElement.parentElement.querySelector(".total-price");

// totalPrice.innerText = price;

// updateTotalCount();
//   }
