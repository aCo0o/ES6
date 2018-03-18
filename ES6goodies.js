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

// Foreach

var sample = [1, 2, 3];
// es5
sample.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})
// es6
sample.forEach((elem, index) => `${elem} at index ${index}`)
/*
output
1 at index 0
2 at index 1
3 at index 2
*/

//--> Filter

var sample1 = [1, 2, 3] // yeah! samma array
// es5
var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result)
// es6
var result = sample.filter(elem => elem !== 2)
/* output */
//[1, 3]


//--> Map

var sample2 = [1, 2, 3];
// es5
var mapped = sample2.map(function(elem) {
    return elem * 10;
})
// es6
let mapped = sample2.map(elem => elem * 10)
console.log(mapped);
/* output */
//[10, 20, 30]


//-->  Reduce

var sampl3 = [1, 2, 3] // here we meet again
// es5
var sum = sample3.reduce(function(sum, elem){
    return sum + elem;
})
// es6
var sum = sample3.reduce((sum, elem) => sum + elem)
console.log(sum)
