function add(x, y)
{ return x + y; }

function subtract(x, y)
{ return x - y; }

function multiply(x, y)
{ return x * y; }

function divide(x, y)
{ return x / y; }

function calculator(x, y, operation)
{
    switch(operation)
    {
        case "add":
            return add(x, y);
        case "subtract":
            return subtract(x, y);
        case "multiply":
            return multiply(x, y);
        case "divide":
            return divide(x, y);
        default:
            console.log("Hello");
    }
}

function map(operation)
{
    let op_sign = ""
    
    if (operation == "add")
        op_sign = "+";
    else if (operation == "subtract")
        op_sign = "-";
    else if (operation == "multiply")
        op_sign = "*";
    else if (operation == "divide")
        op_sign = "/";
            

    return op_sign;
    
}

function main()
{
    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));
    let operation = prompt("Enter operation (add, subtract, multiply, divide): ");
    result = calculator(num1, num2, operation);
           
    console.log(`${num1} ${map(operation)} ${num2} = ${result}`)    
}

main()