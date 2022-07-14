let fruitArr = ['banana', 'mango', 'kiwi']
fruitArr.push('avocado')
console.log(`This is reg display ${fruitArr}`)
console.log('This is spread', ...fruitArr)
fruitArr.unshift('dragonfruit')
console.log(fruitArr)
fruitArr.pop()
console.log(fruitArr)
console.log(fruitArr.indexOf('mango'))
fruitArr.sort()
console.log(fruitArr)

const chickenEgg = ['🐔', '🥚'].sort()
console.log(chickenEgg)