// Global scope
var globalVar = "I'm a global variable";
let globalLet= "I'm also global, but scope whit let";
const globalConst = "I'm a global constant";

{
// Block-level Scope
var blockVar = "I'm a block-scope var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

/*
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
*/

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }

show();


/*   
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
*/

console.log(blockVar);
console.log(blockLet);
