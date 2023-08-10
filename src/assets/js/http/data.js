const getData = async (param, startIndex, max) => {
    const _apiKey = 'AIzaSyDcH4tKiz9Bqx8dWuyn5poNh9BqX1x4Llo';
    const _url = `https://www.googleapis.com/books/v1/volumes?q=subject:${param}&key=${_apiKey}&printType=books&startIndex=${startIndex}&maxResults=${max}&langRestrict=en`;
    
    try {
        const response = await fetch(_url);
        const data = await response.json();

        console.log(data);

        return data.items.map(item => {
            const volumeInfo = item.volumeInfo;
            const saleInfo = item.saleInfo;

            return {
                title: volumeInfo.title || 'No Title',
                writer: volumeInfo.authors || [],
                image: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'assets/img/book.png',
                about: volumeInfo.description || 'no info',
                score: volumeInfo.ratingsCount || null,
                stars: volumeInfo.averageRating || null,
                price: saleInfo && saleInfo.retailPrice ? saleInfo.retailPrice.amount : null,
                currency: saleInfo && saleInfo.retailPrice ? saleInfo.retailPrice.currencyCode : null,
                id: item.id 
            };
        });
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

export default getData;