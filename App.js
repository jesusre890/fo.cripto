
// const contenedor = document.getElementById('cotizador-contenedor');

// const div = document.createElement('div');
// div.classList.add('cotizador-int');

// div.innerHTML += `
//     <form class="formulario bg-[#2a303f] p-12 rounded-xl text-center">
//         <p class="text-white text-3xl"> Cotizador </p>
//             <div class="lista flex justify-around items-center m-3 ">
//                 <div class="divisa1">
//                     <div id="seleccion1" class="seleccion1 flex  h-10 items-center justify-center rounded-sm">
//                         <p class="text-white">USDT = 1 USD</p>
//                     </div>
//                 </div>
//                 <div class="icono cursor-pointer mt-30px to-white"><i class="fas fa-exchange-alt"></i></div>
//                 <div class="divisa2">
//                     <div id="seleccion2" class="seleccion2 flex w-16 h-10 items-center justify-center rounded-sm">

//                     </div>
//                 </div>
//             </div>
//             <div class="flex justify-around">
//                 <div id="contenedorInput" class="monto text-white">
//                     <input id='valorIngresado2' type="text" class=" text-black text-center h-8 mb-5 border-l-slate-300" placeholder="0">
//                 </div>
//             </div>
//         <div id="valorResultado" class="flex justify-around">

//         </div>
//         <button id=boton class="text-slate-900 text-lg bg-orange-400"> Convertir </button>
//     </form>
// `;

// contenedor.appendChild(div);





// const boton = document.getElementById('boton');
// boton.addEventListener('click', alerta);


// // resultado

// function alerta(e){
//     e.preventDefault()
//     let valorIngresado = document.getElementById('valorIngresado')
//     const valorResultado = document.getElementById('valorResultado')
//     valorResultado.innerHTML = `${valorIngresado.value}`
// }

//selector 2
const contenedorSelect2 = document.getElementById('seleccion2')

const select2 = document.createElement('select');
        select2.setAttribute("id", "select2") //ID agregado

mercados.forEach(mercado => {
    select2.classList.add('opcionCripto1');

    select2.innerHTML += `
            <option id=${mercado.abreviatura} value=${mercado.abreviatura}>${mercado.abreviatura}</option>
    `;

})
contenedorSelect2.appendChild(select2);

const formulario = document.getElementById('form');
const monedas = document.getElementById('select2');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(formulario);
    const valorIngresado = form.get('valorIngresado2');
    convertirValor(valorIngresado, monedas.value);
});

const convertirValor = (valorIngresado, moneda) => {
    const monedaResultado = mercados.find(mercado => mercado.abreviatura === moneda);
    const resultado = valorIngresado / monedaResultado.precio;
    pintarResultado(resultado);
};

const pintarResultado = (resultado) => {
    const contenedorDiv = document.getElementById('valorResultado')
    const divResultado = document.createElement('div');

    divResultado.innerHTML += `
            <div id="valorResultado" class="valorResultado mb-4 text-gray-400">Valor: ${resultado}</div>
    `;

    contenedorDiv.appendChild(divResultado);
};




//conversion

// const contenedorDiv = document.getElementById('valorResultado')

// const divResultado = document.createElement('div');

// mercados.forEach(mercado => {
//     divResultado.classList.add('valorResultado');

//     divResultado.innerHTML += `
//             <div id="valorResultado" class="valorResultado mb-4 text-gray-400"> valor 1 </div>
//     `;

// })
// contenedorDiv.appendChild(divResultado);














// const selector2 = document.getElementById('select2');
// const valorIngresado2 = document.getElementById('valorIngresado2')

// const valorResultado_el = document.getElementById('valorResultado');
// const ejecutar_boton = document.getElementById('boton')




function cambio(valor) {

    if(typeof valor != 'number') {
        throw TypeError('Debe ser un numero.')
    }

}










//     do{
//         let cantidad = parseFloat(prompt("Introduzca una cantidad de dolares a cambiar"));
//         while(isNaN(cantidad)){
//             cantidad = parseFloat(prompt("Dato incorrecto, introduzca una cantidad de dolarres a cambiar"));
//         }
//         alert("Su monto en " + objeto.nombre + " es: " + (cantidad / objeto.precio));

//         otroCambio = confirm('Desea seguir cambiando?');
//     }while(otroCambio);










// selector2.addEventListener('change', calculate);
// valorIngresado2.addEventListener('input', calculate);

