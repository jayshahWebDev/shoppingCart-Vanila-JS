const categories = ["CLOTHES", "SHOES", "MOBILES", "LAPTOPS", "SPORTS"];
let cartSectionItems = JSON.parse(localStorage.getItem("cartData")) || [];
let idData = JSON.parse(localStorage.getItem("idData")) || [];

const clothesList = [
  {
    id: 1,
    category: "CLOTHES",
    productName: "Men Regular Fit Printed Casual Shirt",
    productImage:
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-1/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-1/frontLook.webp",
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-1/backLook.webp",
    ],
  },
  {
    id: 2,
    category: "CLOTHES",
    productName: "Men Regular Fit Printed Casual Shirt",
    productImage:
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-2/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-2/frontLook.webp",
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-2/backLook.webp",
    ],
  },
  {
    id: 3,
    category: "CLOTHES",
    productName: "Men Regular Fit Printed Casual Shirt",
    productImage:
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-3/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-3/frontLook.webp",
      "/assets/clothes/Men Regular Fit Printed Casual Shirt-3/backLook.webp",
    ],
  },
  {
    id: 4,
    category: "CLOTHES",
    productName: "Men Regular Fit Striped Casual Shirt",
    productImage:
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-1/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-1/frontLook.webp",
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-1/backLook.webp",
    ],
  },
  {
    id: 5,
    category: "CLOTHES",
    productName: "Men Regular Fit Striped Casual Shirt",
    productImage:
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-2/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-2/frontLook.webp",
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-2/backLook.webp",
    ],
  },
  {
    id: 6,
    category: "CLOTHES",
    productName: "Men Regular Fit Striped Casual Shirt",
    productImage:
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-3/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-3/frontLook.webp",
      "/assets/clothes/Men Regular Fit Striped Casual Shirt-3/backLook.webp",
    ],
  },
  {
    id: 7,
    category: "CLOTHES",
    productName: "Men Regular Fit Striped Spread Collar Casual Shirt",
    productImage:
      "/assets/clothes/Men Regular Fit Striped Spread Collar Casual Shirt-1/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Men Regular Fit Striped Spread Collar Casual Shirt-1/frontLook.webp",
      "/assets/clothes/Men Regular Fit Striped Spread Collar Casual Shirt-1/backLook.webp",
    ],
  },
  {
    id: 8,
    category: "CLOTHES",
    productName: "Men Regular Fit Striped Spread Collar Casual Shirt",
    productImage:
      "/assets/clothes/Men Regular Fit Striped Spread Collar Casual Shirt-2/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Men Regular Fit Striped Spread Collar Casual Shirt-2/frontLook.webp",
      "/assets/clothes/Men Regular Fit Striped Spread Collar Casual Shirt-2/backLook.webp",
    ],
  },
  {
    id: 9,
    category: "CLOTHES",
    productName: "Striped Men Polo Neck Black T-Shirt",
    productImage:
      "/assets/clothes/Striped Men Polo Neck Black T-Shirt/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Striped Men Polo Neck Black T-Shirt/frontLook.webp",
      "/assets/clothes/Striped Men Polo Neck Black T-Shirt/backLook.webp",
      "/assets/clothes/Striped Men Polo Neck Black T-Shirt/febricLook.webp",
    ],
  },
  {
    id: 10,
    category: "CLOTHES",
    productName: "Striped Men Polo Neck Blue T-Shirt",
    productImage:
      "/assets/clothes/Striped Men Polo Neck Blue T-Shirt/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Striped Men Polo Neck Blue T-Shirt/frontLook.webp",
      "/assets/clothes/Striped Men Polo Neck Blue T-Shirt/backLook.webp",
      "/assets/clothes/Striped Men Polo Neck Blue T-Shirt/febricLook.webp",
    ],
  },
  {
    id: 11,
    category: "CLOTHES",
    productName: "Striped Men Polo Neck Multicolor T-Shirt",
    productImage:
      "/assets/clothes/Striped Men Polo Neck Multicolor T-Shirt/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Striped Men Polo Neck Multicolor T-Shirt/frontLook.webp",
      "/assets/clothes/Striped Men Polo Neck Multicolor T-Shirt/backLook.webp",
      "/assets/clothes/Striped Men Polo Neck Multicolor T-Shirt/febricLook.webp",
    ],
  },
  {
    id: 12,
    category: "CLOTHES",
    productName: "Striped Men Polo Neck Red T-Shirt",
    productImage:
      "/assets/clothes/Striped Men Polo Neck Red T-Shirt/frontLook.webp",
    productPrice: "490",
    imageArray: [
      "/assets/clothes/Striped Men Polo Neck Red T-Shirt/frontLook.webp",
      "/assets/clothes/Striped Men Polo Neck Red T-Shirt/backLook.webp",
      "/assets/clothes/Striped Men Polo Neck Red T-Shirt/febricLook.webp",
    ],
  },
];

let sidebarSection = document.querySelector(".sidebarSection");
let cart = document.querySelector(".cart");
let allProductsData = document.querySelector(".allProducts");
let cartItemsCount = document.querySelector(".cartItems");

// RENDER CATEGORIES LIST
// categories.forEach((value, index) => {
//   let sidebarItemDiv = document.createElement("div");
//   sidebarItemDiv.classList.add("sidebarItem");

//   sidebarItemDiv.addEventListener("click", () => {
//     selectedCategory(index);
//   });

//   let sidebarItemName = document.createElement("p");
//   sidebarItemName.classList.add("sidebarItemName");
//   sidebarItemName.textContent = value;

//   sidebarItemDiv.appendChild(sidebarItemName);
//   sidebarSection.appendChild(sidebarItemDiv);
// });

// let sidebarItems = document.querySelectorAll(".sidebarItem");
// sidebarItems[0].classList.add("activeItem");

// HIGHLIGHT SELECTED CATEGORY
// let selectedCategory = (categoryIndex) => {
//   sidebarItems.forEach((category) => {
//     category.classList.remove("activeItem");
//   });
//   sidebarItems[categoryIndex].classList.add("activeItem");
// };

// RENDER PRODUCTS LIST
clothesList.forEach((product, index) => {
  let productList = document.createElement("div");
  productList.classList.add("productList");

  let productImage = document.createElement("img");
  productImage.classList.add("productImage");
  productImage.setAttribute("src", product.productImage);
  productImage.onmouseover = () => {
    startSlideShow(product, index);
  };
  productImage.onmouseout = () => {
    stopSlideShow(product, index);
  };

  let productName = document.createElement("p");
  productName.classList.add("productName");
  productName.textContent = product.productName;

  let productMainDetails = document.createElement("div");
  productMainDetails.classList.add("productMainDetails");

  let productPrice = document.createElement("p");
  productPrice.classList.add("productPrice");
  productPrice.textContent = `₹${product.productPrice}`;

  let addToCartButton = document.createElement("div");
  addToCartButton.classList.add("addToCartButton", "cartButton");
  addToCartButton.innerHTML = '<i class="fas fa-cart-plus"></i>';
  addToCartButton.onclick = () => {
    addProductToCart(product, index);
  };

  let cartText = document.createElement("p");
  cartText.textContent = "Add to Cart";

  let goToCartButton = document.createElement("div");
  goToCartButton.classList.add("goToCartButton", "cartButton");
  goToCartButton.innerHTML = '<i class="fas fa-cart-shopping"></i>';

  let goToCartText = document.createElement("p");
  goToCartText.textContent = "Go to Cart";

  goToCartButton.onclick = () => {
    goToCartSection();
  };

  let isProductAddedToCart = idData.includes(product.id);

  if (isProductAddedToCart) {
    goToCartButton.style.display = "flex";
    addToCartButton.style.display = "none";
  } else {
    goToCartButton.style.display = "none";
    addToCartButton.style.display = "flex";
  }

  addToCartButton.append(cartText);
  goToCartButton.append(goToCartText);
  productMainDetails.append(productPrice, addToCartButton, goToCartButton);
  productList.append(productImage, productName, productMainDetails);
  allProductsData.append(productList);
});

let imageIndex = 0;
let productImage = document.querySelectorAll(".productImage"),
  slideShowTimeOut,
  addToCartButton = document.querySelectorAll(".addToCartButton"),
  goToCartButton = document.querySelectorAll(".goToCartButton");

// START IMAGE SLIDESHOW WHEN USER MOUSE OVER ON PRODUCT IMAGE
let startSlideShow = (product, index) => {
  let imageDataLength = product.imageArray.length - 1;
  productImage[index].setAttribute("src", product.imageArray[imageIndex]);
  imageIndex >= imageDataLength ? (imageIndex = 0) : imageIndex++;
  slideShowTimeOut = setTimeout(() => {
    startSlideShow(product, index);
  }, 2000);
};

// STOP IMAGE SLIDESHOW WHEN USER MOUSE OUT FROM PRODUCT IMAGE
let stopSlideShow = (product, index) => {
  productImage[index].setAttribute("src", product.productImage);
  imageIndex = 0;
  clearTimeout(slideShowTimeOut);
};
console.log("cartSectionItems.length::", cartSectionItems.length);

cartSectionItems.length >= 1
  ? (cartItemsCount.textContent = cartSectionItems.length)
  : "";

// ADD TO CART FUNCTION
let addProductToCart = (product, index) => {
  addToCartButton[index].style.display = "none";
  goToCartButton[index].style.display = "flex";
  product = {
    ...product,
    productIndex: index,
    count: 1,
  };
  cartSectionItems.push(product);
  idData.push(product.id);
  console.log("array::", cartSectionItems);
  cartItemsCount.textContent = cartSectionItems.length;
  localStorage.setItem("cartData", JSON.stringify(cartSectionItems));
  localStorage.setItem("idData", JSON.stringify(idData));
};

// OPEN CART SECTION PAGE
cart.addEventListener("click", () => {
  location.href = "cart.html";
});

let goToCartSection = () => {
  location.href = "cart.html";
};
