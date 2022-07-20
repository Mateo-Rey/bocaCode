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
let arrofValues = []
let sumOfCards = 0
let finalArray = []
function sum(array) {
  for (let i = 0; i < array.length; i++) {
    sumOfCards += array[i]
  }
  return sumOfCards;
  
}


function symbolRandom(num) {
 let tempArray = []
  for (let i = 0; i < num; i++) {
    currentCard = cards[Math.floor(Math.random() * 4)]
    cardVal = values[Math.floor(Math.random()*13)]
    counter++
    urHand.suite = `${currentCard}`
    urHand.value = `${cardVal}`
    urCrdValues.push(urHand.value)
    
  };
  urCrdValues.forEach(str => {
    tempArray.push(Number(str));
  });
  arrofValues = tempArray
}//Gives you two cards and tells you as well as placing them into your card values
symbolRandom(2)
console.log(arrofValues)
function cardCount() {
  sum(arrofValues)
if (sumOfCards > 21 && arrofValues.includes(11)) {
for (let i = 0; i < arrofValues.length; i++) {
  if (arrofValues[i] === 11) {
    arrofValues.splice(i,-1)
    arrofValues.push(1)
    return ('Your Ace has changed in value. It is now a one');
  }
}
} else if (sumOfCards < 21) {

  const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});rl.question("Hit or Stay?" , function (answer) {
  
    if (answer == 'Hit') {
      symbolRandom(1)
      console.log(arrofValues);
      arrofValues = finalArray
    } else if (answer == 'Stay') {
      console.log(arrofValues);
    }
    
    
    rl.close();
  });
  return (` You have a total card value of ${sumOfCards}.`)
  

}
}
cardCount()
function finalResult () {
  if (sum(finalArray) < 21) {
    

  } else if (sum(finalArray) == 21) {
    return ('21! You win!');
  } else if (sum(finalArray) > 21) {
    return('Over 21! You lose')

}
}
finalResult()
console.log(symbolRandom(1))