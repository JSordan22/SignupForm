let button = document.querySelector(".sumbit-btn");
let pass = document.getElementById("pass")
let confPass = document.getElementById("confPass");
let errMsg = document.getElementById("errMsg");

button.addEventListener("click", () => {
    if(pass.value != confPass.value) {
        pass.setCustomValidity(' ');
        confPass.setCustomValidity(' ');
        errMsg.style.display = "block";
    } else {
        pass.setCustomValidity('');
        confPass.setCustomValidity('');
        errMsg.style.display = "none";
    }
});