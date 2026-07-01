function val()
{
    var mobile=document.getElementById("mobile").value;
    var regex=/[7-9]\d{9}/

    if(mobile.trim()=="")
    {
        alert("Please enter a mobile number");

    }
    else if((regex.test(mobile)))
    {
        alert("mobile number submitted successfully");
    }
    else{
        alert("wrong mobile number ");
        
    }


}