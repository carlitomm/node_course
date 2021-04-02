//objects
const person = {
    name: 'carlos',
    age: 29,
    greet() {
        console.log('hi I am' + this.name)
    }
};

const hobbies = ['sports', 21];
for (let hobby of hobbies){
    console.log(hobby)
}

// using function map on an array. it is no modified the existing array 
console.log(hobbies.map(hobby => {
    return ' Hobbby' + hobby
}))

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

const {name, age} = person;
console.log(anme, age);


hobbies.push('Programing'); //it has no problem cuz its is a conts pointer  
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(' console array1 ' + copiedArray)

const coppiedArray2 = [...hobbies];
console.log(' console array1 ' + copiedArray)

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3))