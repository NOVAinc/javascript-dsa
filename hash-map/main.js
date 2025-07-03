import HashMap from "./hashmap.js";

let newHash = new HashMap();

newHash.set("Lucas", "Medina");

newHash.set("Lucas", "DABATE");

newHash.set("Jorge", "Medina");

newHash.set("Marce", "Medina");

newHash.set("Fabio", "Medina");
newHash.set("Lucho", "Medina");
newHash.set("Soren", "Medina");

newHash.set("Albert", "Saravia");

newHash.set("Nombre", "Apellido");

newHash.set("Nom", "Prenom");

newHash.set("Nome", "Cognome");
newHash.set("Name", "Surname");

newHash.get("Soren");

console.log(newHash.has("Nom"));
console.log(newHash.has("Name"));
console.log(newHash.has("Patrick"));
console.log(newHash.has("Nome"));

console.log(newHash.length());

newHash.remove("Nom");
newHash.remove("Soren");

console.log(newHash.length());

console.log(newHash.keys());
console.log(newHash.values());
console.log(newHash.entries());

newHash.set("Apple", "Red");
newHash.set("Lemon", "Yellow");
newHash.set("Watermelon", "Green");
newHash.set("Eggplant", "Purple");
newHash.set("Turnip", "White");
newHash.set("Turnip", "Blue");

let test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
