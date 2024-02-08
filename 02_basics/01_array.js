// Arrays
/*
1. JavaScript arrays are resizable and can contain a mix of different data types.
2. 0-based indexing
3. Js array creates shallow copies instead of deep copies.
SHALLOW COPY == SAME REFERENCE ( HEAP)
DEEP COPY == DIFFERENT REFERNCE( STACK)
*/



// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)               // INSERT FROM STARTING
// myArr.shift()                  // REMOVE FROM STARTING

// console.log(myArr.includes(9));          // print boolean values.
// console.log(myArr.indexOf(3));          // if the value dos't exits it will print -1.

// const newArr = myArr.join()                // converts the array into the string.

// console.log(myArr);
// console.log( newArr);


// slice, splice                      // slice  -->just prints the portion of the array. and not includes the last element.
                                      // splice --> it print the poriton of the required array includes the last element
console.log("A ", myArr);             //            abd also make changes in the original array which SLICE does not.

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);