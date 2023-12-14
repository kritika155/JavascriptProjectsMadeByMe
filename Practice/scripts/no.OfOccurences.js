let str = "AAaaBBBbCCc";
let output = "A2a2B3b1C2c1";

let txt = "AAaaBBBbCCc";
let txtArr = txt.split("");
let objCnt = txtArr.reduce((accum, currVal) => {
  accum[currVal] = (accum[currVal] || 0) + 1;
  return accum;
}, {});
console.log(objCnt);
let foundArr = [];
objCnt = { A: 2, a: 2, B: 3, b: 1, C: 2, a: 2, b: 1, c: 1 };
keysArr = Object.keys(objCnt);
reverse = "";
keysArr.forEach((element) => {
  reverse += element + objCnt[element];
  console.log(reverse);
});
console.log("Output:", reverse);
