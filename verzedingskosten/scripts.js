// Verzendingskosten voor een pakje worden berekend voor een verzending binnen België of buiten België maar nog wel binnen Europa.

// Gebruik volgende items:

// - functie berekenVerzendingsKost

// - var verzendingsText is een ternary met mogelijkheden:
// U woont buiten België, maar nog binnen Europa en betaalt de verzendingskost:
// of
// U woont binnen België en betaalt de verzendingskost:

// - var verzendingsKost is een ternary met mogelijkheden: 15 of 10
"use strict";

function berekenVerzendKost() {
    const cbx = document.getElementById("cbx");
    const uitkomstTekst = document.getElementById("uitkomstTekst");

    var verzendingsKost = cbx.checked ? 15 : 10;
    var verzendingsText = cbx.checked ? `U woont buiten België, maar nog binnen Europa en betaalt de verzendingskost: ${verzendingsKost}` : `U woont binnen België en betaalt de verzendingskost: ${verzendingsKost}`;

    uitkomstTekst.innerHTML = verzendingsText;
}

// var ikKenJavaScript = true;
// console.log(ikKenJavaScript ? "WhooHoo!" : "Niet erg, dat komt nog wel.");    