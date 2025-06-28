// for loop

// for(let n=1; n<11; n++)
// {
//     console.log(n)
//     document.write(n+"<br>")
// }


// var a=parseInt(prompt("Enter a Number:"))

//     if(a>=1 && a<=10)
//     {
//        for(let n=1; n<=a; n++)
//         {
//             console.log(n)
//         }
//     }
//     else if(a>=11 && a<=20)
//     {
//         for(let n=20; n>=1; n--)
//         {
//             console.log(n)
//         }
//     }
//     else
//     {
//         console.log("invalid")
//     }

// wap to print square all even numbers between 20 - 1

    // var a=20
    // if(a%2=0)
    // {
    //     for(let i=20; i=>1; i--)
    //     {
    //         var a=i*i*i
    //     }
    //     console.log(a)
    // }


    // for (let a=2; a<=3; a++)
    // {
    //     for(let b=1; b<=10; b++)
    //     {
    //         console.log(a*b)
    //     }
    // }


    // for(let n=1; n<=5; n++)
    // {
    //     document.write("*")
        
    // }

    for (let i=1; i<6; i++)
    {
        for (let j=1; j<6; j++)
        {
            if(j<=i)
            {
                document.write("*")
            }
            else
            {
                document.write(" ")
            }
        }
        document.write("<br>")
    }

document.write("<br>")

    for (let r=1; r<7; r++)
    {
        for (let c=1; c<9; c++)
        {
            if(r==1 || r==6 || c==1 || c==8)
            {
                document.write("*")
            }
            else
            {
                document.write("&nbsp&nbsp")
            }
        }
        document.write("<br>")
    }