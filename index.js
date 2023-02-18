const bar = document.querySelector("#sliding")
const nextButtons = document.querySelectorAll(".next");

const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const required = [[fName, lName], [email, phone], [username], [password, confirmPassword]];

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

nextButtons.forEach(nextButton => {
    nextButton.addEventListener("click", e => {
        console.log(pages);
        if (pages === -1 || canMoveOn(pages)) {
            let value = (-100 * pages) - 200; 
            bar.style.transform = "translateX(" + value.toString() +  "vw)";
            bar.style.transition = "2s";
            pages += 1;
        }
    })
});

showPassword.addEventListener("click", () => {
    let type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
});

showConfirmPassword.addEventListener("click", () => {
    let type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);
});