const workExamples = [
    "image-slide-1.jpg",
    "image-slide-2.jpg",
    "image-slide-3.jpg",
    "image-slide-4.jpg",
    "image-slide-5.jpg"
]

let count = 2

const workExamplesEl = document.querySelector(".carousel-image-wrapper")
const examplesAmount = workExamples.length

let test = document.querySelectorAll(".carousel-image-wrapper img")



document.querySelector("#carousel-left").addEventListener('click', () => {
    if (count === 1) {
        count = examplesAmount
    } else count--
    
    workExamplesEl.innerHTML = `
        <img class="" src="./assets/images/image-slide-${count-1 === 0 ? examplesAmount : count-1}.jpg" alt="">
        <img class="" src="./assets/images/image-slide-${count}.jpg" alt="">
        <img class="" src="./assets/images/image-slide-${count+1 > examplesAmount ? examplesAmount-1 : count+1}.jpg" alt="">
    `
})
document.querySelector("#carousel-right").addEventListener('click', () => {
    if (count === examplesAmount) {
        count = 1
    } else count++
    
    workExamplesEl.innerHTML = `
        <img class="" src="./assets/images/image-slide-${count-1 === 0 ? examplesAmount : count - 1}.jpg" alt="">
        <img class="" src="./assets/images/image-slide-${count}.jpg" alt="">
        <img class="" src="./assets/images/image-slide-${count+1 > examplesAmount ? examplesAmount - 1 : count+1}.jpg" alt="">
    `
})