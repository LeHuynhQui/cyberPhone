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


    if (!document.querySelector(".circle").classList.contains("move")) { 
        document.querySelector(".footer-light").classList.remove("d-none");
        document.querySelector(".footer-dark").classList.add("d-none");
    }
})

