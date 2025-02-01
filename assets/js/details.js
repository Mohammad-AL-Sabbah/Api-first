const getCategoryProducts = async () => {
    const urlparams = new URLSearchParams(window.location.search);
    const categoryname = urlparams.get("category");
    const {data} = await axios.get(`https://fakestoreapi.com/products/category/${categoryname}`);
    try{
        document.querySelector('.path2').innerHTML = categoryname;

    }catch{
        document.querySelector('.path2').innerHTML = "Try again later";
    }
    return data;
};
getCategoryProducts();
const displayProducts = async ()=>{
        try{
            const products = await getCategoryProducts();
            const result = products.map((ele)=>{
            return `
              
    <div class="card">
        <div class="img-cont">
            <img src="${ele.image}" alt="..">
        </div>
        <div class="card-details">
            <h3 class="card-title">
               ${ele.title}
            </h3>
        </div>
        <div class="card-btns">
        <div class="card-btn">
            <button class="card-price">Price is: ${ele.price}</button>
        </div>
        <div class="card-btn">
            <button class="card-price">Show Details</button>
        </div>
        </div>
    </div>

`
        }).join(' ');   
        document.querySelector(".space").classList.add("d-none");
        document.querySelector('.dis-products .card-container').innerHTML = result;
        
    }
        catch{
            return `<span>Try again later</span>`
        }
    
}
displayProducts();
