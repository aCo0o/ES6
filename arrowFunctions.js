var log = console.log;


// Math
var multiply = (a, b) => a*b;
log(multiply(2,5));



// Returnera Array
var delaMinMeningES6 = mening => mening.split(" "); 
log(delaMinMeningES6("Jag greppar snart ES6"));


// Returnera DOM Document
var visaDOM = () => { log(document); } 
//visaDOM();




// Returnera Objekt
var returneraEttObjekt = (id, namn) => ({ id: id, namn: namn }); 
log(returneraEttObjekt (99, "aCo0o"));


// Ex2
var telefoner = [
	{ namn:'Iphone S6', pris:6499 },
	{ namn:'Galaxy S6', pris:5769 },
	{ namn:'Galaxy Note 5', pris:4899 }
];

log(telefoner.map(
	telefon => telefon.namn +' '+telefon.pris
)); // [649, 576, 489]