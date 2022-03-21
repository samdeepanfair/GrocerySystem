
const categoryItem = document.querySelector('.category-item');
// const categoryItemArr = Array.from(document.querySelectorAll('.category-item'));
const categoryItemArr = Array.from(document.querySelectorAll('.category-item'));
const categoryItemNames = Array.from(document.querySelectorAll('.category-item a'));
const modalHeader = document.querySelector('.modal');
const subCatItemArr = Array.from(document.querySelectorAll('.sub-cat-item'));

let count = 0;

categoryItemArr.forEach(item => {
  // console.log(item);
  item.addEventListener('click',popUp);
})

function popUp(event){
  event.preventDefault();
  document.querySelector('.modal').style.visibility = "visible";
  let divModal = document.querySelector('.modal');

  document.querySelector('.selected-items').innerHTML = "";

  if(divModal.hasChildNodes && divModal.firstChild.className == 'modal-name'){
    divModal.removeChild(divModal.firstChild);
  }
  // console.log(divModal.children);
  // console.log(divModal.childNodes);

  console.log(event);
  console.log(event.target.innerText);
  console.log(this);
  console.log(this.innerText);

  modalHeader.insertAdjacentHTML(`afterbegin`,`<h2 class="modal-name">${this.innerText}</h2>`);
}

// console.log(categoryItemArr);
// categoryItemNames.map(ele=>{
//   console.log(ele.innerText);
// })

subCatItemArr.forEach(item => {
  item.addEventListener('click', addToCart);
})

function addToCart(){
  // console.log(this.children[0].innerText);
  count += 1;
  if(count <= 10){
    document.querySelector('.selected-items').innerHTML += `${this.children[0].innerText}\n ${this.children[1].innerText} + `;
  document.querySelector('.num-of-items-selected').innerHTML = `Number of items selected: ${count}`;
  }else{
    document.querySelector('.selected-items').innerHTML = "";
    document.querySelector('.num-of-items-selected').innerHTML = `Selected item over limitaiton`;
    count = 0;
  }
}

document.querySelector('.modal-close-btn').addEventListener('click',function(){
  document.querySelector('.modal').style.visibility = "hidden";
})

document.querySelector('.ok').addEventListener('click',function(){
  document.querySelector('.modal').style.visibility = "hidden";
})

document.querySelector('.delete').addEventListener('click',()=>{
  document.querySelector('.selected-items').innerHTML = "";
  count = 0;
  document.querySelector('.num-of-items-selected').innerHTML = `Number of items selected: ${count}`;
})

let quantity = document.querySelector('.quantity').innerHTML;
let quantityNum = Number(document.querySelector('.quantity').innerHTML);

const quantityArr = Array.from(document.querySelectorAll('.quantity'));
const plusArr = Array.from(document.querySelectorAll('.plus'));
console.log(quantityArr)
quantityArr.forEach(qty => {
  document.querySelector.addEventListener('click',()=>{
    quantityNum += 1;
    qty = `${quantityNum}`;
    qty.innerHTML = quantityNum;
    console.log(quantityNum);
})
})

