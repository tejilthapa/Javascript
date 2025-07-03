function fun()
{
    let a = document.querySelector('#name').value
    let b = document.querySelector('#email').value
    let c = document.querySelector('#dob').value
    let d = document.querySelector('#gen').value
    let e = document.querySelector('#rel').value

    document.querySelector('#show1').textContent =`${a}\n ${b}\n ${c}\n ${d}\n ${e}\n`

    return false
}