// Log telkens het resultaat van volgende opdrachten:
let designVakken = ["HTML&CSS", "Photoshop", "Interface", "Drupal"];
console.log(designVakken);

// Maak een array aan: ontwikkelingVakken="Workflows", "Javascript", "jQuery", "PHP"
let ontwikkelingVakken = ["Workflows", "Javascript", "jQuery", "PHP"];
console.log(ontwikkelingVakken);

// Maak een array aan: alleVakken, deze bevat de 2 vorige arrays. Voeg deze dus samen via JS. Resultaat is dus: "HTML&CSS", "Photoshop", "Interface", "Drupal", "Workflows", "Javascript", "jQuery", "PHP"
// Log de array.

let alleVakken = designVakken.concat(ontwikkelingVakken);
console.log(alleVakken);

// Maak een array aan: puurProgrammeren, deze bevat enkel de 3 programmeervakken uit de array ontwikkelingVakken (via slice)
// Resultaat is dus: "Javascript", "jQuery", "PHP"
let puurProgrammeren = ontwikkelingVakken.slice(1);
console.log(puurProgrammeren);

// Maak een array aan: afdelingVakken: deze bevat alleVakken, voor elk vak is de tekst "FeDev - " toegevoegd via map().
// Resultaat: "FeDev - HTML&CSS", "FeDev - Photoshop", "FeDev - Interface", "FeDev -Drupal", "FeDev -Workflows", "FeDev -Javascript", "FeDev -jQuery", "FeDev -PHP"
let afdelingVakken = alleVakken.map(
    function(vak){
        return "FeDev - " + vak;
    }
)
console.log(afdelingVakken);

// Voeg achteraan bij in ontwikkelingVakken via splice(): "JS-OOP", "PHP-OOP"
ontwikkelingVakken.splice(4,0,"JS-OOP", "PHP-OOP");
console.log(ontwikkelingVakken);

// Voeg bij in alleVakken via push(): "JS-OOP", "PHP-OOP"
alleVakken.push("JS-OOP", "PHP-OOP");
console.log(alleVakken);

// Voeg vooraan bij in allevAkken: "Illustrator"
alleVakken.unshift("Illustrator")
console.log(alleVakken);

// Verwijder "Illustrator" terug.
alleVakken.shift();
console.log(alleVakken);

// Bereken het totaal aantal vakken in alleVakken via reduce().
function tel(vak){
    return vak + 1;
}
let aantalVakken = alleVakken.reduce(tel, 0);
console.log(aantalVakken); 

// Maak een array "punten" met inhoud: 87, 93, 75, 81, 74, 85, 92, 91, 67, 65
let punten = [87, 93, 75, 81, 74, 85, 92, 91, 67, 65];
console.log(punten);
// Maak dan een array vakkenEnPunten, waarin je via reduce() alleVakken en punten combineert. 
//Resultaat is dus bv. HTML&CSS 87 - Photoshop 93 - Interface 75 - Drupal 81 - Workflows 74 - Javascript 85 - jQuery 92...
function getVakkenEnPunten(resultaat,vak,punt){
    resultaat.push(`${vak} - ${punten[punt]}`);
    return resultaat;
}
let vakkenEnPunten = alleVakken.reduce(getVakkenEnPunten, []);
console.log(vakkenEnPunten);