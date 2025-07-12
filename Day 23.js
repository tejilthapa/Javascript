//Destructuring of array 

let [name,num,city] = ["Cybrom",75,"Bhopal"]

console.log(name)

// spread Operator

let ar1 = ["google", "azure"]
let ar2 = ["amazon", "flip"]
let ar3 = [...ar1, ...ar2,"ar3"]
ar3 = [...ar3]

console.log(ar3)