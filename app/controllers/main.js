const productService = new ProductService ();

function getProductList(params) {
    productService.getProductListAPI()
        .then(result => {
            renderProduct(result.data)
        })
        .catch(error => {
            console.log(error)
        })
}

getProductList()

function renderProduct(ProductList) {
    let html = ""
    ProductList.map((product, index) => {
        html += ` <div class="col-4">
                    <div class="card">
                        <img class="w-100" src="./../../assets/images/${product.hinhAnh}" alt=${product.tenSP}>
                        <div class="body">
                            <div class="d-flex justify-content-between">
                                <h3>${product.tenSP}</h3>
                                <h3>$${product.gia}</h3>
                            </div>
                            <p>${product.moTa}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <button class="btn-3"><i class="fas fa-shopping-cart"></i> Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>`
    })

    document.querySelector(".products .row").innerHTML = html
}






// change theme
document.querySelector(".setting-top").addEventListener("click", e=>{
    document.querySelector(".setting").classList.toggle("open");

})

document.querySelector(".options-wrapper").addEventListener("click", e=>{
    document.querySelector(".circle").classList.toggle("move");
    document.querySelector("header").classList.toggle("dark");
    document.querySelector(".carousel").classList.toggle("dark");
    document.querySelector(".products").classList.toggle("dark");
    document.querySelector(".footer-light").classList.add("d-none");
    document.querySelector(".footer-dark").classList.remove("d-none");
    document.querySelector(".carousel").style.background = "url('./../../assets/images/product-header-bg-dark.jpg') top center / cover no-repeat";


    if (!document.querySelector(".circle").classList.contains("move")) { 
        document.querySelector(".footer-light").classList.remove("d-none");
        document.querySelector(".footer-dark").classList.add("d-none");
        document.querySelector(".carousel").style.background = "url('./../../assets/images/product-header-bg.jpg') top center / cover no-repeat";

    }
})

