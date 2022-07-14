let person = {
    name: 'Mateo Rey',
    age: 15,
    inClass: true,
    payingAttention: false
}

console.log(person)

console.log(Object.keys(person))
const hasAge = person.hasOwnProperty("age") > -1
console.log(hasAge)