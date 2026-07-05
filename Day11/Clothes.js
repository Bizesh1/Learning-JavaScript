const Clothes=() => {

    let clothesDetails = [
    {
        category:"Women's Clothing",
        name:"Women Linen Kurti - ivory gold",
        price:"Rs. 2,499", 
        rating:"4.0",
        inStock:true,
        desc:"An elegant ivory gold kurti designed for graceful everyday styling and special occasions.",
        sizes:["S", "M", "L", "XL"],
        colors:["Ivory", "Gold", "Beige", "Cream"],
        fabric:"Linen",
        fit:["Regular Fit", "Straight Fit"],
    },
    {
        category:"Men's Clothing",
        name:"Men Cotton Shirt - navy blue",
        price:"Rs. 1,999",
        rating:"4.5",
        inStock:true,
        desc:"A comfortable navy blue cotton shirt suitable for casual wear.",
        sizes:["S", "M", "L", "XL"],
        colors:["Navy Blue", "Light Blue", "White"],
        fabric:"Cotton",
        fit:["Regular Fit", "Slim Fit"]
    },
    {
        category:"Unisex Clothing",
        name:"Unisex Hoodie - charcoal grey",
        price:"Rs. 1,799",
        rating:"4.8",
        inStock: false,
        desc:"A cozy charcoal grey hoodie perfect for chilly weather.",
        sizes:["S", "M", "L", "XL"],  
        colors:["Charcoal Grey", "Black", "White"],
        fabric:"Fleece",
        fit:["Regular Fit", "Oversized Fit"]
    },
    {
        category:"Children's Clothing",
        name:"Kids Denim Jacket - light blue",
        price:"Rs. 1,299",
        rating:"4.2",
        inStock:true,
        desc:"A stylish light blue denim jacket for kids, perfect for casual outings.",
        sizes:["2-3 Years", "4-5 Years", "6-7 Years"],
        colors:["Light Blue", "Dark Blue", "Black"],
        fabric:"Denim",
        fit:["Regular Fit", "Slim Fit"]
    },
    {
        category:"Elderly Clothing",
        name:"Senior Comfortable Pullover - dark grey",
        price:"Rs. 2,199",
        rating:"4.6",
        inStock:true,
        desc:"A comfortable dark grey pullover designed for senior citizens, offering warmth and style.",
        sizes:["S", "M", "L", "XL"],
        colors:["Dark Grey", "Charcoal", "Navy Blue"],
        fabric:"Wool",
        fit:["Regular Fit", "Oversized Fit"]
    }]

    clothesDetails.map(clothes => {
        console.log(`Category: ${clothes.category}`);
        console.log(`Name: ${clothes.name}`);
        console.log(`Price: ${clothes.price}`);
        console.log(`Rating: ${clothes.rating}`);
        console.log(`In Stock: ${clothes.inStock}`);
        console.log(`Description: ${clothes.desc}`);
        console.log(`Sizes: ${clothes.sizes.join(", ")}`);
        console.log(`Colors: ${clothes.colors.join(", ")}`);
        console.log(`Fabric: ${clothes.fabric}`);
        console.log(`Fit: ${clothes.fit.join(", ")}`);
        console.log("\n");
    });

}

Clothes();