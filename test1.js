// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  var sum = input.reduce(function(a, b){
    return a + b;
}, 0);
return sum
}

console.log(result(input));