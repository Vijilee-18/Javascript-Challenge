//Higher Order Functions:

function sum(callback){               //callback->This is a callback function. Function as an argument.
    let a=10;
    let b=16;
    let sum=a+b;
    console.log(`The Sum is :${sum}`)
    callback();
}
function fnDifference(){
    let num=10;
    let num2=20;
    let difference=num2-num;
    console.log(`The difference is:${difference}`);
}
sum(fnDifference)