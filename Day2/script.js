// there are three variables in javascript
// var, let, const

console.log("Hello from external script")

var name = "Bizesh"

// name 5 diff var and display them
//var age = 18
//var country = "Nepal"
//var hobby = "Music"
//var favfood = "MoMo"

//use let and console to display your details making id constants reassign your temp address with college 

//const id = 6967
//let address = "Dhumbarahi"
//console.log("Temp address: ",address)
//
//address = "Siphal"
//
//console.log(name)
//console.log(id)
//console.log("College address: ",address)
 
let studentName = "Bizesh"
let studentAge = 18
let isStudent = true
let examScore = null
let hobbies = ["Music", "Drawing", "Traveling"]

console.log(studentName, typeof(studentName))
console.log(studentAge, typeof(studentAge))
console.log(isStudent, typeof(isStudent))
console.log(examScore, typeof(examScore))

for(let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i], typeof(hobbies[i]))
}

console.clear()

// Task: Create a simple calculator 

let num1 = 10
let num2 = 5    
let sum = num1 + num2
let prod = num1 * num2
let diff = num1 - num2
let div = num1 / num2
console.log(`Sum of ${num1} and ${num2} is: `, sum)
console.log(`Product of ${num1} and ${num2} is: `, prod)
console.log(`Difference of ${num1} and ${num2} is: `, diff)
console.log(`Division of ${num1} and ${num2} is: `, div)