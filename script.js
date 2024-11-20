let numeroCorretti = Math.floor(Math.random() * 100) + 1; // Numero da indovinare
let tentativi = 0;

function gioca() {
    const input = document.getElementById("input-number");
    const risultato = document.getElementById("risultato");
    const numeroUtente = parseInt(input.value);
    tentativi++;

    if (numeroUtente === numeroCorretti) {
        risultato.textContent = `Bravo! Hai indovinato il numero in ${tentativi} tentativi!`;
        risultato.style.color = "green";
    } else if (tentativi >= 5) {
        risultato.textContent = `Game over! Il numero era ${numeroCorretti}.`;
        risultato.style.color = "red";
    } else if (numeroUtente < numeroCorretti) {
        risultato.textContent = `Troppo basso! Riprova. Tentativi rimanenti: ${5 - tentativi}`;
        risultato.style.color = "orange";
    } else {
        risultato.textContent = `Troppo alto! Riprova. Tentativi rimanenti: ${5 - tentativi}`;
        risultato.style.color = "orange";
    }
}
