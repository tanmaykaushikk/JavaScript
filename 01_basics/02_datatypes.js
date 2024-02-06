"use strict"; // treat all the JS code as a newer version

// alert(3 + 3); //  we are using node.js not browser so alert will not work here.

let name = "tanmay";
let age = 21;
let isLoggedIn = false;

//Number

/*floating (-ive) ==>  -2^-1074 (Number.MIN_VALUE)  ->  -2^1074 (Number.MAX_VALUE) 
 floating (+ive) ==>   2^-1074  ->  2^1074   
 integers  -2^(53-1)(Number.MIN_SAFE_INTEGER)  ->  2^(53-1) (Number.MAX_SAFE_INTEGER)
*/

// bigint
// string
// boolean  -->  true/false
// null  -->  standalone value  ( it is not undefined it id empty and we are saying it intentionally).
// undefined  --> the variable is not defined yet.
// symbols  --> unique

//object

console.log(typeof undefined); //it is undefined
console.log(typeof null); //  it prints object as a datatype of null
