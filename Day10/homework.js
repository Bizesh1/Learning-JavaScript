const list_of_teachers = () => {
    let teachers = ["HariBahadur", "ShyamBahadur", "Sita", "Subash", "Ram"]

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

// list_of_teachers();

// prime numbers till 30

const primeNumbers = () => {
    let primeNumList = [];

    for(let i = 2; i <= 30; i++)
        {
            let count = 0;
            for(let j = 2; j<=i; j++)
                {
                    if (i % j == 0) 
                    {
                        count++;
                    }
                }
            if (count == 1) 
                {
                    primeNumList.push(i);
                }
        }

        primeNumList.forEach(primeNum => {
            console.log(primeNum);
        });
}

primeNumbers();