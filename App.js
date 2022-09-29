const contenedor = document.getElementById('cotizador-contenedor');

const div = document.createElement('div');
div.classList.add('cotizador-int');

div.innerHTML += `
    <form class="formulario bg-[#2a303f] p-12 rounded-xl text-center">
        <p class="text-white text-3xl"> Cotizador </p>
            <div class="lista flex justify-between items-center m-3 ">
                <div class="divisa1">
                    <div class="text-white flex w-16 h-12 items-center justify-center rounded-sm">
                        <option id='USD' value="USD">USD</option>
                    </div>
                </div>
                <div class="icono cursor-pointer mt-30px to-white"><i class="fas fa-exchange-alt"></i></div>
                <div class="divisa2">
                    <div class="seleccion2 flex w-16 h-10 items-center justify-center rounded-sm">
                        <select class="w-auto">
                            <option id='BTC' value="BTC">BTC</option>
                            <option id='ETH' value="ETH">ETH</option>
                            <option id='AVA' value="AVA">AVA</option>
                            <option id='SOL' value="SOL">SOL</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="monto text-white">
                <p class="mb-3 text-lg ">Ingrese un monto</p>
                <input id='valorIngresado' class=" text-black text-center h-8 mb-5 border-l-slate-300" type="text" value="0">
            </div>
        <div id="valorResultado" class="valorResultado mb-4 text-white"> valorResultado </div>
        <button id=boton class="text-slate-900 text-lg bg-orange-400"> Resultado </button>
    </form>
`;

contenedor.appendChild(div);

console.log(document.getElementById('valorIngresado'));

const boton = document.getElementById('boton')
boton.addEventListener('click', alerta)

function alerta(e){
    e.preventDefault()
    let valorIngresado = document.getElementById('valorIngresado')
    alert(valorIngresado.value)
}





// class Criptomonedas {
//     constructor (id, nombre, precio) {
//         this.id = Number(id);
//         this.nombre = nombre;
//         this.precio = Number(precio);
//     }
// }

// const arrayCriptomonedas = []; //recopilo en este array toda la informacion

// const bitcoin = new Criptomonedas(1, 'Bitcoin', 20000);
// const ethereum = new Criptomonedas(2, 'Ethereum', 1400);
// const avalanche = new Criptomonedas(3, 'Avalanche', 17);
// const solana = new Criptomonedas(4, 'Solana', 33);
// //se le brinda esta informacion al objeto Criptomonedas

// arrayCriptomonedas.push(bitcoin, ethereum, avalanche, solana);

// function cotizador() {
//     let valorCotizar = parseInt(document.getElementById('valorIngresado').value);
//     let resultado = 0;

//     if(document.getElementById('BTC')){
//         resultado = valorCotizar / document.getElementById('BTC')
//     }else if(document.getElementById('ETH')){
//         resultado = valorCotizar / document.getElementById('ETH')
//     }else if(document.getElementById('AVA')){
//         resultado = valorCotizar / document.getElementById('AVA')
//     }else if(document.getElementById('SOL')){
//         resultado = valorCotizar / document.getElementById('SOL')
//     }else{
//         alert('Introduzca la cantidad de dolares deseada')
//     }
// }


// cotizador()

