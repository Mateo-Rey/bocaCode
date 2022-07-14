let instrumental = Math.floor(Math.random()*10)
let vocals = Math.floor(Math.random()*10)
let tempo = Math.floor(Math.random()*10)

let sum = instrumental + vocals + tempo
function musicRating() {
if (sum==30) {
    console.log(`That is a perfect rating of ${sum}! You have stellar song choice.`)
} else if (sum <30 && sum >=25) {
    console.log(`Amazing rating of ${sum}. I really like your music taste.`)
} else if (sum <25 && sum >=20) {
    console.log(`That is a good rating of ${sum}`)
} else if (sum <20 && sum >=15) {
    console.log(`This is alright you have a rating of ${sum}`)
} else if (sum <15) {
    console.log(`your music taste is horrible take this rating of a poor ${sum} out of 30`)
};
}
musicRating()