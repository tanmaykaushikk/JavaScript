//var c = 300                           // var doesn't respect scopes.
let a = 300
if (true) {
    let a = 10                     //{}  braces ke ander ka block scope bahar wala global scope.
    const b = 20
    // console.log("INNER: ", a);
    
} 

//    Node enviournment mai global scope alag hai aur browser par yeh alag hai.



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))            // yha prr nhi aayega error kyuki yha prr normal function likha h

function addone(num){
    return num + 1
}



addTwo(5)                                     // yha prr error aayega kyuki yeh ek expression h yeh hota h hoisting ka concept 
const addTwo = function(num){
    return num + 2
}