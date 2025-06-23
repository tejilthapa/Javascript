// // for of loop

// let ar=['tejil',45,'bhopal',5.67]
// console.log(ar[3])

// for(let v of ar)
// {
//     console.log(v)
// }

// // push()

// ar.push("India","MP")

// console.log(ar)

// //pop()

// ar.pop()
// console.log(ar)

// //unshift()

// ar.unshift("101", "MP")
// console.log(ar)

// //shift

// ar.shift()
// console.log(ar)

// Slice

// let ar1=["php",45,10.7,"MP"]
// let ar2=ar1.slice(1,3)
// console.log(ar2)

// // Splice

// ar.splice(2,0,'Sir')
// console.log(ar)


let ar=["Cy",2,3,"N"]
ar1=ar.slice(2,3)
for(let i=1; i<11; i++)
{
    if(ar1>0)
    {
        console.log(ar1*i)
    }
    else{
        console.log("IV")
    }
}


let arr=[1,3,5,2,4,10,11,15]

arr1=arr.slice(0,1)
console.log(arr1)

var a=parseInt(prompt("From where to start:"))
var b=parseInt(prompt("How many to delete:"))
arr.splice(a,b)
console.log(arr)