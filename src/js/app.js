import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();

// slider
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});


