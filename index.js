const workExamples = [
    "image-slide-1.jpg",
    "image-slide-2.jpg",
    "image-slide-3.jpg",
    "image-slide-4.jpg",
    "image-slide-5.jpg"
]

const carouselControlEl = document.querySelectorAll(".carousel-control")
const workExamplesEl = document.querySelector(".carousel-image-wrapper")

let array = [1, 2, 3, 4, 5]

function carouselHandler(event) {
    const targetEl = event.currentTarget.id
    
    if (targetEl === "carousel-left" && (event.key === "ArrowLeft" || !event.key)) {
        slide("left")
    } else if (targetEl === "carousel-right" && (event.key === "ArrowRight" || !event.key)) {
        slide("right")
    }
}

function slide(direction) {
    if (direction === "left") {
        array.push(array.shift())
    } else if (direction === "right") {
        array.unshift(array.pop())
    }

    let workElements = array.map(item => {
        return `<img class="" src="./assets/images/image-slide-${item}.jpg" alt=""></img>`
    }).join("")

    workExamplesEl.innerHTML = workElements
    
}

carouselControlEl.forEach(item => {item.addEventListener("click", carouselHandler)})
carouselControlEl.forEach(item => {item.addEventListener("keydown", carouselHandler)})





