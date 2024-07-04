//Practice questions:
//guess the numnber game
let gameNum = 25;
let userNum =prompt("Guess the number");

while (userNum!= gameNum){
    userNum= prompt("You entered the wrong number guess again!");
}
console.log("Congrats, you entered the right number");


//Print only even numbers b/w 1 and 100
for(let num=0;num<=100;num++){
    if(num%2==0){
        console.log(num);
    }
} 

//Arrays
//Enter the marks anvd calculate average
let marks=[56,67,98,76,77.70];
let sum=0;

for(let val of marks){
    sum+= val;
}
let avg = sum/marks.length;
console.log(`Average marks of class=${avg}`);
