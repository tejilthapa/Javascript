function validate()
{
    let name = document.querySelector('#name').value
    let city  = document.querySelector('#city').value
    let con  = document.querySelector('#con').value
    let age  = document.querySelector('#age').value

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
  else if(con.length>10 || con.length<10)
    {
        alert("Please enter the full contact")
        document.querySelector('#con').focus()

        return false
    }
    else if(age.length>3)
    {
        alert("Please enter your age")
        document.querySelector('#age').focus()

        return false
    }
}