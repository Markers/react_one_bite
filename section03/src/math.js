// math 모듈

export function add(a,b) {
    return a+b;
}

export function sub(a,b) {
    return a-b;
}


// 모듈의 대표값
export default function multiply(a,b){
    return a*b;
}
// common js module 방식.
// module.exports = {
//     add, // add: add  식으로 작성되나 프로퍼티와 함수명이 같을때는 그냥 함수만 나열해도 된다.
//     sub,
// }


// es module 방식
// export {add, sub}