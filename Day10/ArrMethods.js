
const favColor = () =>
{
    let colors = ["red", "blue", "green", "yellow"];

    console.log("Using normal function: ")
    colors.forEach(function(color){
        console.log(color)
    })

    console.log("\nUsing arrow function: ")
    colors.forEach((color) => {
        console.log(color)
    })
}

// favColor();

// Create a function named vehicle and store 5 variables in an array and print all the vehicles using forEach method.
// Create a function named list of teachers abd store 5 teachers in an array and print all the teachers using forEach method.


const vehicle = () => {
    let vehicle = ["Toyota", "Suzuki", "Honda", "Bugati", "BMW"]

    vehicle.forEach((v) => {
        console.log(v.toLowerCase());
        
    })
}


const list_of_teachers = () => {
    let teachers = ["Toyo", "Suzu", "Hoa", "Bug", "BAM"]

    let newTeachers = teachers.map(teacher => teacher.toLowerCase());

    console.log("\nOriginal Array")
    teachers.forEach((teacher) => {
        console.log(teacher)
    })

    console.log("\nNew array made using map (Lowercase)")
    newTeachers.forEach((teacher) => {
        console.log(teacher)
    })
}

// vehicle()
// console.log("\n")
list_of_teachers();



// Increase pricces by a 100

const arrPrices = () =>
{
    let prices = [200, 3000, 5000, 3405, 9000];

    let IncreasedPrices = prices.map(price => price+100);

    console.log("\nOriginal Prices:")
    prices.forEach((price) => {
        console.log(price)
    })
    console.log("\nIncreased Prices:")
    IncreasedPrices.forEach((price) => {
        console.log(price)
    })
}

arrPrices()