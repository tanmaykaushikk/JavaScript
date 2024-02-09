const user = {                                 // this => refers the current context.
    username: "hitesh",                        // simple agar this ko console karaye toh {}  empty object aayega    
    price: 999,                                // prr agar browser prr karaye toh aayega window object kyuki brower ke liye window hi golbal object hai

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){                              // this function ke ander use nhi hota hai objects mai hota hai..
//     let username = "hitesh"                   // function mai undefined aata hai console prr.
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2                 // implicit return => same line mai hota h

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})               // object return krna h toh parenthesis lagana padega


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()