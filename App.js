// const { default: Swal } = require("sweetalert2");

const contenedorSelect2 = document.getElementById("seleccion2"); //Llamo al select del html desde el js
const select2 = document.createElement("select"); // le creo un elemento "select."
const nombre = document.getElementById('nombreLogin'); //Llamo al nombre logeado del html desde el js
const botonEntrar = document.getElementById('formLogin'); //Llamo al formulario del login del html desde el js
const botonSalir = document.getElementById('salirBtn');  //Llamo al boton salir del html desde el js
let usuarioLogin = document.getElementById('usuarioLogin'); //Llamo al login del usuario del html desde el js
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
  pintarResultado(resultado, monedaResultado); // coloco los parametros a la variable creada abajo

};

const pintarResultado = (resultado, moneda) => {
  //declaro las variables con sus parametros y lo pinto en el html
  const contenedorDiv = document.getElementById("valorResultado");
  contenedorDiv.innerHTML = `
            <div class="valorResultado mb-4 text-gray-400 flex justify-center items-center"> ${resultado.toFixed(2)} ${moneda.abreviatura} <img class="w-8 m-2" src=${moneda.logo}></img></div>
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

//luego obtengo el resultado
const tomarResultadoStorage = () => {
  const resultadoStorage = JSON.parse(localStorage.getItem("resultado"));
  return resultadoStorage;
};

// obtengo el login
const nombreLogin = () => {
  const nombreStorage = JSON.parse(localStorage.getItem('user'));
  return nombreStorage;
}

// obtengo la funcion salir de sesion
const salirSesion = () => {
  const salirStorage = JSON.parse(localStorage.getItem('salir'));
  return salirStorage;
}

//lo muestro al actualizar
document.addEventListener("DOMContentLoaded", () => {
  obtenerCriptos();
  if (localStorage.getItem("resultado")) {
    coin = tomarResultadoStorage();
    pintarResultado(coin.resultado, coin.moneda);
  }
  if (localStorage.getItem("user")) {
    const divAOcultar = document.getElementById('bienvenidaCartel');
    const divAMostrar = document.getElementById('cotiz');
    divAOcultar.classList.add('hidden');
    divAMostrar.classList.remove('hidden');
    botonSalir.classList.remove('hidden');
    usuarioLogin.value = nombreLogin()
    nombre.innerText = 'Cuenta: ' + usuarioLogin.value;
    botonSalir.innerText = 'Salir'
  }
});



//generando funcionalidad al boton de registro una vez ingresados los datos
botonEntrar.addEventListener('submit',(e)=>{
  e.preventDefault(usuarioLogin);

  const divAOcultar = document.getElementById('bienvenidaCartel');
  const divAMostrar = document.getElementById('cotiz');

  divAOcultar.classList.add('hidden');
  divAMostrar.classList.remove('hidden');
  botonSalir.classList.remove('hidden');
  nombre.innerText = 'Cuenta: ' + usuarioLogin.value;
  botonSalir.innerText = 'Salir'


  Swal.fire({
  //creo el mensaje de bienvenida con nombre loggeado
    title: "Bienvenido " + usuarioLogin.value +" a Fo.Cripto!",
  });

  localStorage.setItem('user', JSON.stringify(usuarioLogin.value))
})


// boton para vaciar storage
botonSalir.addEventListener('click', ()=>{
  localStorage.clear()
  location.reload()
})



