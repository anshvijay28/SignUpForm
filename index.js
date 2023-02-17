const createAccountButton = document.querySelector("#create-account");
const initPage = document.querySelector('.initial-page');

createAccountButton.addEventListener("click", e => {
    initPage.style.transform = "translateX(100vw)";
    initPage.style.transition = "2s";
});