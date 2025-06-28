let a = document.getElementById('head1')
console.log(a)

// Text change

a.textContent="inside js"

let b = document.getElementById('head2')
b.innerHTML="<i>Clouds</i>"

let c = document.getElementsByClassName('head3')
c[0].textContent="change with js"

let d = document.getElementsByTagName('p')

d.textContent="inside js"
