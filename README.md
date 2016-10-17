# ES6
ECMAScript 6 Stuff



var log = console.log;



var s = new Set();
s.add("Godmorgon").add("Godkväll").add("godmorgon");
log(s.size);


log("vemÄrDu".includes("är"))
log("aCo0o".repeat(3)) 		


// Math
var multiply = (a, b) => a*b;
log(multiply(2,5), multiply(25,3));



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
	telefon => telefon.namn +' Kostar '+telefon.pris +',-'
)); 




var Fredde = {
  _namn: "Fredde",
  _friends: ["Kalle","Sasa","Nina"],
  printFriends() {
    this._friends.forEach(f =>
      log(this._namn + " knows " + f));
  }
}
Fredde.printFriends();

