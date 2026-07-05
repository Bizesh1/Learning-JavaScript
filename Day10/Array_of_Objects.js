console.log("Bizesh"); 


// array of objects

const studentInfo = () => {
    let students  = [
        {id: 1, name: "Bizesh", age: 19, address: "Dhumbarahi", phone: "9812345678", favsub: "Computer Science"},
        {id: 2, name: "Arin", age: 20, address: "Tikathali", phone: "9878787311", favsub: "Business"},
        {id: 3, name: "Binayak", age: 17, address: "Hadigaon", phone: "9789012345", favsub: "Physics"},
        {id: 4, name: "Diwash", age: 22, address: "Bagbazar", phone: "9812345681", favsub: "Chemistry"},
        {id: 5, name: "Pranil", age: 23, address: "Pokhara", phone: "9812345682", favsub: "Biology"},
        {id: 6, name: "Sujal", age: 20, address: "Bishalnagar", phone: "9723456789", favsub: "Computer Science"}
    ];
    return students;
}

// const students = studentInfo();

// students.forEach(student => {
//     console.log(
//         `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Address: ${student.address}, Phone: ${student.phone}, Favorite Subject: ${student.favsub}`
//     );
// });
