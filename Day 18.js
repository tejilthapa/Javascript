function validate()
{
    let name = document.querySelector('#name').value
    let city = document.querySelector('#city').value
    let con  = document.querySelector('#con').value
    let age  = document.querySelector('#age').value
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#pass').value

    if(name=="")
    {
        alert("Please enter your name")
        document.querySelector('#name').focus()

        return false
    }
    else if(city=="")
    {
        alert("Please enter your city")
        document.querySelector('#city').focus()

        return false
    }
    else if(con=="")
    {
        alert("Please enter the full contact")
        document.querySelector('#con').focus()

        return false
    }
    else if(isNaN(con))
    {
        alert("Please enter a number")
        document.querySelector('#con').focus()

        return false
    }
    else if(con.length>10 || con.length<10)
    {
        alert("Please enter the full contact")
        document.querySelector('#con').focus()

        return false
    }
    else if(age=="")
    {
        alert("Please enter your age")
        document.querySelector('#age').focus()

        return false
    }
    else if(isNaN(age))
    {
        alert("Please enter a number")
        document.querySelector('#age').focus()

        return false
    }
    else if(age.length>3)
    {
        alert("Please enter max 3 digits")
        document.querySelector('#age').focus()

        return false
    }
    else if(email=="")
    {
        alert("Please Enter your email")
        document.querySelector('#email').focus()

        return false
    }
    else if(!(email.includes('@gmail.com') || email.includes('@yahoo.com')))
    {
        alert("Please Enter a email with gmail or yahoo")
        document.querySelector('#email').focus()

        return false
    }
else if(pass=="")
    {
        alert("Please Enter a password")
        document.querySelector('#pass').focus()

        return false
    }
    else if(!
        (pass.match(/[+-@!#$%&*^]/)))
    {
        alert("Please Enter a special chracter in password")
        document.querySelector('#pass').focus()

        return false
    }
}