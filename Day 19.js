let emp =[
    {name:"Tejil",age:21,city:"Indore",contact:4654634},
    {name:"Adil",age:22,city:"Bhopal",contact:1212121},
    {name:"Nitin",age:19,city:"Gwalior",contact:9989899},
    {name:"Mukesh",age:21,city:"Raipur",contact:1774144},
    {name:"Saurabh",age:18,city:"Saagar",contact:5515558}
]
// console.log(emp)

// let newob=[{name:"Aakash",age:23,city:"Delhi",contact:733561}]
// emp.unshift(newob)
// console.log(emp)

// let val1 = emp.slice(2,3)

// console.log(val1)


// let newarr = emp.map((e)=>{return e})
// console.log(newarr)

let newarr1 = emp.filter((e)=>{return e.age>20})
console.log(newarr1)


