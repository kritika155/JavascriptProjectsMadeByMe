var arr = [2, 4, 6, 4, 17, 2, 6, 17, 4, 16, 8, 2, 4, 8];
var duplicatesArr = [];
countObj = {};
for (let i = 0; i < arr.length; i++) {
  if (!duplicatesArr.includes(arr[i])) {
    const duplicatesArrLength = elementCount(arr, arr[i]);
    duplicatesArr.push(a[i]);
    countObj[a[i]] = duplicatesArrLength;
  }
}
function elementCount(arr, element) {
  return arr.filter((currentElement) => currentElement == element).length;
}
console.log("Duplicates:", countObj);
