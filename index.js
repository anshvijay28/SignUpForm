const bar = document.querySelector("#sliding")
const nextButtons = document.querySelectorAll(".next");
const initPage = document.querySelector('.initial-page');
const namePage = document.querySelector('.name-page');


nextButtons.forEach(nextButton => {
    nextButton.addEventListener("click", e => {
        bar.style.transform = "translateX(-100vw)";
        bar.style.transition = "2s";
    })
})