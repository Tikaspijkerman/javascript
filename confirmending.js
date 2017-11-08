
function confirmEnding(str, target) {
  var ending = str.length - target.length;
  var endStr = str.substr(ending)
  if (endStr === target) {
    return true;
  }
  else {
    return false;
 }
}

console.log(confirmEnding("my name is tika", "akit"));
