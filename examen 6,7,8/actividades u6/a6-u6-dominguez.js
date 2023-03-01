let div1 = document.querySelector("#div-1")
let div2 = document.querySelector("#div-2")

let btnEquipo = document.querySelector("#btn-equipo")
let btnEdad = document.querySelector("#btn-edad")

btnEquipo.addEventListener("click", () =>{
    div1.classList.toggle("oculto");
});

btnEdad.addEventListener("click", () =>{
    div2.classList.toggle("oculto");
});
