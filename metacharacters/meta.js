let regex = /welcome/;
let str1 = "  welcome to our youtube channel.Welcome back";
let output =regex.test(str1) ;
console.log(output);

let op= regex.exec(str1);
console.log(op);