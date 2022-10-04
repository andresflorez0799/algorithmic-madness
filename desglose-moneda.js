const description = 
`Algoritmo que calcule el desglose mínimo en billetes y monedas de una cantidad exacta.
Hay billetes de 100000, 50000, 20000, 10000, 5000, 2000 y 1000.
Hay monedas de 500 y 200 y 100.

Por ejemplo: El desglose de 434700 mostrará lo siguiente:
4 billetes de 100000
1 billete de 20000
1 billete de 10000
2 billetes de 2000
1 moneda 500
1 moneda de 200

* No debe permitir valores flotantes`;

console.log(`Problema: ${description}\n` );

const esNumero = (num) => typeof num === 'number' && !isNaN(num);

const moduloDesgloseBilletes = (cantidad, denominacion) => cantidad % denominacion;

const desgloseDinero = (cantidad) => {
    if(cantidad <= 0 || esNumero(cantidad))
        return `La cantidad '${cantidad}' no es valida!`;

    const denominacionesDisponibles = [ 100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    const denominacionMoneda = [500, 200, 100];

    let stringDesglose = '';

    for (let x = 0; x < denominacionesDisponibles.length; x++){ 
        let denomincionActual = denominacionesDisponibles[x];
        if(cantidad >= denomincionActual){
            let residuo = moduloDesgloseBilletes(cantidad, denomincionActual);
            let cnt = parseInt(cantidad / denomincionActual);
            if(residuo > 0 || (residuo == 0 && cnt > 0)) {
                stringDesglose += `${cnt} ${(denominacionMoneda.indexOf(denomincionActual) >=0 ? 'Monedas' : 'Billetes') } de ${denomincionActual}\n`;
            }
            cantidad = residuo;
        }
    }
    if(cantidad > 0)
        stringDesglose += `Valor no clasificado : ${cantidad}`;
    return stringDesglose;
}

const cantidad = '43470';

const billetes = desgloseDinero(cantidad);
console.log("\n********************************************************");
console.log(`\Desglose para la cantidad ${cantidad}\n`);
console.log(billetes);
