const getCategories = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products/categories');
    console.log(data)
    return data;
}
const displayCategories = async  () => {
    
    const categories = await getCategories();
    const result = categories.map((ele)=>{
        return `
       <a href="./details.html?category=${ele}"class="active"><li>${ele}</li></a>
       
        `
    }).join('');
    document.querySelector('.links-list .hide-list').innerHTML = result;
    
}   

displayCategories();