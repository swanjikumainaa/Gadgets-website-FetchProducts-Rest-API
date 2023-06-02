const productsContainer = document.getElementById('products')
const getProducts = ()=>{
 return fetch('https://dummyjson.com/product?limit=8')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error)
}
// getProducts();

const displayProducts = async()=>{
    const products = await getProducts();
    console.log(products);

    products.products.map(item=>{
        let div = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h2');
        let price = document.createElement('p');
        let cartBtn = document.createElement('button');

        image.src =item.thumbnail;
        title.innerHTML =item.title;
        price.innerHTML = item.price;
        cartBtn.innerHTML = 'ADD TO CART'



        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(cartBtn)
        div.setAttribute('key',item.id);
        div.setAttribute('class','ourProducts');
        image.setAttribute('class','productImage');
        cartBtn.setAttribute('class','cartbtn');
       
        
        productsContainer.appendChild(div);
        
        console.log(item);
    })
}
displayProducts();