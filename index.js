// navbar 
function activeMenu() {
    const menuBar = document.querySelector("#menuBar")
    menuBar.classList.toggle("translate-x-0")

}
document.querySelector("#menuBar").addEventListener("click",()=>{
    document.querySelector("#menuBar").classList.remove("translate-x-0")
})


// stickybar small devices
document.addEventListener("scroll", () => {
    var pageOffset = window.pageYOffset
    if (pageOffset > 150) {
        document.querySelector("#stickybar").classList.add("shadow-lg")
        if (pageOffset > 2500) {
            document.querySelector("#stickybar").classList.add("!right-0")
        } else {
            document.querySelector("#stickybar").classList.remove("!right-0")
        }
    } else {
        document.querySelector("#stickybar").classList.remove("shadow-lg")
    }

})

// stickybar large devices
document.addEventListener("scroll", () => {
    var pageOffset = window.pageYOffset
    if (pageOffset > 1800) {
        document.querySelector("#stickyBarLarge").classList.add("!translate-y-0")
    }
})
// stickybar remove from DOM 
function stickyLargeClose() {
    document.querySelector("#stickyBarLarge").remove()
}



// show and hidden
const observe = new IntersectionObserver((entries) => {
    // console.log(entries);
    entries.forEach((data) => {
        if (data.isIntersecting) {
            data.target.classList.add('show')
        } else {
            data.target.classList.remove('show')

        }
    })
})
let hideEl = document.querySelectorAll(".hide");
hideEl.forEach((el) => observe.observe(el))