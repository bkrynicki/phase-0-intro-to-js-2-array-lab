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

function appendCat(name){
    let afterCats = [...cats, name];
    return afterCats;
}


function prependCat(name){
    let beforeCats = [name, ...cats];
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