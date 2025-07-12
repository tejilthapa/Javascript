// //Destructuring of array 

// let [name,num,city] = ["Cybrom",75,"Bhopal"]

// console.log(name)

// // spread Operator

// let ar1 = ["google", "azure"]
// let ar2 = ["amazon", "flip"]
// let ar3 = [...ar1, ...ar2,"ar3"]
// ar3 = [...ar3]

// console.log(ar3)

// Object

// let {name,contact,age} = {
//     name:"Vivek",
//     contact:0212432,
//     age:50
// }

// console.log(name)

let ob = {n:1,m:2}
let ob1 = {n1:1,m2:2}
let ob2 = {...ob, ...ob1}

console.log(ob2)