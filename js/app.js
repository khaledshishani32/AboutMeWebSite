'use strict';


    

let correctAnswer = 0;

alert("Welcom in a funny websit 🤗 ");

    

let userName = prompt("Please enter your name 😃 ");

while (!userName) {


    userName = prompt("Please enter your name ! 😁")

}
//console.log("The clint name  is " + userName);

alert('Welcome ' + userName + ' we will play a fun game like guessing questions let\s go 😃  ');

const myName = "khaled";
function question1() {
    

let askForMyName = prompt("Do you think my name is john wick ? chooes Yes/y or No/n ");
if (askForMyName.toLocaleLowerCase() === "yes" || askForMyName.toLowerCase() === "y") {
    alert(` ❌  No way john wick is an actor . My name is ${myName}!`);
    console.log(askForMyName.toLocaleLowerCase());
} else if (askForMyName.toLocaleLowerCase() === "no" || askForMyName.toLocaleLowerCase() === "n") {
    alert(` ✔️  You are amazing , my name is ${myName} !`);
    correctAnswer++;
} else {
    alert("Please answer with only yes/y or no/n with no spaces");
}

}
question1();

const myAge = 27;
 
function question2() {
    

let askForMyAge = prompt("Do you thing my age between 18 & 25  🤔 ?  chooes Yes or No ");

askForMyAge = askForMyAge.toLocaleLowerCase();

switch (askForMyAge) {
    case "yes":
    case "y":
        alert(" ❌  No , I am 27 years old  😁 ");
        console.log(`my age is ${myAge} !`);
        break;

    case "no":
    case "n":
        alert(` ✔️  Yes, your answer is correct. I am ${myAge} years old  😁 `);
        correctAnswer++;
        console.log(`my age is ${myAge} !`);
        break;
    default:
        alert("Please answer with only yes/y or no/n with no spaces");
}
}
question2();

const myFavActor = "john wick";
function question3() {
    

let favActor = prompt("Do you think a john wick of my favourite actor\s ? 🤔 , Be smart 😁 chooes Yes or No ");

favActor = favActor.toLocaleLowerCase();

switch (favActor) {
    case "no":
    case "n":
        alert(" ❌  No , Didn't you notice that I mentioned the john wick name previously ?? Was it a coincidence 🤔 ?? It's okay, let's continue 😃 ");
        console.log(` ${myFavActor} is one of my favourite actor\s `);
        break;

    case "yes":
    case "y":
        alert(` ✔️  Yes, your answer is correct. You have a strong memory 😃 `);
        correctAnswer++;
        console.log(` ${myFavActor} is one of my favourite actor\s`);
        break;

    default:
        alert("Please answer with only yes/y or no/n with no spaces");

}
}
question3();
const myMajor = "Information Technology";

let askForMyMajor = prompt("Do you think that my major is human medicine ? 🤔  chooes Yes or No ");

askForMyMajor = askForMyMajor.toLocaleLowerCase();

switch (askForMyMajor) {
    case "yes":
    case "y":
        alert(` ❌  No , My a major is ${myMajor} 😃 ?? It's okay, let's continue 😃 `);
        console.log(` My a major is ${myMajor} `);
        break;

    case "no":
    case "n":
        alert(` ✔️  Yes, your answer is correct. My a major is ${myMajor} 😃 `);
        correctAnswer++;
        console.log(` My a major is ${myMajor}`);
        break;

    default:
        alert("Please answer with only yes/y or no/n with no spaces");

}



let askForPinion = prompt("Did you enjoy with me 😃 ? chooes Yes or No ");

askForPinion = askForPinion.toLocaleLowerCase();

switch (askForPinion) {
    case "yes":
    case "y":
        alert(`I'm so glad you liked it ${userName} , and I'm going to develop it further. 🥰 `);
        correctAnswer++;
        console.log(askForPinion);
        break;

    case "no":
    case "n":
        alert(` Sorry to hear this ${userName} 😔 , but next time I promise you'll like it. 😃 `);
        console.log(askForPinion);
        break;

    default:
        alert("Please answer with only yes/y or no/n with no spaces");

}


let currectNum = 50;

let insertNum = null ;

for (let i = 0; i < 4; i++) {

    
     insertNum = prompt("gussing number between 0 to 100 ");
     insertNum=parseInt(insertNum);
    if (insertNum === 50) {

        alert(` Good job the currect number is ${currectNum} 😃 `);
        break;


    }


    else if (insertNum > currectNum) {
        alert("Try smaller than is number ");

        //insertNum = prompt("guss agian");


    }
    else if (insertNum < currectNum) {
        alert("Try larger this number ");

       // insertNum = prompt("guss agian");

    }
    else {
        alert("The correct  answer  50 !");


    }
    
    if(i === 3){
        alert("The correct answer 50");
    }
}


correctAnswer++;





let myArr = ["pizza", "burger", "pasta", "mansaf"];

let exit_loops = false;
let clintGuess;
for (let i = 0; i < 6; i++) {

    clintGuess = prompt(" Guess my favorite food 😃 ");


    for (let j = 0; j < 4; j++) {

        if (clintGuess === myArr[j]) {
            let favChooes= myArr[j];
            alert(`✔️  You are amazing , ${favChooes} is one of my favorite  food 😃 and all these ${myArr} `);
            correctAnswer++;
            exit_loops = true;
            break;
        }

        
    }if (exit_loops)
    break;

    
    clintGuess = prompt("Try agian");

    if(i === 0){
        alert("sorry you ran out of tries");
    }

}

alert(`Welcome again ${userName} 😃 , You'r scor is ${correctAnswer} of 7 , see you later. 👋 `);

