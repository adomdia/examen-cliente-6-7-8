let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let p4 = document.querySelector("#p4")
let p5 = document.querySelector("#p5")

let btnP1 = document.querySelector("#btn-p1")
let btnP2 = document.querySelector("#btn-p2")
let btnP3 = document.querySelector("#btn-p3")
let btnP4 = document.querySelector("#btn-p4")
let btnP5 = document.querySelector("#btn-p5")


btnP1.addEventListener("click", () =>{
    p1.classList.toggle("close");
});

btnP2.addEventListener("click", () =>{
    p2.classList.toggle("close");
});

btnP3.addEventListener("click", () =>{
    p3.classList.toggle("close");
});

btnP4.addEventListener("click", () =>{
    p4.classList.toggle("close");
});

btnP5.addEventListener("click", () =>{
    p5.classList.toggle("close");
});
