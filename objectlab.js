// let person = {
//     name: "Mateo Rey",
//     age: 15,
//     inClass: true
// }

// console.log(person);
// console.log(person.name)
// person.age = 22
// console.log(person.age)

let newTeach = {
    name: "Mr. Mateo",
    classes: [],
    isTeaching: false,
    willTeach: false
}
newTeach.classes = ['Calculus', 'English']
console.log(newTeach.classes)
console.log(newTeach.name)
console.log(newTeach)

let TeacherAssistant = {
    name: 'Damian',
    inClass: true
}
console.log(TeacherAssistant);
TeacherAssistant.Classes = []
console.log(TeacherAssistant)
TeacherAssistant.Classes.push('English')
console.log(TeacherAssistant)

let fruitArr = []


function sortFruit(fruitArr,fruits) {
    if (fruitArr.includes(fruits)) {
        return 'This array already has that fruit';
        
    } else {
        fruitArr.push(fruits)
        return fruitArr;
    
    }
}

console.log(sortFruit(fruitArr, 'banana'))
console.log(sortFruit(fruitArr, 'apple'))


