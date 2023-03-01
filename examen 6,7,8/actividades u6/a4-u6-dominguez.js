const inputNombre1 = document.querySelector("#input-nombre1")
const inputNombre2 = document.querySelector("#input-nombre2")
const inputNombre3 = document.querySelector("#input-nombre3")
const inputNombre4 = document.querySelector("#input-nombre4")
const inputNombre5 = document.querySelector("#input-nombre5")
const inputNota11 = document.querySelector("#input-nota11")
const inputNota12 = document.querySelector("#input-nota12")
const inputNota13 = document.querySelector("#input-nota13")
const inputNota21 = document.querySelector("#input-nota21")
const inputNota22 = document.querySelector("#input-nota22")
const inputNota23 = document.querySelector("#input-nota23")
const inputNota31 = document.querySelector("#input-nota31")
const inputNota32 = document.querySelector("#input-nota32")
const inputNota33 = document.querySelector("#input-nota33")
const inputNota41 = document.querySelector("#input-nota41")
const inputNota42 = document.querySelector("#input-nota42")
const inputNota43 = document.querySelector("#input-nota43")
const inputNota51 = document.querySelector("#input-nota51")
const inputNota52 = document.querySelector("#input-nota52")
const inputNota53 = document.querySelector("#input-nota53")
const resNombre1 = document.querySelector("#res-nombre1")
const resNombre2 = document.querySelector("#res-nombre2")
const resNombre3 = document.querySelector("#res-nombre3")
const resNombre4 = document.querySelector("#res-nombre4")
const resNombre5 = document.querySelector("#res-nombre5")
const resNota11 = document.querySelector("#res-nota11")
const resNota12 = document.querySelector("#res-nota12")
const resNota13 = document.querySelector("#res-nota13")
const resNota21 = document.querySelector("#res-nota21")
const resNota22 = document.querySelector("#res-nota22")
const resNota23 = document.querySelector("#res-nota23")
const resNota31 = document.querySelector("#res-nota31")
const resNota32 = document.querySelector("#res-nota32")
const resNota33 = document.querySelector("#res-nota33")
const resNota41 = document.querySelector("#res-nota41")
const resNota42 = document.querySelector("#res-nota42")
const resNota43 = document.querySelector("#res-nota43")
const resNota51 = document.querySelector("#res-nota51")
const resNota52 = document.querySelector("#res-nota52")
const resNota53 = document.querySelector("#res-nota53")
const botonMostrar = document.querySelector("#boton-mostrar")

botonMostrar.addEventListener('click', mostrar)

function mostrar(){

    let notas = []
    let alumno1 = []
    let alumno2 = []
    let alumno3 = []
    let alumno4 = []
    let alumno5 = []

    nombre1 = inputNombre1.value
    nombre2 = inputNombre2.value
    nombre3 = inputNombre3.value
    nombre4 = inputNombre4.value
    nombre5 = inputNombre5.value
    nota11 = inputNota11.value
    nota12 = inputNota12.value
    nota13 = inputNota13.value
    nota21 = inputNota21.value
    nota22 = inputNota22.value
    nota23 = inputNota23.value
    nota31 = inputNota31.value
    nota32 = inputNota32.value
    nota33 = inputNota33.value
    nota41 = inputNota41.value
    nota42 = inputNota42.value
    nota43 = inputNota43.value
    nota51 = inputNota51.value
    nota52 = inputNota52.value
    nota53 = inputNota53.value

    alumno1.push(nombre1)
    alumno1.push(comprobar(nota11))
    alumno1.push(comprobar(nota12))
    alumno1.push(comprobar(nota13))
    alumno2.push(nombre2)
    alumno2.push(comprobar(nota21))
    alumno2.push(comprobar(nota22))
    alumno2.push(comprobar(nota23))
    alumno3.push(nombre3)
    alumno3.push(comprobar(nota31))
    alumno3.push(comprobar(nota32))
    alumno3.push(comprobar(nota33))
    alumno4.push(nombre4)
    alumno4.push(comprobar(nota41))
    alumno4.push(comprobar(nota42))
    alumno4.push(comprobar(nota43))
    alumno5.push(nombre5)
    alumno5.push(comprobar(nota51))
    alumno5.push(comprobar(nota52))
    alumno5.push(comprobar(nota53))

    notas.push(alumno1)
    notas.push(alumno2)
    notas.push(alumno3)
    notas.push(alumno4)
    notas.push(alumno5)

    let body = document.getElementsByTagName("body")[0];

    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let tr = document.createElement("tr")

    let th = document.createElement("th");
    let thText = document.createTextNode("Nombre");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Nota 1");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Nota 2");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Nota 3");
    th.appendChild(thText);
    tr.appendChild(th);

    tabla.appendChild(tr);

    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(notas[0][0]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[0][1]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[0][2]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[0][3]);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);
    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(notas[1][0]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[1][1]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[1][2]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[1][3]);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);
    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(notas[2][0]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[2][1]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[2][2]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[2][3]);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);
    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(notas[3][0]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[3][1]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[3][2]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[3][3]);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);
    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(notas[4][0]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[4][1]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[4][2]);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(notas[4][3]);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "1");

}

function comprobar(valor){
    mensaje = "Error: El valor introducido no es correcto"
    if(parseInt(valor) > 10 || parseInt(valor) < 0){
        return mensaje
    } else {
        return valor
    }
}
