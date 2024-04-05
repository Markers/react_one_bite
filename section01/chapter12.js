// 함수 표현식과 화살표 함수

// 선언식
function funcA() {
    console.log("funcA")
}

let varA = funcA;
varA();


// 선언식이 아니다.
// 함수 표현식
// 호이스팅의 대상이 되지 않는다.
let varB = function () {
    console.log("funcB");
}

varB();

// 2. 화살표 함수

let varC = (value) => value + 1;

console.log(varC(10));