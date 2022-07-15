const cards = ["diamond", "spade", "heart", "club"];
let J = 10
let Q = 10
let K = 10
let A = 11
let urCrdValues = []
const values = [2,3,4,5,6,7,8,9,10,J,Q,K,A]
let currentCard = "";
let counter = 0
stringOfUrCards = []
let urHand = {}
function sum(urCrdValues[0], n) {
  if (n <=0) {
      return 0;
  } else {
      return sum(arr,n-1) + arr[n -1]
  }
}

function symbolRandom(num) {
 
  for (let i = 0; i < num; i++) {
    currentCard = cards[Math.floor(Math.random() * 4)]
    cardVal = values[Math.floor(Math.random()*13)]
    counter++
    urHand.suite = `${currentCard}`
    urHand.value = `${cardVal}`
    urCrdValues.push(urHand.value)
   
   
  };
  console.log(urCrdValues)
}//Gives you two cards and tells you as well as placing them into your card values
symbolRandom(2)
function cardCount() {
if (sum(urCrdValues, 2) > 21 && urCrdValues.includes(11)) {
for (let i = 0; i < urCrdValues.length; i++) {
  if (urCrdValues[i] === 11) {
    urCrdValues.splice(i,-1)
    urCrdValues.push(1)
    return ('Your Ace has changed in value. It is now a one');
  }
}
} else if (sum(urCrdValues, 2) < 21) {
  const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});rl.question("Hit or Stay?" , function (answer) {
  
    if (answer == 'Hit') {
      symbolRandom(1)
      console.log(urCrdValues);
    } else if (answer == 'Stay') {
    console.log(urCrdValues);
    }
  
  
  rl.close();
});
  return (` You have a total card value of ${sum(urCrdValues, 2)}.`)
  
} else if (sum(urCrdValues, 2) == 21) {
  return ('21! You win!');
}
 else if (sum(urCrdValues, 2) > 21) {
  return('Over 21! You lose')
}
}





