var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){

for (var i = 0; i < contacts.length; i++){ // means all the contacts are searched through, and after the last contact the system stops searching.
    if (contacts[i].firstName === firstName) {
        if (contacts[i].hasOwnProperty(prop)) { // starts working if there is found a firstname with the value of firstName > starts looking for the prop
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";

}

console.log(lookUpProfile("Akira", "lastName"));
