const getCategoryProduct = async () => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products/categories");
        return data;
    } catch (error) {
        return [];
    }

}

const displayCategory = async () => {
    const categories = await getCategoryProduct();
    if (categories.length == 0) {
        document.querySelector("section .container").innerHTML = `
            <h1>No categories found</h1>
        `;
        return;
    }
    else {
        const category = categories.map((category) => {
            return `
               <div class ="category">
               <h2>${category}</h2>
               <a href="./details.html?category=${category}">products</a>
            </div>
            
            `;
        }).join('');
        document.querySelector("section .container .row").innerHTML = category;
        document.querySelector(".loader").classList.add("No-loader");
    }



}

displayCategory();