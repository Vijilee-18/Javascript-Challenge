//Functions:

//function declaration
function sum(a,b)
{      
    return a+b;         
}
console.log(sum(1,5))  

//function expression
const value=function sum(a,b)  //named function expression
{
    return a+b;
}
console.log(value(1,5))       //Should always call the function only after fun expression.

//Anonymous Function    
const value_1=function (a,b){
    return a-b;
}
console.log(value_1(6,3))

//Arrow function
const value_3=(a,b)=>a*b
console.log(value_3(1,2))

const value_4=n=>n**2     //Single parameter : Unary Functions
console.log(value_4(2))

const value_5=(a,b)=>{
    console.log(`The values are a:${a} and b:${b}`)
    return (a+b)*2
}
console.log(value_5(1,2))

//Pure Function
function pure_sum(a,b){
    return a+b;
}
console.log(pure_sum(1,2))

//Default Function Parameter
function default_sum(a,b=0){
    return a+b;
}
console.log(default_sum(1)) //If passes two argument the value 0 will be override with new value.

//Recurssion
function countFront(n){
    if(n==0){
        console.log(`\nThere is No more People in front`)
        return
    }
    console.log(`\nThere is ${n-1} people in front`)
    countFront(n-1)
}
countFront(10)

//Rest Operator : Used When The Amount are argument passed are unknown.
function rest_sum(...rest){
    console.log(`The Values are:${rest}`);
    let sum=0;
    for(let i=0;i<10;i++){
        sum=sum+rest[i];
    }
    console.log(`The Sum is :${sum}`)
}
rest_sum(1,2,3,4,5,6,7,8,9,10)