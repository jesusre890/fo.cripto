
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
    const resultado = (valorIngresado / monedaResultado.precio); //operacion
    pintarResultado(resultado, monedaResultado.abreviatura);
};

const pintarResultado = (resultado, moneda) => {
    const contenedorDiv = document.getElementById('valorResultado')
    contenedorDiv.innerHTML = `
            <div id="valorResultado" class="valorResultado mb-4 text-gray-400"> ${resultado.toFixed(2)} ${moneda} </div>
    `;

//Guardamos el resultado en el localStorage
    const guardar = {resultado, moneda}
    // console.log(guardar)
    guardarResultadoStorage(guardar);
};



//Aplicando localStorage


//primero lo guardo
const guardarResultadoStorage = (resultado) => {
    localStorage.setItem('resultado', JSON.stringify(resultado));
}

//luego lo obtengo
const tomarResultadoStorage = () => {
    const resultadoStorage = JSON.parse(localStorage.getItem('resultado'));
    return resultadoStorage
};

//lo muestro al actualizar
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('resultado')) {
        coin = tomarResultadoStorage();
        pintarResultado(coin.resultado, coin.moneda)
    }
})








// .toFixed(3)


