let sun = document.getElementById("sun");
let awan = document.getElementById("awan");
let land = document.getElementById("land");
let gunung = document.getElementById("gunung");
let belakang = document.getElementById("belakang");
let depan = document.getElementById("depan");
let batang = document.getElementById("batang");
let rumah = document.getElementById("rumah");
let grass = document.getElementById("grass");

let good = document.getElementById("good");
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    console.log(value);

    sun.style.left = value * 2.5 + "px"
    awan.style.top = value * 0.4 + "px"
    gunung.style.top = value * 0.5 + "px"
    belakang.style.top = value * 0.5 + "px"
    depan.style.top = value * 0.5 + "px"
    batang.style.top = value * 0.5 + "px"
    rumah.style.top = value * 0.5 + "px"
    land.style.top = value * 0.5 + "px"
    grass.style.top = value * 0.2 + "px"
    good.style.marginTop = value * 1.5 + "px"
    
})
