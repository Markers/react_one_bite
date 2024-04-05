// 1. number type

let num1 = 27
let num2 = 1.5;
let num3 = -20;

let inf= Infinity;
let mInf = -Infinity;

let nan = NaN;

// 2. String Type
let myName = "markers";
let myLocation= "seoul";
let introduce = myName + myLocation 

// 템플릿 리터럴 문법 `${}`
let intoduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(intoduceText)

// 3. Boolean Type

let isSwichOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다) .. 프로그래머가 의도적으로 없다를 표현할때 사용
let empty = null;

// 5. undefined Type
// 미처 정의하지 못할때. (실수이거나 놓쳤을때)
let none;
console.log(none);