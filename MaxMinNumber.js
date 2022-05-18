let a = 10;
let b = 20;
let c = 30;

let op1 = a + b * c ;
let op2 = a % b + c ;
let op3 = c + a / b ;
let op4 = a * b + c ;

const arrayMax = [op2,op1,op3,op4];
console.log(arrayMax)
let max = arrayMax[0];

for (var i = 1; i < 4; i++) {
  if (arrayMax[i] > max) {
    max = arrayMax[i];
  }
}
console.log("Maximum Vlue:- " + max);