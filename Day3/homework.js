//create a program that categorizes age:
// 0 - 12: child
// 13 - 19: teenager
// 20 - 59: adult
// 60+ : senior citizen

let age = parseInt(prompt("Enter your age: "));

if (age >= 0 && age <= 12) {    
    catogory = "child";
} else if (age >= 13 && age <= 19) {
    catogory = "teenager";
} else if (age >= 20 && age <= 59) {
    catogory = "adult";
}   else if (age >= 60) {
    catogory = "senior citizen";
}  else {
    catogory = "invalid age";
}

console.log(`You are a ${catogory}.`);