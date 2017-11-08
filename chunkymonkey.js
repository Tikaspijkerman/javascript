
function chunkArrayInGroups(arr, size) {
  var placeholder = size;
  var i = 0;
var masterArray = [];
  while(i < arr.length - size + 1){
    answer.push(arr.slice(i, placeholder));
    placeholder += size;
    i += size;
  }
 return answer;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)
);
