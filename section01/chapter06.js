// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 자동으로 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;
console.log(result)

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용하여 직접 형 변환
// 문자열 -> 숫자 

let str1 = "10";
let strToNum1 = Number(str1);

let str2= "10개";
let strToNum2 = parseInt(str2); //숫자값(뒷편) 이외의 문자열은 빼고서 처리
let strToNum2_1 = Number(str2);

console.log(strToNum1)
console.log(strToNum2)
console.log(strToNum2_1)

// -> 숫자 -> 문자열
let num1 = 20;
let num2 = 20.123;
let numtoStr1 = String(num1)
let numtoStr2 = String(num2)
console.log(numtoStr1)
console.log(numtoStr2)