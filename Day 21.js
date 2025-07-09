function store()
{
    let name = document.querySelector('#name').value
    localStorage.setItem('Username',name)

    let con = document.querySelector('#con').value
    localStorage.setItem('Contact',con)

    let age = document.querySelector('#age').value
    localStorage.setItem('Age',age)

    let email = document.querySelector('#email').value
    localStorage.setItem('Email',email)

    let pass = document.querySelector('#pass').value
    localStorage.setItem('Password',pass)
}