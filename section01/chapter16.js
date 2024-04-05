// 객체 2
// 1. 상수 객체

const animal = {
    type:"고양이",
    name:"나비",
    color:"balck",
}

// animal = 123; 새로운 값 할당은 에러.

animal.age = 2; //추가
animal.name= "끼양이"; //수정
delete animal.color; //삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person ={
    name :"이정환",
    // 메서드 선언
    sayHi() {
        console.log("안녕");
    },
};

person.sayHi();