const basket = (basketScoreItemSelector, btnsSelector) => {
    const basketData = JSON.parse(localStorage.getItem('basket'));
    const basketScoreItem = document.querySelector(basketScoreItemSelector); 
    const btns = document.querySelectorAll(btnsSelector);

    if (basketData && basketData.length > 0) {
        basketScoreItem.style.display = 'flex';
        basketScoreItem.textContent = basketData.length;
    }else{
        basketScoreItem.style.display = 'none';
    }

    btns.forEach(btn => {
        const id = btn.getAttribute('data-id');
        const index = basketData ? basketData.findIndex(item => item.id === id) : -1;
        
        if (index !== -1) {
            btn.classList.add('in-basket');
            btn.textContent = 'in the cart';
        }else{
            btn.classList.remove('in-basket');
            btn.textContent = 'buy now';
        }
    })
}

export default basket;