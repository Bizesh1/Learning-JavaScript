function pattern() {
    
    for (i = 0; i<=5; i++){
        let pattern = ""
        {
            for(j=1; j<=i; j++)
            {
                pattern = pattern + "*"
            }
            console.log(pattern)
        }
    }
}


// 1
// 22
// 333
// 4444
// 55555
function pattern8(){
    for (i = 1; i<=5; i++){
        let pattern = "";
        for (j = 1; j <= i; j++) {
            pattern = pattern + i;
        }
        console.log(pattern);
    }
}


// 1
// 12
// 123
// 1234
// 12345

function pattern9(){
    for (i = 1; i <= 5; i++){
        let pattern = "";
        for (j = 1; j <= i; j++){
            pattern = pattern + j;
        }
        console.log(pattern);
    }
}


// 1
// 2 3
// 4 5 6
// 7 8 9 10

function pattern10(){
let num = 1;
for (let row = 1; row <= 4; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
        line += num + " ";
        num++;
    }

    console.log(line);
}
}



// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function pattern11(){
let num = 1;
for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
        line += num + " ";
        num++;
    }

    console.log(line);
}
}



//     *
//    ***
//   *****
//  *******
// *********

function pyramid(){
  let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = "";

    // Spaces
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }

    // Stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        line += "*";
    }

    console.log(line);
}
}