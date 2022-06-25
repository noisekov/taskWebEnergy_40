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