const cards = ["diamond", "spade", "heart", "club"];
let J = 10
let Q = 10
let K = 10
let A = 11
const values = [2,3,4,5,6,7,8,9,10,J,Q,K,A]
let currentCard = "";
let counter = 0
let urCrdValues = []
let urPoints = 0
function sum(arr, n) {
  if (n <=0) {
      return 0;
  } else {
      return sum(arr,n-1) + arr[n -1]
  }
}

function symbolRandom(num) {
while (counter < num) {
  currentCard = cards[Math.floor(Math.random() * 4)]
  cardVal = values[Math.floor(Math.random()*13)]
  counter++
  urCrdValues.push(cardVal)
  console.log(`You have the ${cardVal} of ${currentCard}`)
};
} //Gives you two cards and tells you as well as placing them into your card values
symbolRandom(2)

if (sum(urCrdValues, 2) < 21) {
  console.log(`You have a total card value of ${sum(urCrdValues, 2)}`)
   console.log('Hit or Stay?')
} else if (sum(urCrdValues, 2) == 21) {
  console.log('21! You win!')
} else if (sum(urCrdValues, 2) > 21) {
  console.log('Over 21! You lose')
}


// function valFunc() {
//     while (currentCard !== "spade") {
//         cardVal = values[Math.floor(Math.random()* 13)]
//         console.log(`Your card is the ${cardVal} of ${currentCard}`)
//     }
// };
// valFunc()




