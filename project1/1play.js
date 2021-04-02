var name = "carlos";
var hasHobbies = true;

// better is to use let than var
let lastName = "miguelez";
const age = 25;

function summarizer(username, hasHobbies){
    return 'name is ' + username + ' has hobbies ' + hasHobbies;
}

// arrow function
const sumarizeUser = (username, lastName, hasHobbies) => {
    return username + ' ' + lastName + ' ' + hasHobbies;
}

const addRamdom = () => 1 + 2;

console.log(sumarizeUser(name, lastName ,hasHobbies))