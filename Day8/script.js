//=========================================
function one2ten(){
    let nums = [];
    for (let i = 1; i <=10; i++){
        nums.push(i)
    }

    for (let j = 0;  j<nums.length; j++){
        console.log(nums[j])
    }
}
//one2ten()
//=========================================

//=========================================
//Task1
function showFood(){
    let foods = ["Chicken", "Watermelon", "Grape Soda"]
    for (let i = 0;  i<foods.length; i++){
        console.log(foods[i])
    }
}
//showFood()
//=========================================


//=========================================
//Task2
function showCountries(){
    countries = ["USA", "India", "China", "Russia", "Japan"]
    for (let i = 0;  i<countries.length; i++){
        console.log(countries[i])
    }
}
//showCountries()
//=========================================

function games(){
    let games = [];
    games.push("Ghost of Tsushima")
    games.push("Cyberpunk 2077")
    games.push("The Last of Us Part II")
    games.push("Minecraft")

    for (let i = 0;  i<games.length; i++){
        console.log(games[i])
    }
}
//games()


//task: showFirstColor
function showFirstColor(){
    let colors = ["Red", "Green", "Blue", "Yellow", "Purple"]
    console.log(colors[0])
}
//showFirstColor()

//task: showLastSubject
function showLastSubject(){
    let subjects = ["Math", "Science", "History", "English", "Art"]
    console.log(subjects[subjects.length-1])
}
//showLastSubject()
