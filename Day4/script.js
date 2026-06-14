console.log("Hello There!");

// function factorial(num) {
//     if (num == 0 || num == 1) {
//         return 1;
//     } else {
//         return factorial(n-1) * n;
//     }
// }

// function main(){
//     num = parseInt(prompt("Enter a number: "))
//     fact = factorial(num)
//     console.log(`The factorial of ${num} is ${fact}.`)
// }

// main()

function ten(){
    for (let i=1; i<=10;i++)
    {
        console.log(i)
    }
}

function twenty(){
for (let i=1; i<=20;i++)
    {
        if (i%2 == 0){
            console.log(i)
        }
    }
}

function rev(){
    for (let i=10; i>=1;i--){
        console.log(i)
    }
}

function sumofhun(){
    sum = 0
    for (let i=1; i<=100;i++){
        sum += i;
    }
    console.log(sum)
}

function tableof(){
    let num = parseInt(prompt("Enter a number: "))
    for (let i=1; i<=10;i++){
        console.log(i*num);
    }
}




