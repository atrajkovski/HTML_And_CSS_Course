let mojotArej = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(ele, ind) {
//console.log("Element:", ele);
//console.log("Index:", ind);
}

mojotArej.forEach(printStuff);
//console.log("---------------------------------");


mojotArej.forEach((element, index) => {

});

//console.log("-----------------------------------");


for (let i = 0; i < mojotArej.length; i++) {
   printStuff(mojotArej[i], i);
}


let mojVtorArej = ["squirrel", 5, "Tjed", new Date(),true];

function checkString(x, y) {
    return typeof element === "string";
}

let filtriranArej = mojVtorArej.filter(() => typeof x === "string");
//console.log(filtriranArej);

// function bobiFilter(nefiltriranArray) {
//    let novAraj = [];
//    for (let i = 0; i < nefiltriranArray.length; i++) {
//       const element = nefiltriranArray[i];
//       if (typeof element === "string") {
//          novAraj.push(element);
//       }
//    }
//    return novAraj;
// }

// let novFiltriranArej = bobiFilter(mojVtorAraj);
// console.log(novFiltriranArej);

mojotArej.copyWithin(1,2,5);
console.log(mojotArej);

let mojArejSoBrojki = [1,2,3,4,5];

function nasaFunkcijaZaVrakjanjeRezultat(param1, param2, param3) {
    console.log("param1", param1);
    console.log("param2", param2);
    console.log("param3", param3);
}

let mapiranArej = mojArejSoBrojki.map(nasaFunkcijaZaVrakjanjeRezultat)
console.log(mapiranArej);

function bobiMap(arejSoBrojki) {
    let mapiranArr = [];
    
    for (let i = 0; i < arejSoBrojki.length; i++) {
       const element = arejSoBrojki[i] + 1;
       mapiranArr.push(element);
    }
   
    return mapiranArr;
 }








