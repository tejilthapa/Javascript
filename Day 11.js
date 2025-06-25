

// function add()
// {
//     console.log("inside the function")
// }

// add()
// add()
// add()
// add() //code reusibility


// function sum()
// {
//     let a =10
//     let b =20
//     console.log(a+b)
// }
 
// sum()

// function sub()
// {
//     let a = parseInt(prompt("Enter a 1st number: "))
//     let b = parseInt(prompt("Enter the 2nd number"))
//     console.log(a-b)
// }

// sub()

// wap to print the table of any number using any function

// function tab()
// {
//     let a=parseInt(prompt("Enter the number"))

//     for (let i =1; i<=10; i++)
//     {
//         console.log(a*i)
//     }
// }

// tab()


function type1(a) // parameter stores the value from the function calling
{
    return a+a;
}

let b= parseInt(prompt("Enter a number:"))

let c= type1(b)  // to store any retuned value

console.log(type1(b)) // to print it directly

