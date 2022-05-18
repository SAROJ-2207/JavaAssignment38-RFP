let a = 10;
let b = 20;
let c = 30;

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

const arrayMin = [op1, op2, op3, op4];
console.log(arrayMin)
var min = arrayMin[0];

for (var i = 1; i < 4; i++) {
  if (arrayMin[i] < min) {
    min = arrayMin[i];
  }
}
console.log("Minimum Vlue:- " + min);