
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){         // in java script we do not have to specify the datatype in the function.
//     console.log(number1 + number2);               // func mai likhte h parameters and jab console krte h toh hota h arguments.
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2                 // agar kisi variable mai store karana h toh usko return karana padega usje baad hi woh return hoga.
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){                   // agar koi naam nhi dete toh undefined aata hai.
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){            // here ... is a rest operator // ... is a spread/rest operator but works differently at different places.
    return num1                                              // rest operator converts the arguments into an array.
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));