
function sayHello(name){
    console.log(`${name} says Hello from external script.`)
}


function studentInfo(name, id, course){
    console.log("Student Name: "+ name)
    console.log("Student ID: "+ id)
    console.log("Course: "+ course)
}


function calcArea(radius){
    let area = Math.PI * radius ** 2
    return area
}


function ListTeachers(name, address, salary, subject){

    console.log("-----------------------------")
    console.log("Teacher Name: "+ name)
    console.log("Teacher Address: "+ address)
    console.log("Teacher Salary: "+ salary)
    console.log("Teacher Subject: "+ subject)
    console.log("-----------------------------")
}


function calculate(num1, num2, operator) {
    if (operator === "+") { 
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/   ") {
        result = num1 / num2;
    }
    return result;
}

function calculator() {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let operator = prompt("Enter an operator (+, -, *, /): ");

    let result = calculate(num1, num2, operator);

    console.log(`${num1} ${operator} ${num2} = ${result}`);
}




function main(){
    console.log("The main function is called.")

    sayHello("Bizesh")

    //studentInfo("Bizesh", "12345", "JavaScript")
    //let area = calcArea(10)
    //console.log(`The area of the circle with radius ${10} is ${area}.`)
    //ListTeachers("Surajan Shrestha", "Sifal", "99999999999999", "JavaScript");
    
    console.log("----Calculator----")
    calculator()
    console.log("------------------")

}

main()
