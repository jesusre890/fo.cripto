function bienvenida(){
    alert("Bienvenido a Fo.Cripto")
    let nombre = prompt("Ingrese su nombre");
    while(nombre === '' || typeof(nombre) !== 'string'){
        nombre = prompt("Ingrese su nombre");
    }
}

function elegirCripto(){
    let cripto;

    do{
        cripto = prompt("Que cripto desea convertir? : \n1) Bitcoin\n2) Ethereum\n3) Avalanche\n4) Solana");
        console.log(typeof(cripto))
    }while(cripto < 1 || cripto > 4);

    switch(cripto){
        case "1":
            return "Bitcoin";
        case "2":
            return "Ethereum";
        case "3":
            return "Avalanche";
        case "4":
            return "Solana";
    }
}

function monedaEnDolar(moneda) {
    if(moneda === 'Bitcoin'){
        return 22300;
    }else if(moneda === 'Ethereum'){
        return 1700;
    }else if(moneda === 'Avalanche'){
        return 21;
    }else if(moneda === 'Solana'){
        return 37;
    }
}

function convertir (moneda, valor){


    alert("Usted eligio : " + moneda + ".\nEl precio en dolar es u$s" + valor);
    let cantidad = parseFloat(prompt("Introduzca una cantidad de dolares a cambiar"))
    alert("Su monto en " + moneda + " es: " + (cantidad / valor));

    return cantidad / valor;
}



bienvenida();

let cripto = elegirCripto();
let monedaDolar = monedaEnDolar(cripto);
convertir(cripto, monedaDolar);


