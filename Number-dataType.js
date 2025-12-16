const value=1e9;                  //This is representing 1*10^9
console.log(value);

const max=Number.MAX_SAFE_INTEGER //This is the max value using Number data type.
console.log(max);

const num=90071992547409916789n   //This is the bigint data type, 'n' is needed to represent.
console.log(typeof(num))

//Math Fuction's 

//floor() Method
const n1=2.67;
const result=Math.floor(n1);     //Convert's to smallest integer value
console.log(result)

//ceil() Method
const n2=2.67
const result_2=Math.ceil(n2);   //Convert's to highest integer Value
console.log(result_2)

//round() Method
const n3=2.67
const result_3=Math.round(n3);  //Convert to highest or lowest based on Value
console.log(result_3)

//toFixed() Method 
const n4=2.678
const result_4=n4.toFixed(2)    // Output:2.68  
console.log(result_4)

//Math.Random Methods
const n5=Math.random();         //Random Number Generator, range-> [0,1)
console.log(n5);
const n6=Math.random()*6        //Range Changed to [0,6)
console.log(n6)
const n7=Math.random()*7        //Gives the Smallest integer value of random number generated.
console.log(Math.floor(n7))    
const n8=Math.random()*6        //range changes to [1,6] 
console.log(Math.floor(n8)+1)   

//To  Number System's...
const n9=15
//Based on the parameter passed to toString() Method Number's can be converted.
//if dosen't passed any value value will be changed to string.
console.log(n9.toString(10))