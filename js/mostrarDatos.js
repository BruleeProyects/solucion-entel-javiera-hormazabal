//Datos desde LS
const datosVehiculos = JSON.parse(localStorage.getItem("datosVehiculo"));

let tableBody = document.getElementById("tablaVehiculos");
let divRegistros = document.getElementById("registros");

//Si no hay datos oculta thead
document.getElementById('tableHead').style.visibility = "collapse";


if (localStorage.getItem('datosVehiculo')) {

    //Oculta el mensaje de "no hay datos"
    document.getElementById('sinDatos').style.display = "none";
    document.getElementById('tableHead').style.visibility = "visible";

    divRegistros.innerHTML = `<span>Mostrando registros del 1 al 
    ${datosVehiculos.length > 10 ? "10" : datosVehiculos.length} de un total de 
    ${datosVehiculos.length} registros.</span>`;

    for (let i = 0; i < 10; i++) {
        let nombre = `<td>${datosVehiculos[i].nombre}</td>`;
        let rut = `<td>${datosVehiculos[i].rut}</td>`;
        let patente = `<td>${datosVehiculos[i].patente}</td>`;
        let marca = `<td>${datosVehiculos[i].marca}</td>`;
        let modelo = `<td>${datosVehiculos[i].modelo}</td>`;
        let color = `<td>${datosVehiculos[i].color}</td>`;
        let eliminar = `<td><img src="images/delete.png" alt="delete" class="eliminar"/></td>`

        tableBody.innerHTML += `<tr>${nombre + rut + patente + marca + modelo + color + eliminar}</tr>`
    };
}







