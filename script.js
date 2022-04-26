/* Simon Says
1. Mettere in pagina 5 numeri casuali
2. Far partire un timer di 5 secondi
3. Dopo i 5 secondi di timer l'utente inserisce uno alla volta i numeri che ha visto precedentemente in pagina, usando il prompt()
4. Dopo l'inserimento dei 5 numeri il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/

// Creazione numeri casuali in pagina
const elementoNumeri = document.getElementById("numeriDaIndovinare");
const elementoNumeriInseriti = document.getElementById("numeriInseriti");
const elementoPunteggio = document.getElementById("punteggio");
const numeriDaGenerare = 5;
let arrayNumeri = [];
const numeriUtente = [];
let totaleNumeriIndovinati = 0;

for (let index = 0; index < 5; index++) {
    arrayNumeri.push(Math.floor((Math.random()* 4)+1))    
}

elementoNumeri.innerHTML = `Simon Says: ${arrayNumeri}`;

setTimeout(() => {
    //Timer 5 secondi
    elementoNumeri.innerHTML = "";
}, 5000);

setTimeout(() => {
    //Inserimento dei numeri dall'utente
    for (let index = 0; index < 5; index++) {
        const inputUtente = prompt("Inserire numero da 1 a 5:");
        numeriUtente.push(Number(inputUtente));
    }

    //Confronto numeri
    for (let index = 0; index < arrayNumeri.length; index++) {
        const numero = arrayNumeri[index];
        const tentativo = numeriUtente[index];

        const spanNumero = document.createElement("span");
        spanNumero.textContent = tentativo;

        if (tentativo == numero) {
            //Hai indovinato
            totaleNumeriIndovinati++;
            spanNumero.className = "green";
        } else {
            //Non hai indovinato
        }
        elementoNumeriInseriti.appendChild(spanNumero);
    }
    //Risultato
    elementoPunteggio.innerHTML = `Numeri indovinati totali: ${totaleNumeriIndovinati}`;
}, 6000);

