const contenedorSelect2 = document.getElementById("seleccion2"); //Llamo al del html desde el js
const select2 = document.createElement("select"); // le creo un elemento "select."
select2.setAttribute("id", "select2");


// creo array vacio para que reciba la info de listaApi"
let mercados = [];

const obtenerCriptos = async () => {
  try {
    const response = await fetch(
      "https://634df628f34e1ed82680f393.mockapi.io/coins"
    );
    const listaApi = await response.json();
    mercados = listaApi
    listaApi.forEach((mercado) => {  // le coloco un forHeach para que recorra todo el array de objetos
      select2.classList.add("opcionCripto1"); // le asigno una clase al elemento select creado
      select2.innerHTML += `
        <option id=${mercado.abreviatura} value=${mercado.abreviatura} > ${mercado.abreviatura} </option>
        `; //lo pinto al html con los atributos de los objetos
    });
    return contenedorSelect2.appendChild(select2); // Uno lo realizado al elemento creado
  } catch (error) {
    console.log(error);
  }
};

//selector 2

const formulario = document.getElementById("form"); //Llamo al del html desde el js
formulario.addEventListener("submit", (e) => {
  // le creo un evento a formulario para que se escuche al interactuar
  e.preventDefault(); // para que no se actualice el navegador al generarse el evento
  const monedas = document.getElementById("select2"); //Llamo al del html desde el js

  const form = new FormData(formulario); //le agrego un nuevo valor a form
  const valorIngresado = form.get("valorIngresado2"); //tomo ese nuevo valor y lo pongo en una variables


// VALIDACION

  isNaN(valorIngresado)
    ? Swal.fire({ icon: "error", title: "Error, Debe ingresar un numero" })
    : convertirValor(valorIngresado, monedas.value); //OPERADOR TERNARIO, validacion
});


// OPERACION

const convertirValor = (valorIngresado, moneda) => {
  //declaro variable y realizo la operacion
  const monedaResultado = mercados.find(
    (mercado) => mercado.abreviatura === moneda
  ); //aplico find al array de objetos para que busque lo seleccionado
  const resultado = valorIngresado / monedaResultado.precio; //operacion
  pintarResultado(resultado, monedaResultado.abreviatura); // coloco los parametros a la variable creada abajo
};

const pintarResultado = (resultado, moneda) => {
  //declaro las variables con sus parametros y lo pinto en el html
  const contenedorDiv = document.getElementById("valorResultado");
  contenedorDiv.innerHTML = `
            <div id="valorResultado" class="valorResultado mb-4 text-gray-400"> ${resultado.toFixed(2)} ${moneda}</div>
    `;

  //Guardamos el resultado en el localStorage
  const guardar = { resultado, moneda };
  guardarResultadoStorage(guardar);
};

//Aplicando localStorage

//primero lo guardo
const guardarResultadoStorage = (resultado) => {
  localStorage.setItem("resultado", JSON.stringify(resultado));
};

//luego lo obtengo
const tomarResultadoStorage = () => {
  const resultadoStorage = JSON.parse(localStorage.getItem("resultado"));
  return resultadoStorage;
};

//lo muestro al actualizar
document.addEventListener("DOMContentLoaded", () => {
  obtenerCriptos();
  if (localStorage.getItem("resultado")) {
    coin = tomarResultadoStorage();
    pintarResultado(coin.resultado, coin.moneda);
  }
});



Swal.fire({
  //creo el mensaje de bienvenida
  title: "Bienvenido a Fo.Cripto!",
});
