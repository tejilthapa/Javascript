// function fun()
// {
//     alert("working...!!!")
// }


// function changetext()
// {
//     let head = document.getElementById('head')
//     head.textContent = "M.P Nagar"
// }


// function ct()
// {
//     let h1 = document.getElementById('h1')
//     h1.textContent = "Get Lost"
// }

// function ct1()
// {
//     let h1 = document.getElementById('h1')
//     h1.textContent = "Hello"
// }


// function cc1() {
//     let h1 = document.getElementById('h1');
//     h1.textContent = "Red";
//     document.body.style.backgroundColor = "red";
// }
// function cc2() {
//     let h1 = document.getElementById('h1');
//     h1.textContent = "Green";
//     document.body.style.backgroundColor = "green";
// }
// function cc3() {
//     let h1 = document.getElementById('h1');
//     h1.textContent = "Yellow";
//     document.body.style.backgroundColor = "yellow";
// }


function p()
{
    let h1 = document.getElementById('h1')
    h1.textContent = parseInt(h1.textContent) + 1;
    if ((parseInt(h1.textContent)%2) != 0) {
        h1.style.color = "red"
    }
}

function m()
{
    let h1 = document.getElementById('h1')
    h1.textContent = parseInt(h1.textContent) - 1;
    if (parseInt(h1.textContent) < 0) {
        h1.textContent = 0;
    }
}