let Q = [0, 1, 2, [3, 4], 5, 6];
let A = [0, 1, 2, 3, 4, 5, 6];

function flattenArray(inputArray) {
  let outputArray = [];
  recursion(0, inputArray, outputArray);
  return outputArray;
}
function recursion(index, inputArray, outputArray) {
  if (index >= inputArray.length) return;
  if (Array.isArray(inputArray[index])) {
    recursion(0, inputArray[index], outputArray);
  } else {
    outputArray.push(inputArray[index]);
  }
  recursion(index + 1, inputArray, outputArray);
}
let flatArray = flattenArray(Q);
console.log(flatArray);
