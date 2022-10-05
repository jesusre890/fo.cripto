
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
    const resultado = valorIngresado / monedaResultado.precio; //operacion
    pintarResultado(resultado, monedaResultado.abreviatura);
};

const pintarResultado = (resultado, moneda) => {
    const contenedorDiv = document.getElementById('valorResultado')
    contenedorDiv.innerHTML = `
            <div id="valorResultado" class="valorResultado mb-4 text-gray-400"> ${resultado} ${moneda} </div>
    `;
};




// .toFixed(3)
















// const selector2 = document.getElementById('select2');
// const valorIngresado2 = document.getElementById('valorIngresado2')

// const valorResultado_el = document.getElementById('valorResultado');
// const ejecutar_boton = document.getElementById('boton')




// function cambio(valor) {

//     if(typeof valor != 'number') {
//         throw TypeError('Debe ser un numero.')
//     }

// }










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

