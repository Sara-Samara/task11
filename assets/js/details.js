const getCategory = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return data;
}

const displayCategories = async () => {
    const categories = await getCategory();
    const product = categories.map((product) => {
        return `
           <div class ="product">
           <h2>${product.title}</h2>
           <img src=${product.image} />
           <h3>${product.price}</h3>
        </div>
        
        `;
    }).join('');
    document.querySelector(".products .container .row").innerHTML = product;

}

displayCategories();