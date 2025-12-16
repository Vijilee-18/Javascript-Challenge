//Declaration Way's:
const single='Vijilee'
const double="George"
const backtick=`Kurian`

//Usual Printing Type:
console.log(single+" " +double+" "+backtick);

//Template-Literals:
const result=`${single} ${double} ${backtick}`;
console.log(result)

const string_length=single.length 
//length of string (length is not method it's a property)
console.log(`Name has : ${string_length}`)

const name=""
const result_2=name[0];
console.log(`Type of result_2 is:${typeof result_2}`); //output : undefined
const result_3=name.charAt(0);
console.log(`Type of result_3 is:${typeof result_3}`); //output : string


//Slicing -> [a,b)
const course="JavaScript"
console.log(course.slice(0,4))      //output:Java
console.log(course.slice(4))        //output:Script
console.log(course.slice(-10,-6))   //output:Java

console.log(course.substring(2,1))  //output:a 
//Conver's (2,1)->(1,2) and then slice, negative indexing is not possible.

