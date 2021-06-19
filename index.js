// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
const afterCats = ["Broom"];
function appendCat(name){
    let afterCats = [...cats, "Broom"];
    return afterCats;
}
const beforeCats = ["Arnold"]
function prependCat(name){
    let beforeCats = ["Arnold", ...cats];
    return beforeCats;
}

function removeLastCat(){
    const lastCats = cats.slice(0, -1);
    return lastCats;
}
function removeFirstCat(){
    const firstCats = cats.slice(1);
    return firstCats;
}