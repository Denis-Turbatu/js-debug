/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// 1- ciclo for dove si stampa i numeri da 0 a 4
// 2- No
// 3- No


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// 1- funzione che al passaggio di un numero verifica se il numero è pari, se lo è aggiunge 5 al numero pari e ritorna il valore finale, indipendentemente dall'if la funzione ritorna anche il valore che è stato inserito
// 2- Si, nella condizione manca un uguale
// 3- No


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// 1- funzione che svolge un ciclo for di 5 iterazioni
// 2- Si, nella condizione dovrebbero esserci ' ; ' e non ' , '
// 3- No

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1- funzione che dato un array di numeri, ritorna i valori pari
// 2- Si:
    // riga 46, numbers dovrebbe avere const
    // riga 48, dopo i++ non ci va ' ; '
    // riga 49, numbers dovrebbe avere [i]
    // riga 49, dovrebbero esserci == nella condizione
    // riga 49, c'è un ; fuoei dalla condizione
// 3- Si:
    // riga 50, dovremmo pushare numbers[i] quindi il valore dentro l'array in quella iterazione, non il numero di iterazione
    // riga 52, il risultato dovrebbe essere inviato alla fine della funzione, non all'interno del ciclo for. Quindi in riga 53 e la parentesi graffa in riga 52.