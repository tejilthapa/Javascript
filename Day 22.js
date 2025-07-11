// let ob = {
//     name = "ankit",
//     contact : 165413564,
//     city : "bhopal" 
// }

// localStorage.getItem()


function storedata()
{
    let userdata = {
        name:document.querySelector('#name').value,
        contact:document.querySelector('#con').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#pass').value
    }
    localStorage.setItem('signdata', JSON.stringify(userdata))
}

let storedata = JSON.parse(localStorage.getItem('signdata'))
console.log(storedata)

function logindata(){
    let logind = {
        email:document.querySelector('#loginemail').value,
        password:document.querySelector('#loginpass').value
    }
}

if(storedata.email!=logind.email || storedata.password != logind.password){
    alert("User not Found")

    return false
}

