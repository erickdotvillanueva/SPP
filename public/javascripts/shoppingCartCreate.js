//Variables
let shoppingCart = [];

//GREEN SECTION
//Check to see if add to cart button is on the page
var addToCartButton = document.getElementById('addToCartButton');
if(addToCartButton){
  addToCartButton.addEventListener('click', addToCart);
}

//Check to see if shopping list clear button is on the page
var clearShoppingListButton = document.getElementById('shoppingListClear');
if (clearShoppingListButton){
  clearShoppingListButton.addEventListener('click', clearList);
}

//Clears saved arrays from localstorage
function clearList() {
  localStorage.setItem("PartsChoosen", "");
  window.reload();
  alert("Please Reload The Page");
}

//Saves all info from part search, places it in an Array and converts to JSON to save to localstorage
function addToCart() {
    //Change info sources when server is up
    var partnum = document.getElementById('partSearchInput').value;
    var partprice = document.getElementById('partPriceField').innerHTML;

    //Add new variables into partSummary
    let partSummary = [partnum, partprice];
    shoppingCart.push(partSummary);
    console.log(shoppingCart);
    localStorage.setItem("PartsChoosen", JSON.stringify(shoppingCart));
    alert("Added To Cart!");
}

//Check to see if shopping list generator button is on the page
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
      li.setAttribute('id', 'shoppingItems');
      li.innerText = "Part Number: " + item[0] + "\n\n" + item[1] + "\n" + "Discounted Price: " + "\n\n" + "Part Description: " + "\n\n" + "Data Sheet: ";
      list.appendChild(li);
      console.log(list);
  })
}

//YELLOW SECTION

//RED SECTION

