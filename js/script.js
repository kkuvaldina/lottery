
var x;
var lottery = [];
var lotto = "";

function myFunction() 
{
    x = document.getElementById("userInput").value;
    event.preventDefault();

    if(x.length > 8) {
        alert ("The number should be less than 8 digits, Try again!")
        return
    }
    

    for (var i = 0; i < x; i++) 
    {
        lottery[i] = Math.ceil(Math.random() * 99);
    }


    for (var i = 0; i < x; i++) 
    {
        if (i == 0) lotto += lottery[i];
        else lotto += "-" + lottery[i];
    }

    

document.getElementById("result").innerHTML = "Your Lottery Ticket Number: " + "<br>" + lotto;

}


