var age =  Number(prompt("what is your age?"));
if (age < 0){
  console.log("error");
}
if (age === 21) {
  console.log("happy 21st birthday!!");
}
if (age % 2 !== 0) {
 console.log("your age is odd!");
}
else if (age % math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}

 //prompt always returns a string. When you use 'Number', it reverts it into a number.
 
