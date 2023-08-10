import generate from "./generate";

const changeCategory = (btnsSelector, renderContainerSelector) => {
    const btns = document.querySelectorAll(btnsSelector);

    generate('Architecture', 0, 6, renderContainerSelector);  

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const renderContainer = document.querySelector(renderContainerSelector);
            const category = btn.getAttribute('data-param');

            btns.forEach(item => item.parentNode.classList.remove('active'));
            btn.parentNode.classList.add('active');

            Array.from(renderContainer.children).forEach(item => item.remove());

            generate(category, 0, 6, renderContainerSelector);  
        });
    });
};

export default changeCategory;
