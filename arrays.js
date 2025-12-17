//Arrays

//Declaration Method 1 . Preferred One
let array=[1,2,3,4,5]
console.log(array)

//Declaration Method 2

let array_1=new Array(1,2,3,4,5)
console.log(array_1)
//let array_1=new Array(4)->This will Create 4 empty Space's.


//push() Method :Element will be added to the last position.
let array_2=[4,5,6,7,8]
array_2.push("Vijilee")
console.log(array_2)

//pop() Method  :Used to Remove an element from last position.
const result=array_2.pop()
console.log(result,array_2)

let array_3=[10,20,30]
//shift() Method :Used to remove an element from first position.
const result_1=array_3.shift()
console.log(result_1,array_3)

//unshift() Method :Used to Add an element to the first position.
const result_2=array_3.unshift(10)
console.log(`Array after insertion: ${array_3} and length:${result_2}`)

//slice()
const numbers=[1,2,3,4,5]
console.log(numbers.slice(0,3))

//splice()
const result_3=numbers.splice(1,2,10) // starting from 1st index->remove two elements->Add value 10 to 1st index
console.log(result_3,numbers)

//for...of
let number=[10,40,50,60]
for(let elements of number){
    console.log(elements)
}