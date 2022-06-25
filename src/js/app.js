import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();

// slider
// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//         'min': 0,
//         'max': 100
//     }
// });

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
        document.querySelector(".filter").style.height = "auto"
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
