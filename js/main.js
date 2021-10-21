//Numero di chilometri
const numberKm = parseInt( prompt('Inserisci il numero di km del tuo viaggio') );
console.log(numberKm);

//Verifica km
if (isNaN(numberKm)){
    alert('Errore, ricarica la pagina');
}
//Età passeggero
const age1 = parseInt( prompt('Inserisci la tua età') );
console.log(age1);

//Verifica km
if (isNaN(age1) || (age1 > 120)){
    alert('Errore, ricarica la pagina');
}

/**Calcolo prezzo del viaggio
 *   1-Ogni km costa 0,21€
 *   2-Sconto 20% per i minorenni
 *   3-Sconto 40% per gli over 65
 */

//Prezzo Viaggio
let price1 = (numberKm) * (0.21);
console.log(price1 + '€');

//Sconto minorenni
if (age1 < 18){
    price1 -= (price1 * 20) / 100;
    console.log(price1)
}

//Sconto maggiorenni
if (age1 > 65){
    price1 -= (price1 * 40) / 100;
    console.log(price1)
}



//Calcolo prezzo umano
let price2 = price1;
let price = price2.toFixed(2)
console.log(price)

//Visualizzazione Prezzo
document.getElementById('price') .innerHTML = `Il prezzo del tuo biglietto è: ${price}`;

