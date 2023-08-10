import generate from "./generate";

const update = (activeCategorySelector, renderContainerSelector, btnLoadSelector, shownBooks) => {
    const btnLoad = document.querySelector(btnLoadSelector);

    const loadMore = () => {
        const activeCategory = document.querySelector(activeCategorySelector).getAttribute('data-param');
        const currentIndex = document.querySelector(renderContainerSelector).children.length;

        console.log(currentIndex); console.log(activeCategory);
        generate(activeCategory, currentIndex, currentIndex + shownBooks, renderContainerSelector, btnLoad);
    }

    btnLoad.addEventListener('click', loadMore);
}

export default update;