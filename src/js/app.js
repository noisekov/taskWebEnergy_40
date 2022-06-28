import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();

// category__list
const showList = document.querySelector("#js-show-btn");
const hiddenBtn = document.querySelector("#js-hidden-btn");
const hiddenList = document.querySelectorAll('.category__list_hidden')
document.addEventListener("click", showBtn)
function showBtn(e) {
    if(e.target.closest("#js-show-btn")) {
        for (let i = 0; i < hiddenList.length; i++){
            hiddenList[i].classList.add('category__list_show');
            hiddenList[i].classList.remove('category__list_hidden');
        }
        showList.classList.add('category__list_hidden');
        showList.classList.remove('category__list_show');
        hiddenBtn.classList.add('category__list_show');
    }
    if(e.target.closest("#js-hidden-btn")) {
        for (let i = 0; i < hiddenList.length; i++){
            hiddenList[i].classList.add('category__list_hidden');
            hiddenList[i].classList.remove('category__list_show');
        }
        showList.classList.remove('category__list_hidden');
        showList.classList.add('category__list_show');
        hiddenBtn.classList.remove('category__list_show');
     }
}

//show-size-block
const basketBtn = document.querySelector("#js-show-size");
document.addEventListener("click", showSizeBlock)

function showSizeBlock(event) {
    if(event.target.closest("#js-show-size")) {
        document.querySelector(".size").style.display = 'block';
    }
}
//close-size-block
const closeSize = document.querySelector("#js-close-size-block");
document.addEventListener("click", closeBlockSize)

function closeBlockSize(e) {
    if (e.target.closest("#js-close-size-block"))
    document.querySelector(".size").style.display = "none"
}


//show-filter
const showFilter = document.querySelector("#show-filter");
document.addEventListener("click", showFilterblock);

function showFilterblock (e) {
    if(e.target.closest("#show-filter")){
        document.querySelector(".filter").classList.toggle("show-filter");
        document.querySelector(".filter-block-exit").classList.toggle("_active")
        document.querySelector(".filter").style.height = "auto"
    } 
}
//btnClose
document.addEventListener("click", btnClose)

function btnClose (e) {
    if (e.target.closest(".filter-block-exit")){
        document.querySelector(".filter").classList.remove("show-filter"); 
        document.querySelector(".filter-block-exit").classList.toggle("_active")
    }
}


///filter-block__price-hidden
const priceList = document.querySelectorAll(".filter-block__price_hidden");
document.addEventListener("click", priceShow) 

function priceShow (e) {
    if (e.target.closest("#js-show-all-list")){
        for (let i = 0; i < priceList.length; i++){
            priceList[i].classList.toggle("filter-block__price_hidden")
        }
    }
}


//show-mores
const showAllBlocks = document.querySelector("#js-show-more");
const hiddenMobileBlock =  document.querySelectorAll(".hidden-for-mobile-screen");
document.addEventListener("click", funShowBlock)

function funShowBlock (e) {
    if (e.target.closest("#js-show-more")) {
        for (let i = 0; i < hiddenMobileBlock.length; i++){
            hiddenMobileBlock[i].style.display = 'block'
        }
    }
}

//try to add class category__list
const categoryLiElement10 = document.querySelector(".category__list").children[10]
const categoryLiElement9 = document.querySelector(".category__list").children[9]
const categoryLiElement8 = document.querySelector(".category__list").children[8]
const categoryLiElement7 = document.querySelector(".category__list").children[7]
const categoryLiElement6 = document.querySelector(".category__list").children[6]
const categoryLiElement5 = document.querySelector(".category__list").children[5]
const categoryLiElement4 = document.querySelector(".category__list").children[4]
window.addEventListener("resize", function() {
    if (window.innerWidth < 750) {
        categoryLiElement10.classList.add("category__list_hidden");
        categoryLiElement9.classList.add("category__list_hidden");
        categoryLiElement8.classList.add("category__list_hidden");
    } else {
        categoryLiElement10.classList.remove("category__list_hidden");
        categoryLiElement9.classList.remove("category__list_hidden");
        categoryLiElement8.classList.remove("category__list_hidden");
    }
});
window.addEventListener("resize", function() {
    if (window.innerWidth < 400) {
        categoryLiElement7.classList.add("category__list_hidden");
        categoryLiElement6.classList.add("category__list_hidden");
        categoryLiElement5.classList.add("category__list_hidden");
        categoryLiElement4.classList.add("category__list_hidden");
    } else {
        categoryLiElement7.classList.remove("category__list_hidden");
        categoryLiElement6.classList.remove("category__list_hidden");
        categoryLiElement5.classList.remove("category__list_hidden");
        categoryLiElement4.classList.remove("category__list_hidden");
    }
});

// slider
// import noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//         'min': 0,
//         'max': 100
//     }
// });

//showBurgerMenu

const hiddenBurgerMenu = document.querySelector(".header-down__nav-list");
const burgerMenu = document.querySelector(".header__burger");
document.addEventListener("click", burgerFunc)

function burgerFunc (e) {
    if (e.target.closest("#show-burger-menu")) {
        burgerMenu.classList.toggle(".active-burger");
        hiddenBurgerMenu.classList.toggle(".hiddenMenu");
    } 
}