


const ShowroomVehicles = () => {
    let carDetail = [
        {
            id: 1,
            name:"Toyota",
            actualPrice:"1400000",
            discountPrice:"1250000",
            desc:"Toyota Fortuner",
            color: ["Blue", "Black", "White"],
            inStock: true
        },
        {
            id: 2,
            name:"Honda",
            actualPrice:"1200000",
            discountPrice:"1050000",
            desc:"Honda CR-V",
            color: ["Blue", "Black", "White"],
            inStock: true
        },
        {
            id: 3,
            name:"Suzuki",
            actualPrice:"1000000",
            discountPrice:"850000",
            desc:"Suzuki Vitara",
            color: ["Blue", "Black", "White"],
            inStock: true
        },
        {
            id: 4,
            name:"Ford",
            actualPrice:"1100000",
            discountPrice:"950000",
            desc:"Ford EcoSport",
            color: ["Blue", "Black", "White"],
            inStock: false
        },
        {
            id: 5,
            name:"Nissan",
            actualPrice:"1300000",
            discountPrice:"1150000",
            desc:"Nissan Magna",
            color: ["Blue", "Black", "White"],
            inStock: true
        }
    ]

    carDetail.map(car => {
        console.log(`Car ID: ${car.id}`);
        console.log(`Car Name: ${car.name}`);
        console.log(`Actual Price: ${car.actualPrice}`);
        console.log(`Discount Price: ${car.discountPrice}`);
        console.log(`Description: ${car.desc}`);
        console.log(`Color: ${car.color[0]}, ${car.color[1]}, ${car.color[2]}`);
        console.log(`In Stock: ${car.inStock}`);
        console.log("\n");
    });
}

// ShowroomVehicles();