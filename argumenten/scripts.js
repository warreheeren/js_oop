"use strict";

// Maak een functie expressie aan met naam: som.

// Deze kan getallen aankrijgen en moet de som van deze getallen in de console loggen. Het aantal getallen dat de functie aankrijgt staat niet vast. m.a.w. zowel som(4,8,15) als som(2,4) zou moeten werken.

// Tip: gebruik een variabele totaal.

// Als dit werkt voeg je het volgende toe: bij het berekenen van de som houd je er ook rekening mee dat er niet altijd getallen worden doorgegeven, en dat er enkel mag opgeteld worden als de typeof correct is. Bv. som("Jan", 20, 5) geeft 25 en niet Jan205.

const som = function () {

    let totaal = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            totaal += arguments[i];
        }
    }

    console.log(totaal);
};

som(40, 20, "test");