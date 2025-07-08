let btn = document.querySelector('#btn')

btn.addEventListener('click',function(){
    alert("Working")
})

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', ()=>{
    let wr = document.querySelector('#wrapper')
    wr.classList.add('main')
})