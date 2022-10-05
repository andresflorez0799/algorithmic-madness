const reto = `Reto: El usuario introducirá dos números enteros (de no más de 6 cifras), uno en cada línea. Tu programa debe mostrar el mayor de ambos números.

Cuidado: Como suele ocurrir en los retos de programación, hay que seguir exactamente las entradas y salidas (mira el ejemplo): 
         NO es un programa interactivo, no debe avisar al usuario con frases como "Introduce un número" o "Dame un número". 
         Sólo debe tomar dos datos numéricos enteros de la entrada estándar, analizarlos y mostrar un resultado que también será un número entero. 
         Tampoco debe responder con nada similar a "Tu resultado es: ", ni comprobar si los números tienen menos de 7 cifras (esa información es para que escojas el tipo de datos adecuado). 
         Del mismo modo, no debe existir ninguna pausa antes ni después de la ejecución del programa.`;

console.log(reto);

let numero_uno,
    numero_dos;

//.. return true if parameter is number
const esNumero = (numero) => typeof numero === 'number' || !isNaN(numero);

const int = (numero) => parseInt(numero);

//.. Repeat while input number is valid
do {
    numero_uno = prompt('');
} while (!esNumero(numero_uno))

//.. Repeat while input number is valid
do {
    numero_dos = prompt('');
} while (!esNumero(numero_dos))

//.. get major number
const numero_mayor = (int(numero_uno) > int(numero_dos) ? numero_uno : numero_dos);

//.. print results
console.log(numero_mayor);
alert(numero_mayor);