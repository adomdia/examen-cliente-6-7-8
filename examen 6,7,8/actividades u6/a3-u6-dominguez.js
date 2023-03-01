class Coche{
    constructor(marca, modelo, color, anio, cilindrada){
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.anio = anio
    }

}

let coche1 = new Coche("Ford", "Ka", "Amarillo", 2011)
let coche2 = new Coche("Ford", "Ka", "Azul", 2010)
let coche3 = new Coche("Ford", "Ka", "Blanco", 2009)
let coche4 = new Coche("Ford", "Ka", "Rojo", 2017)
let coche5 = new Coche("Ford", "Ka", "Negro", 2021)
const frenar2 = document.querySelector("#btn-generar")

frenar2.addEventListener("click", generar_tabla)


function generar_tabla() {
    let body = document.getElementsByTagName("body")[0];

    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let tr = document.createElement("tr")

    let th = document.createElement("th");
    let thText = document.createTextNode("Marca");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Modelo");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Color");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Año fabricación");
    th.appendChild(thText);
    tr.appendChild(th);

    tabla.appendChild(tr);

    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(coche1.marca);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche1.modelo);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche1.color);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche1.anio);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);
    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(coche2.marca);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche2.modelo);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche2.color);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche2.anio);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);
    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(coche3.marca);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche3.modelo);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche3.color);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche3.anio);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);
    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(coche4.marca);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche4.modelo);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche4.color);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche4.anio);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);
    tr = document.createElement("tr");

    td = document.createElement("td");
    tdText = document.createTextNode(coche5.marca);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche5.modelo);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche5.color);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(coche5.anio);
    td.appendChild(tdText);
    tr.appendChild(td);

    tabla.appendChild(tr);

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "1");
  }
