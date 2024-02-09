// const tinderUser = new Object()          // this is a singleton object 
const tinderUser = {}                       // this is not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)              // merges two objects.

const obj3 = {...obj1, ...obj2}                     // ... use spread operator to merge the objects it is more of a easier way.
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));          // iska output array mai aata hai isse hme saari keys mil jati h object ki.
// console.log(Object.values(tinderUser));        // isse hme saari values mil jati hai.
// console.log(Object.entries(tinderUser));       // array ke ander array aa jata hai. har key aur value ki ek alag array ban jata hai.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));      // yeh batata hai ki yeh specific property uske paas hai ya nahi.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]