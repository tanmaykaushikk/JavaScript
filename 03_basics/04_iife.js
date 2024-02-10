//Immediately Invoked Function Expression  (IIFE)
// why we use iife => because sometimes we have problems with the pollution at the global scopes so to avoid it we use iffe
// and iffe intantly calls the function.




// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


