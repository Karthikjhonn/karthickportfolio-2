// navbar 
function activeMenu() {
    const menuBar = document.querySelector("#menuBar")
    menuBar.classList.toggle("translate-x-0")

}
document.querySelector("#menuBar").addEventListener("click", () => {
    document.querySelector("#menuBar").classList.remove("translate-x-0")
})


// stickybar small devices
document.addEventListener("scroll", () => {
    var pageOffset = window.pageYOffset

    if (pageOffset > 2500) {
        document.querySelector("#stickybar").classList.add("!right-0")
    }
}
)

function stickySmallClose() {
    document.querySelector("#stickybar").classList.toggle("!right-[-54px]")
    console.log("btn wrk");
}


// stickybar large devices
document.addEventListener("scroll", () => {
    var pageOffset = window.pageYOffset
    if (pageOffset > 1800) {
        document.querySelector("#stickyBarLarge").classList.add("bottom-[-10px]")
    }
})
function stickyLargeClose() {
    // console.log(document.querySelector("#stickyBarLarge").clientHeight)
    // document.querySelector("#stickyBarLarge").remove()
    const stickyDiv = document.querySelector("#stickyBarLarge").classList.length
    if (stickyDiv == 13) {
        document.querySelector("#stickyCloseBtn").childNodes[1].classList.add("hidden")
        document.querySelector("#stickyCloseBtn").childNodes[3].classList.remove("hidden")
    } else if (stickyDiv == 14) {
        document.querySelector("#stickyCloseBtn").childNodes[1].classList.remove("hidden")
        document.querySelector("#stickyCloseBtn").childNodes[3].classList.add("hidden")
    }
    document.querySelector("#stickyBarLarge").classList.toggle("bottom-[-100px]")
}

// M4.5 15.75l7.5-7.5 7.5 7.5


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

// preloader 
var loader = document.getElementById("preloader")
const showPageElm = document.getElementById("showPage")
window.addEventListener("load", () => {
    if (showPageElm.classList == "hidden") {
        setTimeout(showPage, 1500)
    }
})

const showPage = () => {
    loader.classList.add("!hidden")
    showPageElm.classList.add("!block")
}