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
// const binance = new Criptomonedas(5, 'Binance', 269);
// const apecoin = new Criptomonedas(6, 'Apecoin', 6);
// const cardano = new Criptomonedas(7, 'Cardano', 1);
// const near = new Criptomonedas(8, 'Near', 4);
// //se le brinda esta informacion al objeto Criptomonedas

// arrayCriptomonedas.push(bitcoin, ethereum, avalanche, solana, binance, apecoin, cardano, near);
// //se envia la info mediante "push" al array creado

// // console.log(arrayCriptomonedas)

// function bienvenida(){
//     alert("Bienvenido a Fo.Cripto")
//     let nombre = prompt("Ingrese su nombre");
//     while(nombre === '' || !isNaN(nombre)){
//         nombre = prompt("Ingrese su nombre");
//     }
//     return nombre
// }

// function elegirCripto(){
//     let cripto;
//     let pregunta = 'Que cripto desea convertir? : '

//     for (let i = 0; i < arrayCriptomonedas.length; i++) {
//         pregunta += '\n'+ arrayCriptomonedas[i].id + '- ' +arrayCriptomonedas[i].nombre;
//     }

//     do{
//         cripto = parseInt(prompt('Hola ' + nombreId + '\n' + pregunta))
//     }while(cripto < 1 || cripto > arrayCriptomonedas.length);

//     const opcion = arrayCriptomonedas.find(e => e.id === cripto)

//     alert('Usted eligio: ' + opcion.nombre + ', su precio en dolares es: u$s' + opcion.precio)

//     return opcion;
// }

// function cambio(objeto) {
//     let otroCambio = false;

//     do{
//         let cantidad = parseFloat(prompt("Introduzca una cantidad de dolares a cambiar"));
//         while(isNaN(cantidad)){
//             cantidad = parseFloat(prompt("Dato incorrecto, introduzca una cantidad de dolarres a cambiar"));
//         }
//         alert("Su monto en " + objeto.nombre + " es: " + (cantidad / objeto.precio));

//         otroCambio = confirm('Desea seguir cambiando?');
//     }while(otroCambio);

//     alert("Gracias por utilizar Fo.Cripto " + nombreId + ", " + "vuelva pronto")
// }



// nombreId = bienvenida();

// let criptoElegida = elegirCripto();
// cambio(criptoElegida);



