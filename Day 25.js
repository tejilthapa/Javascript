// fetch("https://jsonplaceholder.typicode.com/comments")


async function demo (){
    let respone = await fetch("https://jsonplaceholder.typicode.com/comments")
    let data = await respone.json()
    // let a = data.map((e)=>{return e.name})

    let apidata = data.map((e)=>`
    <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.email}</td>
    </tr>
    `).join(" ")

    let savedata = document.querySelector("#savedata")
    savedata.innerHTML = apidata

    // console.log(data);
    // console.log(a)
}

demo()