// function greaterNum(x,y) {
//     if (x>y) {
//         return `Between ${x} and ${y}, ${x} is the greater number`
//     } else if (y>x) {
//         return `Between ${x} and ${y}, ${y} is the greater number`
//     }
// };
// console.log(greaterNum(3,2)) //WORKS


// function helloWorld(a) {
//     if (a === 'frn') {
//         return "Bonjur"
//     } else if (a === 'es') {
//         return "Hola Buenos Dias"
//     } else {
//         return "hello World"
//     } 
// }
// console.log(helloWorld('es')) //WORKS

// function assignGrade(num) {
// if (num >=90) {
//     return "A"; 
// } else if (num <90 && num >=80) {
//     return "B";
// } else if (num <80 && num >=70) {
//     return "C";
// } else if (num <70 && num >=60) {
//     return "D";
// } else if (num <60) {
//     return "F";
// }
// }
// console.log(assignGrade(Math.floor(Math.random()*100))); //WORKS


function word(noun) {
    if (typeof(noun) !== 'string') {return 'I only work on strings!!'} 
    else if (noun.endsWith('ch') || noun.endsWith('x') || noun.endsWith('z') || noun.endsWith('sh') || noun.endsWith("o",)) 
    {return `${noun}es`} 
    else if (noun.endsWith('ay') || noun.endsWith('iy') || noun.endsWith('ey') || noun.endsWith('oy') || noun.endsWith('uy')) {return `${noun}s`} 
    else if (noun.endsWith('y')) {return `${noun.slice(0, -1)}ies`} 
    else if (noun.endsWith('f') || noun.endsWith('fe')) {return `${noun.slice(0, -1)}ves`}
    else if (noun.endsWith('io') || noun.endsWith('eo') || noun.endsWith('uo') || noun.endsWith('ao') || noun.endsWith('oo')) {return `${noun}s`} 
    else {return `${noun}s`};
};
console.log(word('box')) 

function plural(num, word) {
    console.log(`${num} ${word}s`)
}
 plural(2,'bye')
// code works but with o and y it does not since it just defaults to one of the conditional statements containing said character



// if (noun.endsWith('ch' || 'x' || 'z' || 'sh')) {
//     return `${noun}es`
// } else if (noun.endsWith('ay' || 'iy' || 'ey' || 'oy' || 'uy')) {
// return `${noun}s`
// } else if (noun.endsWith('y')) {
//     return `${noun.slice()}ies`
// } else if (noun.endsWith('f' || 'fe')) {
// return `${noun.slice()}ves`
// } else if (noun.endsWith('io' || 'eo' || 'uo' || 'ao' || 'oo')) {
// return `${noun}s`
// } else if (noun.endsWith('o')) {
//    return `${noun}es`
// } else {
//     return `${noun}s`
// };
// }
// console.log(word('box'));//does not work

function isNumber(val) {
    if (isNaN(val)) {
        return 'Variable is not a number'
    } else {
        return 'Variable is a number'
    }
};
console.log(isNumber('HEY')) //WORKS

function findLargest(num1, num2, num3) {
if (num1 > num2 && num1 > num3) {
    return `${num1} is the largest number`;
} else if (num2 > num1 && num2 > num3) {
    return `${num2} is the largest number`
} else {
    return `${num3} is the largest number`
}
};
console.log(findLargest(67,8458,31)) //WORKS
console.log(Math.max(543,423,3123,333))