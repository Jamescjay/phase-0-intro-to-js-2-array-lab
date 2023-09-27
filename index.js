
const cats = ["Milo", "Otis", "Garfield"];

function arrayFunctions(){
   cats.length = 0;

   cats.push("Milo", "Otis", "Garfield");
}

function destructivelyAppendCat(name){
   cats.push("Ralph");
}

function destructivelyPrependCat(name){
   cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return cats.concat(name); 
}

function prependCat(name) {
  return [name].concat(cats); 
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}

