import '../css/style.scss';

import slider from './modules/slider';
import changeCategory from './modules/changeCategory';
import update from './modules/updateBooks';
import basket from './modules/basket';

document.addEventListener('DOMContentLoaded', () => {
    slider('.sliders__container', '.sliders__container a', '.slider .dots');
    update('aside ul li.active button', '.card-container', '.show-more', 6);
    changeCategory('aside ul li button', '.card-container');
})