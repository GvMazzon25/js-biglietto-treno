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

