var q1= "Which planet is in the 4th position in our solar system? "
var q2= "Which planet is covered largely by water? "
var q3= "Which planet is the hottest planet of the solar system? "
var q4= "I am not really a planet at all, although I used to be one. Who am I? "
var q5= "Which planet is named after the Roman goddess of beauty? "

var ex1= "Mars is the fourth planet from the sun at a distance of about 228 million km"
var ex2= "Currently, Earth is the only known planet (or moon) to have consistent, stable bodies of liquid water on its surface"
var ex3="Planetary surface temperatures tend to get colder the farther a planet is from the Sun. Venus is the exception, as its proximity to the Sun and dense atmosphere make it our solar system's hottest planet."
var ex4= "In 2006, The International Astronomical Union (IAU) downgraded the status of Pluto to that of a dwarf planet because it did not meet the three criteria the IAU uses to define a full-sized planet."
var ex5= "The Romans named the brightest planet, Venus, for their goddess of love and beauty"

quesarray=[q1,q2,q3,q4,q5]
ansarray=["mars","earth","venus","pluto","venus"];
exparray=[ex1,ex2, ex3, ex4,ex5]


var readlineSync = require("readline-sync");
username= readlineSync.question("What is your name?  ");

console.log("Hello "+ username);
console.log("Welcome to my ASTRONOMY QUIZ");
console.log("---------------------------");
console.log("You will be awarded 1 point for every correct answer and 1 point will be deducted for every wrong answer")
console.log("---------------------------");
response= readlineSync.question("Do you want to test how good you are at astronomy? answer with y or n   ");
score= 0

if (response == "y"){
  console.log ("Awesome")
  console.log("Let us begin then")
  console.log("________________________________")
  console.log ("Your score is "+ score)
for (i=0; len= ansarray.length ,i < len; i++){
ans=  readlineSync.question(quesarray[i]);

if (ansarray[i]===ans.toLowerCase()){
    console.log("You are right");
    console.log(exparray[i]);
    score= score+1
    console.log("Your score is "+ score);
    console.log("------------------------");
       

  } else{
    console.log("I am sorry");
    console.log("The correct answer is "+ ansarray[i]);
    console.log(exparray[i]);
    score= score-1
    console.log("Your score is "+ score);
    console.log("------------------------");
    
    
  }
}
console.log("---------------------------");
console.log("---------------------------");
console.log("---------------------------");

if (score==0) {
console.log("Your score is " + score);
console.log("Really? Are you kidding me?");
} else if (score==1) {
console.log("Your score is " + score);
console.log("You need to go back to school");
} else if (score==2) {
console.log("Your score is " + score);
console.log("You can really do better love");
} else if (score==3) {
console.log("Your score is " + score);
console.log("You are GOOOOOOOOOD");
} else if (score==4) {
console.log("Your score is " + score);
console.log("Just a point away from perfect 5");
} else {
console.log("Your score is " + score);
console.log("You are genius");
console.log("Hello Astronaut "+ username);
}


}


 else{
   console.log("Well then, I guess you are a genius in astronomy")
   console.log("Why are you here?")
   console.log("Good Bye Astronaut")
 }
