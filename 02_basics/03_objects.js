//  singleton  => ager constructor se banega toh singleton banega literals se banega toh nhi banega singleton.
// Object.create  => isme singleton banta hai.



// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                        //  agar symbol use krna h toh square brackets lagane padenge nahi toh woh as a string lega usko.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)            // jab (.)  lagega tab string mai lene ki zarurat nhi hai.
// console.log(JsUser["email"])         // second method to asscess the objects.


// console.log(JsUser["full name"])
// console.log(JsUser[mySym])                               

JsUser.email = "hitesh@chatgpt.com"           // noramlly values override krr sakte hai.
// Object.freeze(JsUser)                      // freeze lagane se changes nhi honge.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);            // object ke element this se use ho sakte hai.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




/* JsUser.greeting  
   JsUser.greeting() mai difference hota hai 
*/