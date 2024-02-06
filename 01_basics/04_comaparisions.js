// console.log(2>1)
// console.log(2>=1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2!=1)


// console.log("2" > 1)   // here 2 is converted in na number automatically by js.
// console.log("02" > 1)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)   

/* here comparisions convert null to a number, treating it as 0
i.e. null >=0 is true here and null == 0 is false.
*/

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)


// NOTE - comparisions ans equality(==) check works differently in js.


// (===) strict conversions because it checks the datatype also.

console.log("2" === "2")   // true   because same datatype
console.log("2" === 2)     // false  bacause datatype is not same.

