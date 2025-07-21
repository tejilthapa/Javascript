async function fet() {
    let res = await fetch('http://localhost:3000/userdata')
    let data = await res.json()
    
    // console.log(data)
    let st = data.map((item)=>`
    <tr>
    <td> ${item.id}</td>
    <td> ${item.name}</td>
    <td> ${item.age}</td>
    <td> ${item.contact}</td>
    <td> ${item.city}</td>
    <td> <button onclick = "mydelete('${item.id}')">Delete</button>
    <td> <button onclick = "myedit('${item.id}')">Edit Data</button>
    </tr>
    `).join(" ")
    document.querySelector('#storedata').innerHTML = st
}

fet()

function mydelete(id)
{
    fetch(`http://localhost:3000/userdata/${id}`,{
        method:"DELETE"
    }).then((e)=>alert("Deleted........"))
}

async function myedit(id) {

    let res = await fetch(`http://localhost:3000/userdata/${id}`)
    let userdata = await res.json()
    let userinput = `<h1> Edit Your Data </h1>
    <input type="text" value = "${userdata.id}" readonly /> <br><br>
    <input type="text" value = "${userdata.name}" /> <br><br>
    <input type="text" value = "${userdata.age}" /> <br><br>
    <input type="text" value = "${userdata.contact}" /> <br><br>
    <input type="text" value = "${userdata.city}" /> <br><br>
    <input type="submit"> <br><br>
    `
    document.querySelector('#editfrm').innerHTML = userinput
}

function postdata() {
  let frmdata={
    name:document.querySelector('#name').value,
    age:document.querySelector('#age').value,
    contact:document.querySelector('#contact').value,
    city:document.querySelector('#city').value
}

fetch('http://localhost:3000/userdata',{
    method:"POST",
    headers:{
        'Content-type' : 'application/json'
    },
    body:JSON.stringify(frmdata)

})
}



