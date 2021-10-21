//Numero di chilometri
const numberKm = parseInt( prompt('Inserisci il numero di km del tuo viaggio') );

//Verifica km
if (isNaN(numberKm)){
    alert('Errore, ricarica la pagina');
}
//Età passeggero
const age1 = parseInt( prompt('Inserisci la tua età') );

//Verifica km
if (isNaN(age1) || (age1 > 120)){
    alert('Errore, ricarica la pagina');
}

//Prezzo Viaggio
let price1 = (numberKm) * (0.21);

//Sconto minorenni
if (age1 < 18){
    price1 -= (price1 * 20) / 100;
}

//Sconto maggiorenni
if (age1 >= 65){
    price1 -= (price1 * 40) / 100;
}



//Calcolo prezzo umano
let price2 = price1;
let price = price2.toFixed(2)

//Visualizzazione Prezzo
document.getElementById('price') .innerHTML = `Il prezzo del tuo biglietto è: ${price}€`;

