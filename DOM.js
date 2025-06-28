let a = document.getElementById('head1')

a.innerHTML = "<u>Clouds</u>"
console.log(a.innerHTML)


let b = document.getElementsByClassName('2')

b[0].innerHTML = "<i>Clouds</i>"
b[1].innerHTML = "<i>Clouds</i>"
console.log(b.innerHTML)

let c = document.getElementsByTagName('h3')
c[0].textContent= "Clouds"
