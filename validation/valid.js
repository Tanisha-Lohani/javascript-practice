function validate()
{
    var uname =document.getElementById("uname").value;
    var pass =document.getElementById("pass").value;
    var age=document.getElementById("age").value;
    var mob=document.getElementById("mobile").value;
    
    if(uname.trim()==""|| pass.trim()==""|| age.trim()==""|| mob.trim()==""){
        alert("Missing credentials");
        return false;
    }

    else if(uname=="tanisha" && pass == "12345" && mob=="0987654321"){
        alert("sign-up successful");
        return true;

    }
    else if(mob !="0987654321"){
        alert("wrong mobile number");
        return false;
    }

    else if (age<13){
        alert("underaged");
        return false;

    }
    else{
        alert("wrong id and password");
        return false;
    }
}