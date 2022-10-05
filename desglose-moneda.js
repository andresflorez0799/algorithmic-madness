const description = 
`Algoritmo que calcule el desglose mínimo en billetes y monedas de una cantidad exacta.
Hay billetes de 100000, 50000, 20000, 10000, 5000, 2000 y 1000 y hay monedas de 500 y 200 y 100. Por ejemplo: El desglose de 434700 mostrará lo siguiente:

4 billetes de 100000
1 billete de 20000
1 billete de 10000
2 billetes de 2000
1 moneda 500
1 moneda de 200

* No debe permitir valores flotantes`;

console.log(`Problema: ${description}\n` );

/**
 * Valores denominacion de billetes 
 */
const denominacionesBilletes = [ 100000, 50000, 20000, 10000, 5000, 2000, 1000];

/**
 * Valores denominacion de monedas
 */
const denominacionMoneda = [500, 200, 100, 50];

/**
 * Valida si el valor ingresado por parametro es una representacion de un número
 * @param {*} numero 
 * @returns true si el valor es una representacion de un numero
 */
const esNumero = (numero) => typeof numero === 'number' && !isNaN(numero);

/**
 * Obtiene el modulo de un numero al ser operado por un divisor dado por parametro
 * @param {*} numero 
 * @param {*} divisor 
 * @returns modulo de la cantidad {numero}, NaN si el divisor es cero
 */
const obtenerModulo = (numero, divisor) => numero - divisor * parseInt(numero/divisor);

/**
 * Analiza la cantidad ingresada por parametro y retorna por consola el desglose en billetes y monedas minimo
 * @param {*} cantidad 
 * @returns imprime por consola el desglose de billetes y monedas
 */
const desgloseDineroForma1 = (cantidad) => {
    if(cantidad <= 0 || esNumero(cantidad)) return `La cantidad '${cantidad}' no es valida!`;

    const denominacionesDisponibles = denominacionesBilletes.concat(denominacionMoneda);

    let stringDesglose = '';

    for (let x = 0; x < denominacionesDisponibles.length; x++){ 
        let denomincionActual = denominacionesDisponibles[x];
        if(cantidad >= denomincionActual){
            let residuo = obtenerModulo(cantidad, denomincionActual);
            let cnt = parseInt(cantidad / denomincionActual);
            if(residuo > 0 || (residuo == 0 && cnt > 0)) {
                stringDesglose += `${cnt} ${(denominacionMoneda.indexOf(denomincionActual) >=0 
                    ? 'Monedas' 
                    : 'Billetes') } de ${denomincionActual}\n`;
            }
            cantidad = residuo;
        }
    } 
    return stringDesglose += cantidad > 0 ? `Valor no clasificado : ${cantidad}` : '';
}



/** Validar pruebas */
const cantidad = '43470';

console.log(`\Desglose para la cantidad ${cantidad}\n`);

const billetes = desgloseDineroForma1(cantidad);

console.log(billetes);
