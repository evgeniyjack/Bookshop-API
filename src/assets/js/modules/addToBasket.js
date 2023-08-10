import basket from "./basket";

const addToBasket = (btnsSelector, basketScoreItemSelector) => {
    const btnsBuy = document.querySelectorAll(btnsSelector);

    btnsBuy.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            let basketData = JSON.parse(localStorage.getItem('basket')) || [];
            
            const existingItemIndex = basketData.findIndex(item => item.id === id);
            
            if (existingItemIndex !== -1) {
                basketData.splice(existingItemIndex, 1);
            } else {
                basketData.push({ id });
            }
            
            localStorage.setItem('basket', JSON.stringify(basketData));
            basket(basketScoreItemSelector, btnsSelector);
        });
    });
};

export default addToBasket;
