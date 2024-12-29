let button = document.querySelector(".sumbit-btn");
let pass = document.getElementById("pass")
let confPass = document.getElementById("confPass");
let errMsg = document.getElementById("errMsg");
let background = document.querySelector(".background");
let root = document.documentElement;

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

let objs = {
    bronze: { url: "Images/bronze.gif", color: "#937344"},
    brown: { url: "Images/brown.gif", color: "#794633"},
    green: { url: "Images/green.gif", color: "#697973"},
    purple: { url: "Images/purple.gif", color: "#7A74B0"}
}

function selectTheme() {
    let rndm = Math.floor(Math.random() * 4);
    let keys = Object.keys(objs);
    let rndmKey = objs[keys[rndm]]

    background.style.backgroundImage = `url(${rndmKey.url})`;
    root.style.setProperty('--curr-color', rndmKey.color);;

}

window.addEventListener("load", selectTheme());