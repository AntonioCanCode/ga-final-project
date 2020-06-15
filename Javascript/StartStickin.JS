// Mobile JS
// Mobile Nav JS

const burgerButton = document.getElementById("menu-trigger");
const exitButton = document.getElementById("menu-close");
const sideMenu = document.getElementById("side-menu");

burgerButton.addEventListener("click", onClick);
exitButton.addEventListener("click", onExit);

function onClick(event) {
  sideMenu.classList.add("show-menu");
}
function onExit(event) {
  sideMenu.classList.remove("show-menu");
  document.querySelector(".about-us-list").style.display = "none";
  document.querySelector("#side-about-button").innerText = "+ About Us";
  document.querySelector(".stick-item-list").style.display = "none";
  document.querySelector("#side-stick-button").innerText = "+ Stick Life";
}

// Mobile Menu JS

const aboutMenuToggle = document.querySelector("#side-about-button");
const aboutItems = document.querySelector(".about-us-list");

const stickMenuToggle = document.querySelector("#side-stick-button");
const stickItems = document.querySelector(".stick-item-list");

aboutMenuToggle.addEventListener("click", onMenuClick);
stickMenuToggle.addEventListener("click", onMenuClick);

// Original Side Menu subcontent Show/Hide
// function onMenuClick(event){
//   switch(event.target){
//     case aboutMenuToggle:
//       if(aboutItems.style.display === "" || aboutItems.style.display === "none"){
//         aboutItems.style.display = "block";
//         aboutMenuToggle.innerText = "- About Us";
//       }
//       else{
//         aboutItems.style.display = "";
//         aboutMenuToggle.innerText = "+ About Us";
//       };
//       break;
//     case stickMenuToggle:
//       if(stickItems.style.display === "" || stickItems.style.display === "none"){
//         stickItems.style.display = "block";
//         stickMenuToggle.innerText = "- Stick Life";
//       }
//       else{
//         stickItems.style.display = "";
//         stickMenuToggle.innerText = "+ Stick Life";
//       };
//       break;
//   }
// }

function onMenuClick(event) {
  if (event.target === aboutMenuToggle) {
    if (aboutItems.style.maxHeight) {
      aboutItems.style.maxHeight = null;
      aboutMenuToggle.innerText = "+ About Us";
    } else {
      aboutItems.style.maxHeight = aboutItems.scrollHeight + "px";
      aboutMenuToggle.innerText = "- About Us";
    }
  } else if (event.target === stickMenuToggle) {
    if (stickItems.style.maxHeight) {
      stickItems.style.maxHeight = null;
      stickMenuToggle.innerText = "+ Stick Life";
    } else {
      stickItems.style.maxHeight = stickItems.scrollHeight + "px";
      stickMenuToggle.innerText = "- Stick Life";
    }
  }
}

//Desktop Nav JS

const button1 = document.getElementById("menu-1-button");
const button2 = document.getElementById("menu-2-button");
const menu1 = document.querySelector(".menu-1");
const menu2 = document.querySelector(".menu-2");
const navBar = document.querySelector(".nav");

var menuListenArray = [button1, button2, menu1, menu2];

for (var i = 0; i < menuListenArray.length; i++) {
  menuListenArray[i].addEventListener("mouseover", onHover);
  menuListenArray[i].addEventListener("mouseleave", onLeave);
}

function onHover(event) {
  switch (event.target) {
    case button1:
    case menu1:
      menu1.classList.add("show");
      menu1.style.opacity = 1;
      break;
    case button2:
    case menu2:
      menu2.classList.add("show");
      menu2.style.opacity = 1;
      break;
  }
}

function onLeave(event) {
  menu1.classList.remove("show");
  menu2.classList.remove("show");
  menu1.style.opacity = 0;
  menu2.style.opacity = 0;
}

// Picture array & Img Switch

const largeImg = document.querySelector(".large-image-container");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

img1.addEventListener("click", onImgClick);
img2.addEventListener("click", onImgClick);
img3.addEventListener("click", onImgClick);

function onImgClick(event) {
  switch (event.target) {
    case img1:
      largeImg.style.backgroundImage = "url('./images/stick-chair.JPG')";
      img1.style.opacity = 1;
      img2.style.opacity = 0.6;
      img3.style.opacity = 0.6;
      break;
    case img2:
      largeImg.style.backgroundImage = "url('./images/Stick-cool.jpg')";
      img2.style.opacity = 1;
      img1.style.opacity = 0.6;
      img3.style.opacity = 0.6;
      break;
    case img3:
      largeImg.style.backgroundImage = "url('./images/stick-driving.jpg')";
      img3.style.opacity = 1;
      img1.style.opacity = 0.6;
      img2.style.opacity = 0.6;
      break;
  }
}

//   Object and Object Function

const stickProduct1 = {
  name: "Stick Personal",
  category: "Stick",
  price: 115,
  productInfo: "",
  benefits: [
    "Can drive you home",
    "Sturdy",
    "Dependable",
    "Protection",
    "Great Chef",
  ],
  productPics: [
    "url('./images/stick-chair.JPG')",
    "url('./images/Stick-cool.jpg')",
    "url('./images/stick-driving.jpg')",
  ],
};
const stickProduct2 = {
  name: "Stick Couples",
  category: "Stick",
  price: 400,
  productInfo: "",
  benefits: [],
  productPics: [],
};
const stickProduct3 = {
  name: "Stick Community",
  category: "Stick",
  price: 900,
  productInfo: "",
  benefits: [],
  productPics: [],
};

const stickProducts = [stickProduct1, stickProduct2, stickProduct3];

// Object Function

function displayCategory() {
  document.getElementById("category").innerHTML = this.category;
}

stickProduct1.showCategory = displayCategory;

stickProduct1.showCategory();

function displayPrice() {
  document.getElementById("price").innerHTML = this.price;
}

stickProduct1.showPrice = displayPrice;

stickProduct1.showPrice();

// Product Info & Benefits Toggle

const productTitle = document.querySelector(".title1");
const benefitTitle = document.querySelector(".title2");
const productPara = document.querySelector("#pro-description");
const benefitPara = document.querySelector("#pro-benefit");
const benefitList = document.querySelector("#pro-benefit-list");

productTitle.addEventListener("click", titleSwitch);
benefitTitle.addEventListener("click", titleSwitch);

function titleSwitch(event) {
  switch (event.target) {
    case productTitle:
      productTitle.classList.add("active-title");
      productTitle.classList.remove("inactive-title");
      benefitTitle.classList.remove("active-title");
      benefitTitle.classList.add("inactive-title");
      benefitPara.classList.remove("show");
      benefitPara.classList.add("hidden");
      productPara.classList.add("show");
      productPara.classList.remove("hidden");
      benefitList.classList.add("hidden");
      benefitList.classList.remove("show");
      break;
    case benefitTitle:
      productTitle.classList.remove("active-title");
      productTitle.classList.add("inactive-title");
      benefitTitle.classList.add("active-title");
      benefitTitle.classList.remove("inactive-title");
      benefitPara.classList.add("show");
      benefitPara.classList.remove("hidden");
      productPara.classList.remove("show");
      productPara.classList.add("hidden");
      benefitList.classList.remove("hidden");
      benefitList.classList.add("show");
      break;
  }
}
