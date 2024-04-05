// 구조 분해 할당 
// 배열이나 객체를 분해해서 변수에 대입하는 것.

// 1. 배열의 구조 분해 할당

let arr = [1,2,3];

let [one,two, three, four = 4 ] = arr;

console.log(one,two);

// 2. 객체의 구조 분해 할당
let person = {
    name:"markers",
    age:27,
    hobby:"테니스",
};

let {name, age:myAge, hobby, extra = "hello",} = person;
console.log(name, myAge, hobby);

// 3. 객체 구조 분해 할당을 이용하여 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
} 

func(person);