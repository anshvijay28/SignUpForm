const bar = document.querySelector("#sliding")
const nextButtons = document.querySelectorAll(".next");
const no = document.querySelector("#no-button");

const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");


let userFName = document.querySelector("#userFName"); 
let userLName = document.querySelector("#userLName");
let userEmail = document.querySelector("#userEmail");
let userPhone = document.querySelector("#userPhone");
let userUsername = document.querySelector("#userUsername");
let userPassword = document.querySelector("#userPassword");

const required = [[fName, lName], [email, phone], [username], [password, confirmPassword]];
const userInput = [[userFName, userLName], [userEmail, userPhone], [userUsername], [userPassword]];

const showPassword = document.querySelector("#show-password");
const showConfirmPassword = document.querySelector("#show-confirm-password");


let pages = -1;

function canMoveOn(page) {
    if (page === 3) {
        return ((password.value === confirmPassword.value) 
        && (password.checkValidity() && confirmPassword.checkValidity()))
    }

    for (let i = 0; i < required[page].length; i++) {
        if (!required[page][i].checkValidity()) {
            return false;
        }
    }
    return true;
}

function getData(page) {
    if (page === 3) {
        userPassword.setAttribute("placeholder", password.value);
    } else {
        required[page].forEach((element, i) => userInput[page][i].setAttribute("placeholder", element.value));
    }
}

nextButtons.forEach(nextButton => {
    if (nextButton.id === "no-button") {

    }
    nextButton.addEventListener("click", e => {
        if (pages === -1 || pages >= 3 || canMoveOn(pages) ) {
            let value = (-100 * pages) - 200; 
            bar.style.transform = "translateX(" + value.toString() +  "vw)";
            bar.style.transition = "2s";
            if (pages !== -1) {
                getData(pages);
            }
            pages += 1;
        }
    })
});

no.addEventListener("click", e => {
    pages = 0;
    bar.style.transform = "translateX(-100vw)";
    bar.style.transition = "2s";
});

showPassword.addEventListener("click", () => {
    let type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
});

showConfirmPassword.addEventListener("click", () => {
    let type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);
});