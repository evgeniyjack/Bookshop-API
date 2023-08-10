class Book {
    constructor({writer, title, score, stars, about, price, image, id, currency}) {
        this.writer = writer;
        this.title = title;
        this.score = score;
        this.stars = stars;
        this.about = about;
        this.price = price;
        this.image = image;
        this.id = id;
        this.currency = currency;
    }

    render(blockRenderSelector) {
        const generateStars = (starsLength) => {
            let stars = '';

            for (let i = 0; i < 5; i++) {
                if (i < starsLength) {
                    stars += '<span class="yellow"><img src="assets/img/star.svg" alt="star icon"></span>'; 
                } else {
                    stars += '<span><img src="assets/img/star.svg" alt="star icon"></span>'; 
                }
            }
            
            return stars;
        }

        const generateWrites = (writers) => {
            let writersText = '';
            writers.forEach((item, i) => {
                if (i === writers.length - 1) {
                    writersText += item;
                }else{
                    writersText += item + ', ';
                }
            })

            return writersText;
        }

        const html = `
            <div class="book-image"><img src="${this.image}" alt="book image"></div>
            <div class="book-data">
                <div class="writer">${generateWrites(this.writer)}</div>
                <div class="title">${this.title}</div>
                <div class="score">
                    ${
                        this.stars ? `<div class="stars-container">
                        ${generateStars(this.stars)}
                    </div>` : ''
                    }
                    ${this.score ? `<span class="reviews">${this.score} review</span>` : ''}
                </div> <!-- Закройте тег div правильно здесь -->
                <p>${this.about}</p>
                ${this.price ? `<div class="price">${this.currency} ${this.price}</div>` : ''}
                <button class="btn buy" data-id="${this.id}">buy now</button>
            </div>
        `;

        const element = document.createElement('div');
        element.classList.add('item');
        element.innerHTML = html;

        document.querySelector(blockRenderSelector).append(element);
    }
}

export default Book;