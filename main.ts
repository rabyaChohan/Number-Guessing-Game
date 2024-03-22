import inquirer from "inquirer";


const randomNumber = 26;

const result = await inquirer.prompt([{
    name: "userGuessednum",
    type: "number",
    message : "Guess a Number"

}])


if(result.userGuessednum === randomNumber){
    console.log("Congratulation You Guess Right Number")
} else {
    console.log("You Guess Wrong Number")
}