import Book from "./books"
import getData from "../http/data";
import addToBasket from "./addToBasket";
import basket from "./basket";

const generate = (param, startIndex, max, renderContainerSelector, update) => {
    const loader = document.createElement('div');

    if (!update) {
        loader.classList.add('loader');
        loader.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
        document.querySelector(renderContainerSelector).append(loader);
    }else{
        update.setAttribute('disabled', '');
    }

    getData(param, startIndex, max)
        .then((data) => {
            data.forEach(item => {
                const book = new Book(item);
                book.render(renderContainerSelector);
            })

            addToBasket('.btn.buy', '.header-buttons .basket span');
            basket('nav .header-buttons .basket span', '.btn.buy');

            loader.remove();
            update && update.removeAttribute('disabled', '');
        })
}

export default generate;