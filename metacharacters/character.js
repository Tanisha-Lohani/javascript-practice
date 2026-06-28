// var regex =/[abcdefghi...]def/
// var str1= "this string contains adef";
// var output = regex.test(str1);
// console.log(output);

function employee()
{
    var empid = document.getElementById("eid").value;
    var check =/[DE]253[10-99]/i
    if((check.test(empid)))
    {
        alert("valid employee ID");
    }
    else{
        alert("Invalid employee ID");
    }
}

//D25311 E25361