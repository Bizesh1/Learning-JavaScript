

// Create an array of 5 favorite movies
// Use push() and pop() to modify it
// Loop through and log each item
// Find and log the last item using .length
// 🌟 Bonus: Create a 2D array (array of arrays)

let movies = ["The Shawshank Redemption", "Dead Poet Society", "Detachment", "Incantation", "Good Will Hunting"]

for (let i = 0; i < movies.length; i++) {
    console.log(`${i+1}. ${movies[i]}`);
}


console.log("\n\nAfter Pushing 'The Truman Show' ")

console.log("Length: " + movies.push("The Truman Show"))

for (let i = 0; i < movies.length; i++) {
    console.log(`${i+1}. ${movies[i]}`);
}


console.log("\n\nAfter Poping")
console.log("Popped Item: " + movies.pop())

for (let i = 0; i < movies.length; i++) {
    console.log(`${i+1}. ${movies[i]}`);

}


console.log("\n")
console.log("Last Item: " + movies[movies.length-1])
console.log("\n")


movies.shift()
console.log("\n\nAfter Shifting")

for (let i = 0; i < movies.length; i++) {
    console.log(`${i+1}. ${movies[i]}`);

}

movies.unshift("The Shawshank Redemption")

console.log("\n\nAfter Unshifting 'The Shawshank Redemption'")

for (let i = 0; i < movies.length; i++) {
    console.log(`${i+1}. ${movies[i]}`);

}



// let arr = [];

// count = 1;
// for (let i = 0; i < 2; i++){

//     arr[i] = [];  

//     for (let j = 0; j < 2; j++){
//         arr[i][j] = count;
//         count ++;
//     }
// }


// for (let i = 0; i < 2; i++){
//     let row = "";
//     for (let j = 0; j < 2; j++){
//         row += arr[i][j] + " ";
//     }
//     console.log(row);
// }

