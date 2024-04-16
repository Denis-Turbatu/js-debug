/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
// 1- Una funzione che ha un'età prestabilita con una varibile message vuota, in base alla condizione applicata il valore di message cambierà (in questo caso dovrebbe essere 'hai piu di 18 anni')
// 2- No
// 3- Il codice è corretto ma non lascia nessun messaggio, la variabile message contiene il messaggio ma penso che dovrà anche essere stampato con un log oppure un return

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// 1- Una funzione che ha una variabile colors e un log di quanti colori ci sono
// 2- Si, in colors.lenght la dicitura corretta è length, con 'h' e 't' invertite
// 3- No


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// 1- Una funzione che prende il valore di un utente e somma 12, poi stampa il risultato
// 2- No
// 3- Si, il prompt prende una stringa in quella maniere, dovremmo inserire tutto dentro un parseInt()



// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// 1- Una funzione che prende il valore di un utente e somma 12, poi stampa il risultato
// 2- No
// 3- Si, il prompt prende una stringa in quella maniera, dovremmo inserire tutto dentro un parseInt()


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

// 1- Una funzione in base a delle email gia salvate, si effettua un controllo se la mail è verificata tramite una variabile flag, i base al risultato stampa la situazione
// 2- Si, manca la parentesi graffa finale per chiudere la funzione
// 3- No




























