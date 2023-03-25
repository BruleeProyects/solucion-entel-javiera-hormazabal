
//Select marca
fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {

    let selectMarca = document.getElementById("marca");

    localStorage.setItem("marcas", JSON.stringify(jsondata));

    //Select placeholder
    selectMarca.innerHTML = `<option disabled selected>Selecciona una opción</option>`;

    //Llenado de select marcas
    jsondata.map(dato => {
      let marca = `<option value=${dato.marca}>${dato.marca}</option>`;
      selectMarca.innerHTML += marca;
    });
  });


//Filtrado de modelos segun marca.
function MostrarModelo() {
  let marca = document.getElementById("marca").value;
  let selectModelo = document.getElementById("modelo");

  const datosMarcas = JSON.parse(localStorage.getItem("marcas"));
  const modelos = datosMarcas.filter(dato => dato.marca === marca);

  //Select placeholder
  selectModelo.innerHTML = `<option disabled selected>Selecciona una opción</option>`;

  modelos[0].modelo.map(dato => {
    let modelo = `<option value=${dato}>${dato}</option>`;
    selectModelo.innerHTML += modelo;
  });
};

//Guardado y validación de datos
const form = document.querySelector('form');
const enviarBtn = document.querySelector('#enviar');

enviarBtn.addEventListener('click', function (event) {
  event.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let rut = document.getElementById('rut').value;
  let patente = document.getElementById('patente').value;
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let color = document.getElementById('color').value

  const datosVehiculo = {
    nombre,
    rut,
    patente,
    marca,
    modelo,
    color
  };

  //validaciones.
  if ([nombre, rut, patente, marca, modelo, color].includes("")) {
    return window.alert("Hay campos vacios");
  } else {
    //Si hay datos en LS
    if (localStorage.getItem('datosVehiculo')) {

      const datosGuardados = JSON.parse(localStorage.getItem("datosVehiculo"));

      const arrVehiculo = [...datosGuardados, datosVehiculo];

      localStorage.setItem("datosVehiculo", JSON.stringify(arrVehiculo))
    } else {
      // Si no hay datos en LS
      const nuevoVehiculo = [datosVehiculo]

      localStorage.setItem("datosVehiculo", JSON.stringify(nuevoVehiculo))

      window.alert("Guardado exitoso");
    }
    
    form.reset();
  }
});

