const categoryItem = document.querySelector(".category-item");
// const categoryItemArr = Array.from(document.querySelectorAll('.category-item'));
const categoryItemArr = Array.from(document.querySelectorAll(".category-item"));
const categoryItemNames = Array.from(
  document.querySelectorAll(".category-item a")
);
const modalHeader = document.querySelector(".modal");
const subCatItemArr = Array.from(document.querySelectorAll(".sub-cat-item"));
const orderNum = document.querySelector(".orderNum");
let cartItems = [];
let count = 0;
let randomOrderNum = 0;
let sele = 0;
let itemPriceDouble = 0;
let tax = 0;
let total = 0;

function generateOrderNum() {
  let random = Math.floor(1000 + Math.random() * 9000);
  // console.log(random)
  randomOrderNum = `#${random}`;
  orderNum.innerHTML = randomOrderNum;
}

//click on each category will show the pop up to see sub-category
categoryItemArr.forEach((item) => {
  item.addEventListener("click", popUp);
});

//function for pop-up
//It will populate the data from inventoryDB database for sub-category
function popUp(event) {
  event.preventDefault();
  document.querySelector(".modal").style.visibility = "visible";
  let divModal = document.querySelector(".modal");

  if (divModal.hasChildNodes && divModal.firstChild.className == "modal-name") {
    divModal.removeChild(divModal.firstChild);
  }
  // console.log(this);
  // console.log(divModal.children);
  // console.log(divModal.childNodes);

  // console.log(event);
  // console.log(event.target.innerText);
  // console.log(this);
  // console.log(this.innerText);

  modalHeader.insertAdjacentHTML(
    `afterbegin`,
    `<h2 class="modal-name">${this.innerText}</h2>`
  );

  subCatItemArr.forEach((item) => {
    console.log(item.firstElementChild.className);
  });
  switch (divModal.firstChild.innerHTML) {
    case "Fruits &amp; Vegetables":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Fruits_and_Vegetables")){
          item.style.display = "none";
        }
      })
      break;
    case "Dairy &amp; Eggs":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Dairy_and_eggs")){
          item.style.display = "none";
        }
      })
      break;
    case "Bakery":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Bakery")){
          item.style.display = "none";
        }
      })
      break;
    case "Meat &amp; Seafood":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Meat_and_Seafood")){
          item.style.display = "none";
        }
      })
      break;
    case "Snacks &amp; Cookies":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Snacks_and_Cookies")){
          item.style.display = "none";
        }
      })
      break;
    case "Beverages":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Beverages")){
          item.style.display = "none";
        }
      })
      break;
    case "Frozen Food":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Frozen_Food")){
          item.style.display = "none";
        }
      })
      break;
    case "Prepared Food":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Prepared_Food")){
          item.style.display = "none";
        }
      })
      break;
    case "Pantry":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        console.log(item.firstElementChild.className);
        if(!(item.firstElementChild.className == "Pantry")){
          item.style.display = "none";
        }
      })
      break;
    case "Pet Care":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        console.log(item.firstElementChild.className);
        if(!(item.firstElementChild.className == "Pet_Care")){
          item.style.display = "none";
        }
      })
      break;
    case "Floral &amp; Garden":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Floral_and_Garden")){
          item.style.display = "none";
        }
      })
      break;
    case "International":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "International")){
          item.style.display = "none";
        }
      })
      break;
    case "Baby Care":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Baby_Care")){
          item.style.display = "none";
        }
      })
      break;
    case "Home":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Home")){
          item.style.display = "none";
        }
      })
      break;
    case "Health &amp; Beauty":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Health_and_Beauty")){
          item.style.display = "none";
        }
      })
      break;
    case "Cleaning":
      subCatItemArr.forEach((item)=> {
        item.style.display = "grid";
        if(!(item.firstElementChild.className == "Cleaning")){
          item.style.display = "none";
        }
      })
      break;
  }
}

// console.log(categoryItemArr);
// categoryItemNames.map(ele=>{
//   console.log(ele.innerText);
// })

subCatItemArr.forEach((item) => {
  item.addEventListener("click", addToCart);
});


//Add items from category to order
function addToCart() {
  // console.log(this.children[3].innerHTML);
  let itemName = this.children[1].innerText;
  // console.log(this.children);
  let itemPrice = this.children[2].innerText.slice(1);
  console.log(this.children[2].innerText.replace('$', ''));
  // console.log(this.children.innerText);
  console.log(itemPrice);
  // itemPrice = itemPrice.slice(1, 5);
  // console.log(itemPrice);
  let itemPriceParse = parseFloat(itemPrice);
  console.log(itemPriceParse);

  const item = `<div class="purchased">
                  <span class="iName">${itemName}</span>&nbsp
                  <span class="iPrice">$${itemPriceParse}</span>
                  <button class="del">DEL</button>
                  <hr class="item-hr">
                  
              </div>`;
  document
    .querySelector(".order-details")
    .children[1].insertAdjacentHTML(`afterend`, `${item}`);
  sele += 1;
  itemPriceDouble += itemPriceParse;
  tax += itemPriceParse * 0.05;
  total = itemPriceDouble + tax;

  document.querySelector("#selected-num").innerHTML = sele;
  document.querySelector("#subtotal").innerHTML = itemPriceDouble.toFixed(2);
  document.querySelector("#tax").innerHTML = tax.toFixed(2);
  document.querySelector("#total").innerHTML = total.toFixed(2);
  document.querySelector(".modal").style.visibility = "hidden";

  cartItems.push(itemName);
}

document.addEventListener("click", function (e) {
  if (e.target && e.target.className == "del") {
    
    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.children[0].innerText); //item name
    // console.log(e.target.parentElement.children[1].innerText.slice(1));
    // debugger;
    price = parseFloat(
      e.target.parentElement.children[1].innerText.slice(1)
    );
    const itemName = Array.from(e.target.parentElement.children)
      .find(el => el.classList.contains("iName")).innerText;
    cartItems = cartItems.filter(item => item !== itemName);
    console.log(price);
    sele = sele - 1;
    document.querySelector("#selected-num").innerHTML = sele;
    console.log(`prev sub: ${itemPriceDouble.toFixed(2)}`);
    itemPriceDouble = itemPriceDouble - price;
    // document.querySelector('#subtotal').innerHTML = `${itemPriceDouble.toFixed(2) - price.toFixed(2)}`;
    document.querySelector("#subtotal").innerHTML = `${itemPriceDouble.toFixed(2)}`;
    tax = itemPriceDouble * 0.05;
    document.querySelector("#tax").innerHTML = `${tax.toFixed(2)}`;
    total = itemPriceDouble + tax;
    document.querySelector("#total").innerHTML = `${total.toFixed(2)}`;
    e.target.parentElement.remove();

    // printing variables
    // console.log(`itemPriceDouble: ${itemPriceDouble}`);
  }
});

document
  .querySelector(".modal-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".modal").style.visibility = "hidden";
  });

document.querySelector('#pay').addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(document.querySelector('.order-details').childNodes.length);
  if(document.querySelector('.order-details').childNodes.length < 16){
    alert("Please add items to cart");
    window.location = "/category";
  }else {
    axios.post('/category', { cartItems })
  // .then(function(res){
  //   console.log(`Line 323 - category.js - ${JSON.stringify(res.data)}`);
  // })
  
  .then(function(response){
    // console.log(`Line 325: category.js - ${JSON.stringify(response.data)}`);
    showPayModal();
    
    // if(response.data.redirect == '/MainMenu'){
    //   console.log("test");
    //   // window.location = "/MainMenu";
    // }

    setTimeout(() => window.location = "/MainMenu", 5000);
  })
  .catch(function(err){
    // console.log("error happened");
    console.log(`err: ${err.toString()}`);
    // window.location = "/Login"
  })
  }

  //remove items from cart
  // let purchasedItems = Array.from(document.querySelectorAll('.purchased'));
  // purchasedItems.forEach(ele => {
  //   ele.remove();
  // })
  
})

function showPayModal(){
  document.querySelector('.modal-pay').style.visibility = "visible";
  
}