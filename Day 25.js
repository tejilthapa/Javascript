// fetch("https://jsonplaceholder.typicode.com/comments")


async function demo (){
    let respone = await fetch("https://jsonplaceholder.typicode.com/commentshttps://jsonplaceholder.typicode.com/comments")
    let data = await respone.json()

    console.log(data);
}

demo()