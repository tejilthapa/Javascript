console.log("This is the main js")

// import module1 from "./Day 24 module1.js"; //Default import

// console.log(module1(10,20))

import demo from "./Day 24 module1.js";

console.log(demo(9,1))

// import {add, sub} from './Day 24 module2.js' //Named import

import {add as sum, sub as minus} from './Day 24 module2.js'

sum()
minus()