function slasher(arr, howMany) {
var a = arr;
var sliced = a.slice(howMany);
return sliced;
}
console.log(slasher (['burgers', 'fries', 'shake'], 1)
);
// slasher ([1,2,3], 2) should return [3]
// slasher ([1,2,3], 0) should return [1, 2, 3]
// slasher ([1,2,3], 9) should return []
// slasher ([1,2,3], 4) should return []
// slasher (['burgers', 'fries', 'shake'], 1) should return ['fries', 'shake'].
