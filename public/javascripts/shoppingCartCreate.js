//Variables
let shoppingCart = [];

//GREEN SECTION
var addToCartButton = document.getElementById('addToCartButton');
if(addToCartButton){
  addToCartButton.addEventListener('click', addToCart);
}


function addToCart() {
    //Change info sources when server is up
    var partnum = document.getElementById('partSearchInput').value;
    var partprice = document.getElementById('partPriceField').innerHTML;

    let partSummary = [partnum, partprice];
    shoppingCart.push(partSummary);
    console.log(shoppingCart);
    localStorage.setItem("PartsChoosen", JSON.stringify(shoppingCart));
    alert("Added To Cart!");
}

var generateShoppingList = document.getElementById('shoppingListGenerator');
if(generateShoppingList){
  generateShoppingList.addEventListener('click', generateList);
}

//Creates shopping list using Array stored in localStorage
function generateList() {
  let list = document.getElementById('shoppingCartItems');
  let data = JSON.parse(localStorage.getItem("PartsChoosen"));

  console.log(data);

  data.forEach((item) => {
    console.log(item);
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
      console.log(list);
  })
}

//YELLOW SECTION

//RED SECTION

