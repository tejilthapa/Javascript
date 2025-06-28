// // Object

// let ob={
//     name :prompt("Enter the name:"),
//     contact :prompt("Enter the contact:"),
//     city :prompt("Enter the city:")
//         }
// console.log(ob)
// console.log(ob.city) // to print a single key value

let emp = {
        emp_name: "Tejil",
        emp_id: 1001,
        emp_designation: "HR",
        emp_contact: [3256416543,6516846],
        emp_address: ['Bhopal', 'Indore', 'Jabalpur']
}

// console.log(emp.emp_contact[1])
// console.log(emp.emp_address[2])

emp.emp_mail = "ajdvadj@gmail.com"
emp.emp_name = "Surya"
console.log(emp)

for (let k in emp)
{
    console.log(k, ":", emp[k])
}
