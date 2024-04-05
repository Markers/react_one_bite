// 1. 대입연산자 
//  = 
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1+2) * 10
// 우선 순위가 *,/,% 가 +,- 보다 높다

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
console.log(num7)

// 4. 증감 연산자 
let num8 = 10;
num8++;
console.log(num8++); //후위연산
console.log(++num8); //전위연산
// 증감 연산자는 그 줄이 끝난 뒤에 증감한다.

// 5. 논리 연산자

let or = true || false;
let and = true && false;
let not = !true

console.log(or);
console.log(and);
console.log(not);

let comp1 = 1 === "1";
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;


console.log(comp1);
console.log(comp2);
console.log(comp3);
console.log(comp4);
console.log(comp5);
console.log(comp6);