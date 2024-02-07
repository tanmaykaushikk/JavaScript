//Stack (Primitive :- In this we have a copy of the value
//                     and all the changes that are made those changes are made at copy not at original value)

// Heap(Non - primitive) :- In this we have the original value and the changes we are going to be make are to be changed
//                          in the original value .

//Stack
let name = "tanmay";
let nickname = name;
nickname = "manu";
console.log(name);
console.log(nickname);



// Heap
let userOne = {
    email:"test@google.com",
    upi:"sbi@sbi",
}
let userTwo = userOne
userTwo.email = "sbi@google.com";
console.log(userOne.email);
console.log(userTwo.email);




