let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
let idData = JSON.parse(localStorage.getItem("idData")) || [];
let cartItemsSection = document.querySelector(".cartItemsSection");

//RENDER CART PRODUCT LIST
function renderProductList(cartDataarray) {
  cartItemsSection.innerHTML = "";
  cartDataarray.forEach((cartItem, index) => {
    let cartItemDetail = document.createElement("div");
    cartItemDetail.classList.add("cartItemDetail");

    let cartItemImage = document.createElement("img");
    cartItemImage.classList.add("cartItemImage");
    cartItemImage.setAttribute("src", cartItem.productImage);

    let itemDetail = document.createElement("div");
    itemDetail.classList.add("itemDetail");

    let cartItemName = document.createElement("p");
    cartItemName.classList.add("cartItemName");
    cartItemName.textContent = cartItem.productName;

    let cartItemPrice = document.createElement("p");
    cartItemPrice.classList.add("cartItemPrice");
    cartItemPrice.textContent = `₹${cartItem.productPrice}`;

    let actionButtons = document.createElement("div");
    actionButtons.classList.add("actionButtons");

    let removeIcon = document.createElement("div");
    removeIcon.classList.add("removeIcon");
    removeIcon.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    removeIcon.onclick = () => {
      removeItemFromCart(cartItem, index);
    };

    let itemCountControl = document.createElement("div");
    itemCountControl.classList.add("itemCountControl");

    let minusIcon = document.createElement("div");
    minusIcon.classList.add("minusIcon", "iconDesign");
    minusIcon.innerHTML = '<i class="fa-solid fa-minus"></i>';

    minusIcon.onclick = () => {
      decreaseItemCount(cartItem, index);
    };

    let itemCount = document.createElement("p");
    itemCount.classList.add("itemCount");
    if (cartItem.count <= 0) {
      itemCount.textContent = "01";
    } else {
      cartItem.count >= 10
        ? (itemCount.textContent = `${cartItem.count}`)
        : (itemCount.textContent = `0${cartItem.count}`);
    }

    let plusIcon = document.createElement("div");
    plusIcon.classList.add("plusIcon", "iconDesign");
    plusIcon.innerHTML = '<i class="fa-solid fa-plus"></i>';

    plusIcon.onclick = () => {
      console.log("maindata::::", cartData);
      increaseItemCount(cartItem, index);
    };

    itemDetail.append(cartItemName, cartItemPrice);
    itemCountControl.append(minusIcon, itemCount, plusIcon);
    actionButtons.append(removeIcon, itemCountControl);
    cartItemDetail.append(cartItemImage, itemDetail, actionButtons);
    cartItemsSection.append(cartItemDetail);
  });
}

renderProductList(cartData);

// INCREASE ITEM COUNT
let increaseItemCount = (cartItem, index) => {
  let itemCount = document.querySelectorAll(".itemCount");
  let itemFinalCount = parseInt(itemCount[index].textContent);
  itemFinalCount++;
  itemFinalCount >= 10
    ? (itemCount[index].textContent = `${itemFinalCount}`)
    : (itemCount[index].textContent = `0${itemFinalCount}`);
  cartData[index].count = itemFinalCount;
  renderPriceListSection(cartData);
};

// DECREASE ITEM COUNT
let decreaseItemCount = (cartItem, index) => {
  let itemCount = document.querySelectorAll(".itemCount");
  let itemFinalCount = parseInt(itemCount[index].textContent);
  itemFinalCount--;
  // REMOVE ITEM FROM CART IF ITEM COUNT IS LESS THAN 1
  if (itemFinalCount < 1) {
    removeItemFromCart(cartItem, index);

    return;
  }
  itemFinalCount >= 10
    ? (itemCount[index].textContent = `${itemFinalCount}`)
    : (itemCount[index].textContent = `0${itemFinalCount}`);
  cartData[index].count = itemFinalCount;
  renderPriceListSection(cartData);
};

// RENDER PRICE LIST SECTION
function renderPriceListSection(cartPriceDataArray) {
  let allItesmCalsulation = document.querySelector(".allItesmCalsulation");
  let totalPrice = document.querySelector(".totalPrice");
  let itemTotalPrice = 0;
  allItesmCalsulation.innerHTML = "";

  cartPriceDataArray.forEach((cartItem, index) => {
    let itemCalculation = document.createElement("div");
    itemCalculation.classList.add("itemCalculation");

    let itemCalcName = document.createElement("p");
    itemCalcName.classList.add("itemCalcName");
    itemCalcName.textContent = cartItem.productName;

    let itemCalcQty = document.createElement("p");
    itemCalcQty.classList.add("itemCalcQty");
    itemCalcQty.textContent = `x${cartItem.count}`;

    let itemCalcPrice = document.createElement("p");
    itemCalcPrice.classList.add("itemCalcPrice");
    itemCalcPrice.textContent = `₹${cartItem.productPrice}`;
    let itemPrice = parseInt(cartItem.productPrice);

    itemTotalPrice += cartItem.count * itemPrice;
    itemCalculation.append(itemCalcName, itemCalcQty, itemCalcPrice);
    allItesmCalsulation.append(itemCalculation);
  });
  totalPrice.textContent = `₹${itemTotalPrice}`;
}

renderPriceListSection(cartData);

function removeItemFromCart(cartItem, index) {
  idData = JSON.parse(localStorage.getItem("idData"));
  cartData.splice(index, 1);
  localStorage.setItem("cartData", JSON.stringify(cartData));
  let finalStoreItems = idData.filter((itemId) => {
    console.log("item:id::", itemId);
    return cartItem.id != itemId;
  });
  console.log("finalStoreItems::", finalStoreItems);
  localStorage.setItem("idData", JSON.stringify(finalStoreItems));
  renderProductList(cartData);
  renderPriceListSection(cartData);
}
