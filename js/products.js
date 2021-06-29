const productsJson = `
[
    {
        "id": "1",
        "text-link": "Cabernet",
        "price": 17.00,
        "imgUrl": "img/cabernet.jpeg"
    },
    {
        "id": "2",
       
        
    },
    {
        "id": "3",
     
    },
    {
        "id": "4",
        
    },
       
    },
  
]
`;
 function renderProducts(products) {
     let productsHtml = '';
     for (const product of products) {
        productsHtml += <article>
             <img src="${product.imgUrl}" alt="${product.text-link}" />
             <p class="text-link">${product.text-link}</p>
             <p class="price"> - $${product.price}</p>
             <button class="buttom">Add to cart</button>
        </article>

     }
     document.querySelector('.products').innerHTML = productsHtml;
 }

