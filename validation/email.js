function validate()
{
    var email= document.getElementById("mail").value;
    var regex= /^([a-z A-Z 0-9 \. _]+)@([a-z ]+)\.([a-z ]{2,6})$/i;

    if(email.trim() =="")
    {
        alert("please enter a valid email id");
    }
    else if((regex.test(email)))
    {
        alert("Email submitted successfully");

    }
    else{
        alert("wrong email id");
    }
}

