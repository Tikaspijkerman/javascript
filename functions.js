

function replace(str) {
var old = str;
var res = str.replace(/-/g, "_");
return res
}
console.log(replace("kebab-my-world"));
